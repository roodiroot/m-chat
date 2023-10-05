import React, { useEffect } from "react";

export const useScroll = (
  ref: React.RefObject<HTMLDivElement>,
  triger: any
) => {
  useEffect(() => {
    if (ref) {
      if (ref.current) {
        ref.current.scrollTop = ref.current.scrollHeight;
      }
    }
  }, [triger]);
};
