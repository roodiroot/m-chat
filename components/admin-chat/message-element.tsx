"use client";
import { MessageType } from "@/interface/rooms";

export const MessageElement: React.FC<{ message: MessageType }> = ({
  message,
}) => {
  console.log("render message");
  return (
    <div
      className={`
            flex w-max max-w-[75%] flex-col gap-2 rounded-lg px-3 py-2 text-sm bg-muted
            ${
              message?.author === "admin" &&
              "ml-auto bg-primary text-primary-foreground"
            }
            `}
    >
      {message?.text}
    </div>
  );
};
