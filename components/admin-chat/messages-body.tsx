"use client";
import React, { memo, useRef } from "react";

import { MessageElement } from "./message-element";
import { MessageType } from "@/interface/rooms";
import { useScroll } from "@/hooks/use-scroll";

export const MessagesBody: React.FC<{ messages: MessageType[] }> = memo(
  ({ messages }) => {
    const messageEl = useRef<HTMLDivElement>(null);
    useScroll(messageEl, messages.length);

    return (
      <div
        id='scroll_castom'
        className='overflow-y-auto overflow-x-hidden z-40'
        ref={messageEl}
      >
        <div className='px-6 w-full lg:max-w-5xl mx-auto flex flex-col-reverse gap-4 mt-auto'>
          {messages?.map((message: MessageType) => (
            <MessageElement key={message.uniqId} message={message} />
          ))}
        </div>
      </div>
    );
  }
);
