"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export const Header: React.FC<{ menuLinks: any[] }> = ({ menuLinks }) => {
  const pathname = usePathname();

  return (
    <div className='px-8 pt-6'>
      <div className='bg-fial-900 rounded-3xl flex h-16 items-center px-4'>
        <nav className='flex items-center space-x-4 lg:space-x-6 mx-6'>
          {menuLinks.map((l) => (
            <Link
              key={l.name}
              className={`w-9 h-9 rounded-lg text-white relative hover:bg-white/30 ${
                pathname === l.to ? "bg-white/30" : ""
              }`}
              href={l.to}
            >
              <l.ComponentIcon className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' />
            </Link>
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
