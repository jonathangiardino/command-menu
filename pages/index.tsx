import type { NextPage } from "next";
import Head from "next/head";
import { Inter } from "@next/font/google";
import clsx from "clsx";

const inter = Inter({ subsets: ["latin"] });

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
        <button
          className={clsx(
            "flex items-center gap-1 text-white bg-gray-100 rounded-lg px-3 py-2 drop-shadow-sm",
            "active:bg-gray-90"
          )}
        >
          Command Menu ⌘K
        </button>
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
      </main>
    </div>
  );
};

export default Home;
