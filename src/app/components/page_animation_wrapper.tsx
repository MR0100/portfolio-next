"use client";

import { AnimatePresence, motion } from "framer-motion";

export default function PageAnimationWrapper({ children }: any) {
  return (
    <AnimatePresence>
      <motion.main
        key={"home"}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {children}
      </motion.main>
    </AnimatePresence>
  );
}
