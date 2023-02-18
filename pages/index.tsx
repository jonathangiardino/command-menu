import { useId } from "react";
import type { NextPage } from "next";
import { Inter } from "@next/font/google";
import Head from "next/head";
import clsx from "clsx";

import { CommandMenu } from "@/components/command-menu";
import { Rectangle } from "@/components/shared";

const inter = Inter({ subsets: ["latin"] });

const rectangles = [
  "w-[189px] h-[256px] bg-white top-[85px] right-[220px]",
  "w-[264px] h-[251px] bg-green-80 top-[105px] left-[140px]",
  "w-[199px] h-[296px] bg-gray-80  bottom-[105px] right-[240px]",
  "w-[199px] h-[260px] bg-purple-60  bottom-[55px] left-[280px]",
];

const Home: NextPage = () => {
  return (
    <div className={inter.className}>
      <Head>
        <title>Rise Command Menu </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main
        className={clsx(
          "w-full min-h-screen max-h-full flex flex-1 flex-col items-center justify-center p-20 text-center bg-brand-dark"
        )}
      >
        {rectangles.map((classes) => (
          <Rectangle key={useId()} classNames={classes} />
        ))}

        <CommandMenu />
      </main>
    </div>
  );
};

export default Home;
