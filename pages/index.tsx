import { useEffect, useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import { Inter } from "@next/font/google";
import clsx from "clsx";

import { CommandMenu } from "@/components/command-menu";

const inter = Inter({ subsets: ["latin"] });

const Home: NextPage = () => {
  const [openCommands, setOpenCommands] = useState<boolean>(false);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && e.metaKey && setOpenCommands) {
        setOpenCommands((prev) => !prev);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

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
        {!openCommands ? (
          <button
            className={clsx(
              "flex items-center gap-1 text-white bg-gray-100 rounded-lg px-3 py-2 drop-shadow-sm z-10",
              "active:bg-gray-90 hover:bg-gray-70 transition-colors"
            )}
            onClick={() => setOpenCommands((prev) => !prev)}
          >
            Open command Menu ⌘K
          </button>
        ) : null}
        <div
          className={clsx(
            "w-[264px] h-[251px] bg-green-80 absolute top-[105px] left-[100px] rounded-3xl"
          )}
        />

        <div
          className={clsx(
            "w-[199px] h-[296px] bg-gray-80 absolute bottom-[105px] right-[240px] rounded-3xl"
          )}
        />

        <div
          className={clsx(
            "w-[199px] h-[260px] bg-purple-60 absolute bottom-[55px] left-[280px] rounded-3xl"
          )}
        />

        <div
          className={clsx(
            "w-[189px] h-[240px] bg-white absolute top-[55px] right-[250px] rounded-3xl"
          )}
        />

        <CommandMenu open={openCommands} setOpen={setOpenCommands} />
      </main>
    </div>
  );
};

export default Home;
