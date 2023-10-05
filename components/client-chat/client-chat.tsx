"use client";

import { HeaderChat } from "@/components/client-chat/header-chat";
import { FooterChat } from "@/components/client-chat/footer-chat";
import { BodyChat } from "@/components/client-chat/body-chat";

export const ClientChat = ({
  roomName,
  messages,
  valueInput,
  disabled,
  setValueInput,
  submit,
  close,
}: {
  roomName: string;
  messages: any[];
  valueInput: string;
  disabled: boolean;
  setValueInput: (e: any) => void;
  submit: () => void;
  close: (value: boolean) => void;
}) => {
  return (
    <div className='relative w-full h-full flex flex-col overflow-hidden bg-white'>
      <HeaderChat
        roomName={roomName}
        className='absolute z-20 top-5 inset-x-6'
        closeChat={close}
      />
      <BodyChat messages={messages} roomName={roomName} />
      <FooterChat
        value={valueInput}
        setValue={setValueInput}
        submit={submit}
        disabled={disabled}
      />
    </div>
  );
};
