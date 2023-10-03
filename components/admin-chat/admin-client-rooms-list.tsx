"use client";

import { memo } from "react";

import { ScrollArea } from "@/components/ui/scroll-area";
import { Room } from "@/interface/rooms";
import { AdminClientLine } from "@/components/admin-chat/admin-clien-line";

export const AdminClientRoomsList: React.FC<{
  clientRooms: Room[];
  sneacIntoRoom: (room: Room) => void;
}> = memo(({ clientRooms, sneacIntoRoom }) => {
  console.log("list rooms component render");
  return (
    <div className=' w-full  max-w-[300px] relative'>
      <ScrollArea className='w-full h-full'>
        {clientRooms?.map((i) => (
          <AdminClientLine
            key={i.roomName}
            room={i}
            onClick={() => sneacIntoRoom(i)}
            className=''
          />
        ))}
      </ScrollArea>
    </div>
  );
});
