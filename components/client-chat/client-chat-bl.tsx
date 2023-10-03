"use client";

import React, { useState, useEffect } from "react";
import uuid from "react-uuid";

import { socket } from "@/socket/socket";
import { ClientChat } from "@/components/client-chat/client-chat";
import { fetchMessage } from "@/lib/messages";

const name = uuid().slice(9, 18);

export const ClientChatBL = ({ className = "" }: { className?: string }) => {
  const [messages, setMessages] = useState<any[]>([]);
  const [valueMessage, setValueMessage] = useState<string>("");
  const [roomName, setRoomName] = useState("");

  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    if (roomName) {
      fetchMessage(roomName).then((data) => {
        setMessages(data);
      });
    }
  }, [roomName]);

  useEffect(() => {
    setDisabled(true);
    const roomNameLocalStore = sessionStorage.getItem("room_name");
    if (!roomNameLocalStore) {
      sessionStorage.setItem("room_name", name);
    }
    setRoomName(roomNameLocalStore || "");
    socket.connect();

    socket.on("connect", () => {
      const data = { socketId: socket.id, roomName: roomNameLocalStore };
      socket.emit("join_room", data);
    });

    socket.on("chat", (e) => {
      setMessages((messages) => [e, ...messages]);
    });

    socket.on("disconnect", () => {
      console.log("disconnect");
    });
    setDisabled(false);
    return () => {
      socket.off("connect");
      socket.off("disconnect");
      socket.off("chat");
      socket.disconnect();
    };
  }, [roomName]);

  const sendMessage = () => {
    setDisabled(true);
    if (!valueMessage) {
      setDisabled(false);
      return;
    }
    socket.emit("chat", {
      roomName: roomName,
      author: roomName,
      text: valueMessage,
      socketId: socket.id,
    });
    setValueMessage("");
    setDisabled(false);
  };

  return (
    <div
      className={`
      absolute w-full bg-red/0
      max-w-full sm:max-w-[330px] h-full 
      max-h-full sm:max-h-[490px] overflow-hidden
      ${className}
    `}
    >
      <ClientChat
        roomName={roomName}
        messages={messages}
        valueInput={valueMessage}
        setValueInput={setValueMessage}
        submit={sendMessage}
        disabled={disabled}
      />
    </div>
  );
};
