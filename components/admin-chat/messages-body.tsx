"use client";
import React, { memo } from "react";

import { ScrollArea } from "@/components/ui/scroll-area";
import { MessageElement } from "./message-element";
import { MessageType } from "@/interface/rooms";

export const MessagesBody: React.FC<{ messages: MessageType[] }> = memo(
  ({ messages }) => {
    // console.log("messages conponent");
    return (
      <ScrollArea className='z-40'>
        <div className='px-6 w-full lg:max-w-5xl mx-auto flex flex-col-reverse gap-4 mt-auto'>
          {messages?.map((m: MessageType, i: number) => (
            <MessageElement key={`${m.text}_${i}`} message={m} />
          ))}
        </div>
      </ScrollArea>
    );
  }
);
