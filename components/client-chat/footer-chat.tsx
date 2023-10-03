"use client";

import { PaperPlaneIcon } from "@radix-ui/react-icons";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const FooterChat = ({
  value,
  disabled,
  setValue,
  submit,
}: {
  value: string;
  disabled: boolean;
  setValue: (e: any) => void;
  submit: () => void;
}) => {
  return (
    <div className='p-6 border-t'>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          submit();
        }}
        className='flex w-full max-w-sm items-center space-x-2'
      >
        <Input
          type='text'
          placeholder='Введите сообщение'
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <Button type='submit' size='icon' disabled={disabled}>
          <PaperPlaneIcon className='h-4 w-4' />
        </Button>
      </form>
    </div>
  );
};
