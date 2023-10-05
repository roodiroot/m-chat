"use client";
import React from "react";

import { MessageType } from "@/interface/rooms";
import { MessageAuthor } from "../client-chat/mesage-author";
import { MessageClient } from "../client-chat/mesage-client";

export const MessageElement: React.FC<{ message: MessageType }> =
  React.forwardRef(({ message }, ref) => {
    if (message?.author === "admin") {
      return <MessageAuthor text={message.text} time={message.createdAt} />;
    }
    return <MessageClient text={message.text} time={message.createdAt} />;
  });
