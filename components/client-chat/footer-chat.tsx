"use client";

import { ClientSubmitForm } from "./client-submit-form";

export const FooterChat: React.FC<{
  value: string;
  disabled: boolean;
  setValue: (e: any) => void;
  submit: () => void;
}> = ({ value, disabled, setValue, submit }) => {
  return (
    <div className='py-5 px-7'>
      <ClientSubmitForm
        value={value}
        setValue={setValue}
        disabled={disabled}
        submit={submit}
      />
    </div>
  );
};
