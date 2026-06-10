"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Mail, Github } from "lucide-react";
import { motion, animate, useMotionValue, useTransform } from "motion/react";

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
    <main className="flex min-h-screen flex-col-reverse items-center justify-center bg-[#fafafa] p-4 text-black md:flex-row">
      {/* 文本 */}
      <div className="mt-8 flex flex-col items-center text-center md:mt-0 md:mr-8 md:w-1/2 md:items-start md:text-left">
        <h1 className="mb-1 text-4xl font-bold">air wish</h1>
        <h2 className="mb-4 text-xl font-semibold italic">@ittuann</h2>

        <div className="text-center text-xl leading-relaxed text-gray-600 md:text-left md:text-2xl">
          {/* 打字动画 */}
          <motion.span>{displayText}</motion.span>
          {/* 星星动画 打字动效结束后出现 */}
          {isTypingComplete && (
            <motion.span
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, type: "spring" }}
              className="ml-1 inline-block align-baseline"
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
          <motion.span
            animate={{ opacity: [1, 0, 1] }}
            transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
            className="ml-1 inline-block h-6 w-1 bg-gray-400 align-middle"
          />
        </div>

        {/* 联系方式 */}
        <div className="mt-8 flex justify-center gap-4 md:justify-start">
          {[
            {
              icon: Github,
              href: "https://github.com/ittuann",
              describe: "GitHub @ittuann",
            },
            {
              icon: Mail,
              href: "mailto:ittuann@outlook.com",
              describe: "Email: ittuann@outlook.com",
            },
          ].map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.a
                key={index}
                href={item.href}
                target="_blank"
                rel=""
                title={item.describe}
                aria-label={item.describe}
                initial={{ opacity: 0, y: 15, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  delay: index * 0.15,
                  duration: 0.5,
                  type: "spring",
                  stiffness: 200,
                }}
                whileHover={{ scale: 1.05, y: -2 }}
                className="flex cursor-pointer items-center gap-2 rounded-full bg-white px-3 py-3 text-gray-500 shadow-sm transition-all hover:text-black hover:shadow-md"
              >
                <Icon size={20} />
              </motion.a>
            );
          })}
        </div>
      </div>

      {/* 头像 */}
      <div className="relative w-2/3 max-w-xs md:w-1/3">
        {/* 漂浮装饰物 */}
        <motion.div
          animate={{ y: [0, 15, 0], rotate: [-5, 5, -5] }}
          transition={{
            repeat: Infinity,
            duration: 3.5,
            ease: "easeInOut",
            delay: 0.5,
          }}
          className="absolute top-1 left-2 z-20 text-6xl text-purple-400 opacity-70"
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
          className="absolute top-20 -right-5 z-0 text-5xl font-bold text-blue-400 opacity-80"
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
          className="absolute right-4 bottom-10 z-20 text-3xl font-bold text-gray-400 opacity-60"
        >
          #
        </motion.div>
        <motion.div
          animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="absolute bottom-5 left-6 z-0 h-3 w-3 rounded-full bg-blue-300"
        />

        <motion.div
          className="z-10 h-full w-full overflow-hidden rounded-full shadow-xl"
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
