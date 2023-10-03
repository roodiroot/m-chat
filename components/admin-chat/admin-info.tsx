"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export const AdminInfo = () => {
  console.log("admin info render");
  return (
    <div className='w-full p-4 bg-primary'>
      <Avatar className='mx-auto'>
        <AvatarImage src='' />
        <AvatarFallback className=''>АБ</AvatarFallback>
      </Avatar>
    </div>
  );
};
