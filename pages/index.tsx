import { useId } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import clsx from "clsx";
import { Inter } from "@next/font/google";

import { rectangles } from "@/lib";
import { CommandMenu } from "@/components/command-menu";
import { Rectangle } from "@/components/shared";

const inter = Inter({ subsets: ["latin"] });

const Home: NextPage = () => {
  return (
    <div className={inter.className}>
      <Head>
        <title>Rise Command Menu </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main
        className={clsx("w-full h-screen max-h-full flex-1 p-20 bg-brand-dark")}
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
