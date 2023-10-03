"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";

const queryClient = new QueryClient();

const menuLinks = [
  {
    name: "Главная",
    to: "/",
  },
  {
    name: "Чаты",
    to: "/admin-chats",
  },
  {
    name: "Удаленные переписки",
    to: "/",
  },
  {
    name: "Настройки",
    to: "/",
  },
  {
    name: "Старые чаты",
    to: "/",
  },
];

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <QueryClientProvider client={queryClient}>
      <div className='w-full h-full flex-col flex overflow-hidden'>
        <div className='border-b'>
          <div className='flex h-16 items-center px-4'>
            <nav className='flex items-center space-x-4 lg:space-x-6 mx-6'>
              {menuLinks.map((l) => (
                <Link
                  key={l.name}
                  className='text-sm font-medium transition-colors hover:text-primary'
                  href={l.to}
                >
                  {l.name}
                </Link>
              ))}
            </nav>
            <div className='ml-auto flex items-center space-x-4'>
              <Avatar>
                <AvatarImage src='https://i.pinimg.com/236x/d4/72/f1/d472f1a8b14bc2fde075cceb5ab6e14f--bart-simpson-the-simpsons.jpg?nii=t' />
                <AvatarFallback>N</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
        <div className='flex-1 max-h-full h-[calc(100%-64px)]'>
          <div className='p-8 pt-6 max-h-full h-full'>{children}</div>
        </div>
      </div>
    </QueryClientProvider>
  );
}
