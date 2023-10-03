"use client";

import { memo } from "react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export const HeaderChat: React.FC<{ roomName: string; className?: string }> =
  memo(({ roomName, className = " " }) => {
    return (
      <div className={`flex items-center space-x-4 p-6 ${className}`}>
        <Avatar>
          <AvatarImage src='' />
          <AvatarFallback>{roomName.slice(0, 2)}</AvatarFallback>
        </Avatar>
        <div className='text-primary-foreground'>
          <p className='text-sm font-medium leading-none'>{roomName}</p>
          <p className='text-xs text-primary-foreground/60'>
            данные пользователя
          </p>
        </div>
      </div>
    );
  });
