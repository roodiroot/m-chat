"use client";

import { memo } from "react";
import { PaperPlaneIcon } from "@radix-ui/react-icons";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export const ChatInput = memo(
  ({
    value = "",
    setValue = () => {},
    sendMessage,
  }: {
    value?: string;
    setValue?: (e: any) => void;
    sendMessage: () => void;
  }) => {
    return (
      <form
        onSubmit={(e) => {
          e.preventDefault();
          sendMessage();
        }}
        className='flex w-full items-center space-x-2'
      >
        <Input
          type='text'
          placeholder='Введите сообщение'
          value={value}
          onChange={(e: any) => setValue(e?.target?.value)}
        />
        <Button type='submit' size='icon'>
          <PaperPlaneIcon className='h-4 w-4' />
        </Button>
      </form>
    );
  }
);
