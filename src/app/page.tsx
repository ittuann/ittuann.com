"use client"

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion, animate, useMotionValue, useTransform } from "motion/react";
import { Mail, Github } from "lucide-react";

export default function Home() {
  const roleText = "Coding with love & magic~";

  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const displayText = useTransform(rounded, (latest) =>
    roleText.slice(0, latest),
  );
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  useEffect(() => {
    // 打字动画
    const controls = animate(count, roleText.length, {
      duration: roleText.length * 0.1,
      ease: "linear",
      onComplete: () => setIsTypingComplete(true),
    });

    return () => controls.stop();
  }, [count]);

  return (
    <main className="flex flex-col-reverse md:flex-row items-center justify-center min-h-screen bg-[#fafafa] text-black p-4">

      {/* 文本 */}
      <div className="md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left mt-8 md:mt-0 md:mr-8">
        <h1 className="text-4xl font-bold mb-1">air wish</h1>
        <h2 className="text-xl italic mb-4">@ittuann</h2>

        <div className="text-xl md:text-2xl text-gray-600 flex justify-center md:justify-start items-center">
          {/* 打字动画 */}
          <motion.span>{displayText}</motion.span>
          {/* 星星动画 打字动效结束后出现 */}
          {isTypingComplete && (
            <motion.span
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, type: "spring" }}
              className="ml-1 inline-block"
            >
              <motion.span
                animate={{ scale: [1, 1.2, 1], rotate: [0, 15, -15, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 2,
                  ease: "easeInOut",
                }}
                className="inline-block origin-center"
              >
                🌟
              </motion.span>
            </motion.span>
          )}
          {/* 闪烁光标 */}
          <motion.div
            animate={{ opacity: [1, 0, 1] }}
            transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
            className="w-1 h-7 bg-gray-400 ml-1"
          />
        </div>

        {/* 联系方式 */}
        <div className="flex justify-center md:justify-start gap-4 mt-8">
          {[
            {
              icon: Github,
              href: "https://github.com/ittuann",
              label: "GitHub",
            },
            { icon: Mail, href: "mailto:ittuann@outlook.com", label: "Email" },
          ].map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.a
                key={index}
                href={item.href}
                target="_blank"
                rel=""
                aria-label={item.label}
                title={item.label}
                initial={{ opacity: 0, y: 15, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  delay: index * 0.15,
                  duration: 0.5,
                  type: "spring",
                  stiffness: 200,
                }}
                whileHover={{ scale: 1.1, y: -2 }}
                className="p-2.5 bg-white rounded-full shadow-sm hover:shadow-md text-gray-500 hover:text-black transition-all cursor-pointer"
              >
                <Icon size={20} />
              </motion.a>
            );
          })}
        </div>
      </div>

      {/* 头像 */}
      <div className="relative w-2/3 md:w-1/3 max-w-xs">
        {/* 漂浮装饰物 */}
        <motion.div
          animate={{ y: [0, 15, 0], rotate: [-5, 5, -5] }}
          transition={{
            repeat: Infinity,
            duration: 3.5,
            ease: "easeInOut",
            delay: 0.5,
          }}
          className="absolute top-1 left-2 text-6xl text-purple-400 z-20 opacity-70"
        >
          ✦
        </motion.div>
        <motion.div
          animate={{ y: [0, -20, 0], rotate: [0, 45, 0] }}
          transition={{
            repeat: Infinity,
            duration: 5,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute top-20 -right-5 text-5xl font-bold text-blue-400 z-0 opacity-80"
        >
          +
        </motion.div>
        <motion.div
          animate={{ y: [0, 10, 0], x: [0, -5, 0] }}
          transition={{
            repeat: Infinity,
            duration: 4.5,
            ease: "easeInOut",
            delay: 1.5,
          }}
          className="absolute bottom-10 right-4 text-3xl font-bold text-gray-400 z-20 opacity-60"
        >
          #
        </motion.div>
        <motion.div
          animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="absolute bottom-5 left-6 w-3 h-3 rounded-full bg-blue-300 z-0"
        />

        <motion.div
          className="w-full h-full rounded-full overflow-hidden shadow-xl z-10"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Image
            src="/avatar.webp"
            alt="air wish avatar"
            width={320}
            height={320}
            className="rounded-full"
          />
        </motion.div>
      </div>
    </main>
  );
}
