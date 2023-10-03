"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Room } from "@/interface/rooms";

export const AdminClientLine: React.FC<{
  room: Room;
  onClick: () => void;
  className?: string;
}> = ({ room, className = "", onClick }) => {
  return (
    <div
      onClick={() => onClick()}
      className={`flex items-center space-x-4 p-4 bg-slate-100 cursor-pointer hover:bg-slate-200 transition border-b ${className}`}
    >
      <Avatar>
        <AvatarImage src='' />
        <AvatarFallback className='bg-white'>
          {room.hostName.slice(0, 2)}
        </AvatarFallback>
      </Avatar>
      <div className='text-gray-900 space-y-1'>
        <p className='text-sm font-medium leading-none'>{room.hostName}</p>
        <p className='text-xs text-gray-900/60'>{room.roomName}</p>
      </div>
    </div>
  );
};
