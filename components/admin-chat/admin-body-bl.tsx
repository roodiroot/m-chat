"use client";

import { Socket } from "socket.io-client";
import React, { useState, useEffect } from "react";
import uuid from "react-uuid";

import { MessagesBody } from "@/components/admin-chat/messages-body";
import { MessageType, Room } from "@/interface/rooms";
import { fetchMessage } from "@/lib/messages";
import { ClientSubmitForm } from "../client-chat/client-submit-form";

export const AdminBodyBL: React.FC<{ socket: Socket; roomSelect: Room }> = ({
  socket,
  roomSelect,
}) => {
  const [valueMessage, setValueMessage] = useState("");
  const [message, setMessage] = useState<MessageType[]>([]);

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
    const data: MessageType = {
      roomName: roomSelect.roomName,
      text: valueMessage,
      socketId: socket.id,
      author: "admin",
      uniqId: uuid(),
      createdAt: new Date(),
    };
    socket.emit("chat", data);
    setValueMessage("");
  };

  return (
    <div className='w-full h-full overflow-hidden relative min-h-full flex flex-col'>
      <div className='flex-1 overflow-hidden relative text-3xl flex flex-col justify-end'>
        {message.length ? <MessagesBody messages={message} /> : ""}
      </div>
      <div className='py-6'>
        <ClientSubmitForm
          value={valueMessage}
          setValue={setValueMessage}
          submit={sendMessage}
          disabled={false}
        />
      </div>
    </div>
  );
};
