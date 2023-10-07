"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { MenuLink } from "@/app/(root)/layout";
import { usePathname } from "next/navigation";
import { transitionObjectVariants } from "@/lib/travsition-object-variants";

export const MenuLinkMain: React.FC<{
  menuLink: MenuLink;
}> = ({ menuLink }) => {
  const pathname = usePathname();
  return (
    <Link
      className={`transition w-9 h-9 rounded-xl  relative hover:text-white ${
        pathname === menuLink.to ? "text-white" : "text-white/80"
      }`}
      href={menuLink.to}
    >
      <menuLink.ComponentIcon className='absolute z-40 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' />
      {pathname === menuLink.to && (
        <motion.div
          layoutId='active-pill'
          transition={transitionObjectVariants}
          className='absolute z-10 inset-0 bg-white/30 rounded-xl'
        ></motion.div>
      )}
    </Link>
  );
};
