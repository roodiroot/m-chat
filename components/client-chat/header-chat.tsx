"use client";

import { memo } from "react";
import { Cross1Icon } from "@radix-ui/react-icons";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "../ui/button";

export const HeaderChat: React.FC<{
  roomName: string;
  className?: string;
  closeChat: (value: boolean) => void;
}> = memo(({ roomName, className = " ", closeChat }) => {
  return (
    <div
      className={`shadow-xl bg-white ring-1 ring-slate-100 rounded-xl flex  py-3 px-5 ${className}`}
    >
      <div className='flex-1 flex items-center space-x-4 w-full'>
        <Avatar className='w-9 h-9 bg-slate-500/20'>
          <AvatarImage src='' />
          <AvatarFallback className='bg-rose-500'>
            {roomName.slice(0, 2)}
          </AvatarFallback>
        </Avatar>
        <div className='text-slate-900'>
          <p className='text-sm font-semibold leading-none whitespace-nowrap'>
            {roomName}
          </p>
          <p className='text-xs text-slate-300'>в сети</p>
        </div>
      </div>
      <div className='flex justify-end'>
        <Button
          size='icon'
          className='rounded-full bg-inherit text-slate-600 min-w-[40px] hover:bg-slate-100 hover:text-slate-700'
          onClick={() => closeChat(false)}
        >
          <Cross1Icon className='h-4 w-4' />
        </Button>
      </div>
    </div>
  );
});
