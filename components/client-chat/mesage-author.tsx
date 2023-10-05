import { useTimeConverter } from "@/hooks/use-time-converter";
import { motion } from "framer-motion";

export const MessageAuthor = ({ text, time }: { text: string; time: Date }) => {
  const data = useTimeConverter(time);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        opacity: { duration: 0.2 },
        layaut: {
          type: "spring",
          bounce: 0.4,
          duration: 0.05 * 5,
        },
      }}
      className='flex  w-full pr-2'
    >
      <div className='ml-auto max-w-[75%] font-normal text-fial-t100 flex flex-col'>
        <div className='shadow-sm bg-fial-200 px-5 py-2 rounded-xl rounded-br-[1px] text-[13px] leading-5'>
          {text}
        </div>
        <div className='text-[10px] font-light text-fial-t50 w-full text-right'>
          {data.time}
        </div>
      </div>
    </motion.div>
  );
};
