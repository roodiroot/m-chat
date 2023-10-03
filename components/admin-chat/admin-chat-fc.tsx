"use client";

import React from "react";
import { Socket } from "socket.io-client";

import { AdminClientRoomsList } from "@/components/admin-chat/admin-client-rooms-list";
import { AdminBodyBL } from "@/components/admin-chat/admin-body-bl";
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
      <div className='flex flex-1 rounded-md border overflow-hidden'>
        <AdminClientRoomsList
          clientRooms={clientRooms}
          sneacIntoRoom={sneacIntoRoom}
        />
        <AdminBodyBL socket={socket} roomSelect={roomSelect} />
      </div>
      <div className='hidden lg:block rounded-md border w-full  max-w-[300px] overflow-hidden relative'>
        <AdminInfo />
      </div>
    </div>
  );
};
