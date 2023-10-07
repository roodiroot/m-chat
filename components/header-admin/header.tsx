"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MenuLink } from "@/app/(root)/layout";
import { MenuLinkMain } from "./menu-link-main";

export const Header: React.FC<{ menuLinks: MenuLink[] }> = ({ menuLinks }) => {
  return (
    <div className='px-8 pt-6'>
      <div className='bg-fial-900 rounded-3xl flex h-16 items-center px-4'>
        <nav className='flex items-center space-x-4 lg:space-x-6 mx-6'>
          {menuLinks.map((l) => (
            <MenuLinkMain key={l.name} menuLink={l} />
          ))}
        </nav>
        <div className='ml-auto flex items-center space-x-4'>
          <Avatar className='w-9 h-9'>
            <AvatarImage src='https://i.pinimg.com/236x/d4/72/f1/d472f1a8b14bc2fde075cceb5ab6e14f--bart-simpson-the-simpsons.jpg?nii=t' />
            <AvatarFallback>N</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </div>
  );
};
