"use client";

import React from "react";
import { Socket } from "socket.io-client";

import { AdminClientRoomsList } from "@/components/admin-chat/admin-client-rooms-list";
import { AdminBodyChatBL } from "@/components/admin-chat/admin-body-chat-bl";
import { AdminInfo } from "@/components/admin-chat/admin-info";
import { Room } from "@/interface/rooms";

export const AdminChatsFC: React.FC<{
  socket: Socket;
  clientRooms: Room[];
  roomSelect: Room;
  sneacIntoRoom: (room: Room) => void;
}> = ({ socket, clientRooms, roomSelect, sneacIntoRoom }) => {
  return (
    <div className='w-full h-full flex gap-6 overflow-hidden'>
      <div className='flex gap-6 flex-1 overflow-hidden '>
        <AdminClientRoomsList
          socket={socket}
          roomSelect={roomSelect}
          clientRooms={clientRooms}
          sneacIntoRoom={sneacIntoRoom}
        />
        <AdminBodyChatBL socket={socket} roomSelect={roomSelect} />
      </div>
      <div className='hidden lg:block w-full  max-w-[300px]'>
        <AdminInfo />
      </div>
    </div>
  );
};
