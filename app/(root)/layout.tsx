"use client";

import { ForwardRefExoticComponent, RefAttributes } from "react";
import {
  PaperPlaneIcon,
  HomeIcon,
  CrumpledPaperIcon,
  BackpackIcon,
  MixerHorizontalIcon,
  HeartFilledIcon,
} from "@radix-ui/react-icons";
import { IconProps } from "@radix-ui/react-icons/dist/types";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { Header } from "@/components/header-admin/header";

const queryClient = new QueryClient();

export interface MenuLink {
  name: string;
  to: string;
  ComponentIcon: ForwardRefExoticComponent<
    IconProps & RefAttributes<SVGSVGElement>
  >;
}

const menuLinks: MenuLink[] = [
  {
    name: "Главная",
    to: "/",
    ComponentIcon: HomeIcon,
  },
  {
    name: "Чаты",
    to: "/admin-chats",
    ComponentIcon: BackpackIcon,
  },
  {
    name: "Удаленные переписки",
    to: "/deleted-chats",
    ComponentIcon: CrumpledPaperIcon,
  },
  {
    name: "Настройки",
    to: "/settings",
    ComponentIcon: MixerHorizontalIcon,
  },
  {
    name: "Отмеченные чаты",
    to: "/like-chats",
    ComponentIcon: HeartFilledIcon,
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
        <Header menuLinks={menuLinks} />
        <div className='flex-1 max-h-full h-[calc(100%-64px-24px)]'>
          <div className='p-8 pt-6 max-h-full h-full'>{children}</div>
        </div>
      </div>
    </QueryClientProvider>
  );
}
