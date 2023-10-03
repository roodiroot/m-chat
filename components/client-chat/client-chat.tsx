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
}: {
  roomName: string;
  messages: any[];
  valueInput: string;
  disabled: boolean;
  setValueInput: (e: any) => void;
  submit: () => void;
}) => {
  return (
    <div className='w-full h-full flex flex-col border shadow-sm rounded-lg overflow-hidden bg-white'>
      <HeaderChat roomName={roomName} className='bg-primary' />
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
