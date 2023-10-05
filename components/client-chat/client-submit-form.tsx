import React, { memo } from "react";
import { PaperPlaneIcon } from "@radix-ui/react-icons";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const ClientSubmitForm: React.FC<{
  value: string;
  disabled: boolean;
  setValue: (e: any) => void;
  submit: () => void;
}> = memo(({ submit, value, setValue, disabled }) => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (!value) return;
        submit();
      }}
      className='flex w-full items-center space-x-2'
    >
      <Input
        className='rounded-full placeholder:text-slate-400 placeholder:font-light'
        type='text'
        placeholder='Введите сообщение'
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <Button
        className='rounded-full bg-fial-200 text-fial-900  min-w-[40px] hover:bg-fial-300 '
        type='submit'
        size='icon'
        disabled={disabled}
      >
        <PaperPlaneIcon className='h-4 w-4' />
      </Button>
    </form>
  );
});
