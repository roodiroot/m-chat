"use client";
import { memo } from "react";

import { Message } from "@/components/client-chat/message";
import { MessageType } from "@/interface/rooms";
import { ScrollArea } from "@/components/ui/scroll-area";

export const BodyChat = memo(
  ({ messages, roomName }: { messages: MessageType[]; roomName: string }) => {
    return (
      <div className='flex-1  overflow-hidden relative'>
        <ScrollArea className='w-full h-full z-50'>
          <div className='relative z-10 h-full w-full flex flex-col-reverse gap-4 px-2'>
            {messages?.map((m, i) => (
              <Message
                key={`${m?.text}_${i}`}
                message={m}
                roomName={roomName}
              />
            ))}
          </div>
        </ScrollArea>
      </div>
    );
  }
);
