"use client";

import { memo, useEffect } from "react";

import { ScrollArea } from "@/components/ui/scroll-area";
import { Room } from "@/interface/rooms";
import { AdminClientLine } from "@/components/admin-chat/admin-clien-line";
import { Socket } from "socket.io-client";

export const AdminClientRoomsList: React.FC<{
  socket: Socket;
  clientRooms: Room[];
  roomSelect: Room;
  sneacIntoRoom: (room: Room) => void;
}> = memo(({ socket, roomSelect, clientRooms, sneacIntoRoom }) => {
  // console.log("list rooms component render");
  return (
    <div className=' w-full  max-w-[300px] relative'>
      <ScrollArea className='w-full h-full'>
        {clientRooms?.map((i) => (
          <AdminClientLine
            socket={socket}
            key={i.roomName}
            room={i}
            onClick={() => sneacIntoRoom(i)}
            select={roomSelect.roomName === i.roomName}
            className=''
          />
        ))}
      </ScrollArea>
    </div>
  );
});
