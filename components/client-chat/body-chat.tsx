"use client";
import { memo, useRef } from "react";

import { MessageBody } from "@/components/client-chat/message-body";
import { MessageType } from "@/interface/rooms";
import { useScroll } from "@/hooks/use-scroll";
import { AnimatePresence } from "framer-motion";

export const BodyChat = memo(
  ({ messages, roomName }: { messages: MessageType[]; roomName: string }) => {
    const messageEl = useRef<HTMLDivElement>(null);
    useScroll(messageEl, messages.length);

    return (
      <div className='z-10 flex-1 overflow-hidden w-full h-full'>
        <div className='w-full h-full px-7 pt-5'>
          <div
            id='scroll_castom'
            ref={messageEl}
            className='w-full h-full overflow-y-auto overflow-x-hidden flex flex-col-reverse'
          >
            <div className='w-full flex flex-col-reverse gap-4'>
              <AnimatePresence initial={false} mode='popLayout'>
                {messages?.map((m) => (
                  <MessageBody key={m.uniqId} message={m} roomName={roomName} />
                ))}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    );
  }
);
