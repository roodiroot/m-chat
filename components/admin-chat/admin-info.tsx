"use client";
import { memo } from "react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export const AdminInfo = memo(() => {
  console.log("admin info render");
  return (
    <div className='rounded-3xl w-full h-full overflow-hidden relative p-4 bg-fial-200 -mb-10'>
      <Avatar className='mx-auto text-slate-900'>
        <AvatarImage src='' />
        <AvatarFallback className='bg-fial-300 '>АБ</AvatarFallback>
      </Avatar>
    </div>
  );
});
