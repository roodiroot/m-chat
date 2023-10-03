"use client";

import { MessageType } from "@/interface/rooms";

export const Message = ({
  message,
  roomName,
}: {
  message: MessageType;
  roomName: string;
}) => {
  return (
    <div
      className={`
                      flex w-max max-w-[75%] flex-col gap-2 rounded-lg px-3 py-2 text-sm bg-muted
                      ${
                        message?.author === roomName &&
                        "ml-auto bg-primary text-primary-foreground"
                      }
                  `}
    >
      {message?.text}
    </div>
  );
};
