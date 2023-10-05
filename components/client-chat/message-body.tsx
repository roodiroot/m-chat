"use client";
import React from "react";

import { MessageType } from "@/interface/rooms";
import { MessageAuthor } from "./mesage-author";
import { MessageClient } from "./mesage-client";

export const MessageBody: React.FC<{ message: MessageType; roomName: string }> =
  React.forwardRef(({ message, roomName }, ref) => {
    if (message?.author === roomName) {
      return <MessageAuthor text={message.text} time={message.createdAt} />;
    }
    return <MessageClient text={message.text} time={message.createdAt} />;
  });
