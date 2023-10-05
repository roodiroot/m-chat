import { ChatBubbleIcon } from "@radix-ui/react-icons";
export const ClientCallChatUI = () => {
  return (
    <span className='relative flex h-10 w-10'>
      <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75'></span>
      <span className='relative inline-flex rounded-full h-10 w-10 bg-sky-500 text-white'>
        <ChatBubbleIcon className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-4 w-4' />
      </span>
    </span>
  );
};
