import { ClientChatBL } from "@/components/client-chat/client-chat-bl";

const ClientChat = () => {
  return (
    <div className='fixed inset-0'>
      <ClientChatBL className='sm:right-4 sm:bottom-4' />
    </div>
  );
};

export default ClientChat;
