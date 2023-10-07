import { motion } from "framer-motion";

import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { useTimeConverter } from "@/hooks/use-time-converter";
import { transitionObjectVariants } from "@/lib/travsition-object-variants";

export const MessageClient = ({ text, time }: { text: string; time: Date }) => {
  const data = useTimeConverter(time);
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={transitionObjectVariants}
      className='flex gap-2 items-end max-w-full'
    >
      <Avatar className='shadow-sm w-8 h-8 bg-slate-500/10 mb-3'>
        <AvatarImage src='' />
        <AvatarFallback className='bg-slate-200'></AvatarFallback>
      </Avatar>
      <div className='max-w-[75%] font-normal text-white/90'>
        <div className='shadow-sm bg-fial-900 px-5 py-2 rounded-xl rounded-bl-[1px] text-[13px] leading-5'>
          {text}
        </div>
        <div className='leading-4 text-[10px] text-fial-t50 font-light'>
          {data.time}
        </div>
      </div>
    </motion.div>
  );
};
