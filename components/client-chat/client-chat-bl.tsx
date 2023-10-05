"use client";

import React, { useState, useEffect } from "react";
import uuid from "react-uuid";
import { motion } from "framer-motion";

import { socket } from "@/socket/socket";
import { ClientChat } from "@/components/client-chat/client-chat";
import { fetchMessage } from "@/lib/messages";
import { MessageType } from "@/interface/rooms";
import { ClientCallChatUI } from "@/components/client-chat/client-call-chat-ui";

const name = uuid().slice(9, 18);
const variants = {
  open: { opacity: 1, scale: 1, x: 0 },
  closed: { opacity: 0, scale: 0.9, x: "100%" },
};

export const ClientChatBL = ({ className = "" }: { className?: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  const [messages, setMessages] = useState<MessageType[]>([]);
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
    const data: MessageType = {
      roomName: roomName,
      author: roomName,
      text: valueMessage,
      socketId: socket.id,
      uniqId: uuid(),
      createdAt: new Date(),
    };
    setDisabled(true);
    if (!valueMessage) {
      setDisabled(false);
      return;
    }
    socket.emit("chat", data);
    setValueMessage("");
    setDisabled(false);
  };

  return (
    <>
      <motion.div
        animate={!isOpen ? "open" : "closed"}
        variants={variants}
        onClick={() => setIsOpen(!isOpen)}
        className='absolute bottom-10 right-10 cursor-pointer'
      >
        <ClientCallChatUI />
      </motion.div>
      <motion.div
        animate={isOpen ? "open" : "closed"}
        variants={variants}
        className={`
      absolute w-full bg-red/0 rounded-3xl shadow-[#4949a18e] shadow-2xl ring-violet-900/5 ring-1
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
          close={setIsOpen}
        />
      </motion.div>
    </>
  );
};
