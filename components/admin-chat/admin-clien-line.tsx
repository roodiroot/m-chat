"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Room } from "@/interface/rooms";

export const AdminClientLine: React.FC<{
  room: Room;
  select: boolean;
  onClick: () => void;
  className?: string;
}> = ({ room, select, className = "", onClick }) => {
  return (
    <div
      onClick={() => onClick()}
      className={`
      relative flex items-center space-x-4 p-4 bg-fial-50 cursor-pointer hover:bg-gradient-to-r hover:from-rose-400/30 transition border-b border-fial-100 after:w-1
      ${
        select
          ? "hover:bg-inherit after:h-full after:absolute after:top-0 after:left-0 after:bg-rose-500 before:absolute before:top-0 before:left-0 before:inset-0 before:bg-gradient-to-r before:from-rose-400/40"
          : ""
      }
         ${className}`}
    >
      <Avatar className='relative z-20'>
        <AvatarImage src='' />
        <AvatarFallback className='bg-fial-900 text-white'>
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
