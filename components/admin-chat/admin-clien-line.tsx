"use client";
import { motion } from "framer-motion";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MessageType, Room } from "@/interface/rooms";
import { Socket } from "socket.io-client";
import { useEffect, useState } from "react";
import { transitionObjectVariants } from "@/lib/travsition-object-variants";

export const AdminClientLine: React.FC<{
  socket: Socket;
  room: Room;
  select: boolean;
  onClick: () => void;
  className?: string;
}> = ({ socket, room, select, className = "", onClick }) => {
  const [lastMessage, setLastMessage] = useState<MessageType | null>(null);
  const [missedMess, setMissedMess] = useState<number>(0);

  useEffect(() => {
    let lm = localStorage.getItem("last_message");
    if (lm) {
      console.log(lm);
      setMissedMess(JSON.parse(lm));
    }
    socket.on("last_message", (e) => {
      if (e.roomName === room.roomName) {
        setLastMessage(e);
        setMissedMess((k) => k + 1);
        localStorage.setItem("last_message", String(missedMess));
        console.log(missedMess);
      }
    });
  }, []);

  useEffect(() => {
    if (select) {
      setMissedMess(0);
    }
  }, [select]);

  return (
    <div
      onClick={() => onClick()}
      className={`
      relative flex items-center mix-blend-multiply p-4 bg-fial-50 cursor-pointer transition border-b border-fial-100
      
         ${className}`}
    >
      {select && (
        <motion.div
          layoutId='active-room'
          transition={transitionObjectVariants}
          className='absolute inset-0 rounded-md overflow-hidden after:w-1 after:h-full after:absolute after:top-0 after:left-0 after:bg-rose-500 before:absolute before:top-0 before:left-0 before:inset-0 before:bg-gradient-to-r before:from-rose-400/40'
        ></motion.div>
      )}
      <div className='w-full flex space-x-4 hover:after:absolute after:transition  after:w-1 after:h-full after:top-0 after:left-0 after:bg-inherit hover:after:bg-rose-500/50 '>
        <Avatar className='relative z-20'>
          <AvatarImage src='' />
          <AvatarFallback className='bg-fial-900 text-white'>
            {room.hostName.slice(0, 2)}
          </AvatarFallback>
        </Avatar>
        <div className='text-gray-900 space-y-1'>
          <p className='text-sm font-medium leading-none'>{room.roomName}</p>
          <p className='text-xs text-gray-900/60 line-clamp-1'>
            {lastMessage?.text ? lastMessage?.text : "в сети"}
          </p>
        </div>
      </div>
      {missedMess !== 0 && (
        <div className='absolute top-4 right-4 w-5 h-5 rounded-full bg-rose-500'>
          <span className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-xs'>
            {missedMess}
          </span>
        </div>
      )}
    </div>
  );
};
