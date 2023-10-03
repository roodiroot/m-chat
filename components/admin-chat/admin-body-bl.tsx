"use client";

import { Socket } from "socket.io-client";
import React, { useState, useEffect } from "react";

import { MessagesBody } from "@/components/admin-chat/messages-body";
import { Room } from "@/interface/rooms";
import { fetchMessage } from "@/lib/messages";
import { ChatInput } from "@/components/chat-input";

export const AdminBodyBL: React.FC<{ socket: Socket; roomSelect: Room }> = ({
  socket,
  roomSelect,
}) => {
  const [valueMessage, setValueMessage] = useState("");
  const [message, setMessage] = useState<any[]>([]);

  useEffect(() => {
    if (roomSelect.roomName) {
      fetchMessage(roomSelect.roomName).then((data) => {
        setMessage(data);
      });
    }

    socket.on("chat", (e: any) => {
      setMessage((messages) => [e, ...messages]);
    });

    return () => {
      socket.off("chat");
    };
  }, [roomSelect.roomName, socket.id]);

  const sendMessage = () => {
    socket.emit("chat", {
      roomName: roomSelect.roomName,
      text: valueMessage,
      socketId: socket.id,
      author: "admin",
    });
    setValueMessage("");
  };

  return (
    <div className='w-full h-full overflow-hidden relative min-h-full flex flex-col'>
      <div className='flex-1 overflow-hidden relative text-3xl flex flex-col justify-end'>
        {message.length ? <MessagesBody messages={message} /> : ""}
      </div>
      <div className='p-6 border-t'>
        <ChatInput
          value={valueMessage}
          setValue={setValueMessage}
          sendMessage={sendMessage}
        />
      </div>
    </div>
  );
};
