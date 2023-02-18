import React, { useEffect, useId, useRef, useState } from "react";
import { Command } from "cmdk";
import clsx from "clsx";

import CommandItem from "@/components/command-menu/CommandItem";

const menuItems = [
  {
    text: "Email all participants",
    command: [{ key: "E" }, "then", { key: "E" }],
    icon: "send-email",
  },
  {
    text: "Copy event",
    command: [{ key: "⌘" }, { key: "C" }],
    icon: "copy-event",
  },
  {
    text: "Change color of event...",
    command: [{ key: "E" }, "then", { key: "C" }],
    icon: "change-color",
  },
  {
    text: "Delete event",
    command: [{ key: "⌫" }],
    icon: "delete",
  },
];

const navigationItems = [
  {
    text: "Go to day view",
    command: [{ key: "D" }],
    icon: "right",
  },
  {
    text: "Go to month view",
    command: [{ key: "M" }],
    icon: "right",
  },
  {
    text: "Go to year view",
    command: [{ key: "Y" }],
    icon: "right",
  },
];

const CommandMenu = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => inputRef?.current?.focus(), []);

  return (
    <Command
      label="Command Menu"
      className={clsx(
        "fixed z-50 left-1/2 top-[150px] -translate-x-1/2 w-full max-w-[95%] rounded-xl bg-gray-70/50 border-solid border-[0.5px] border-white/10 backdrop-blur-[50px] text-white font-normal caret-purple-60 drop-shadow-custom",
        "md:max-w-[641px]"
      )}
    >
      <div className="h-[39px] flex b pl-4 pt-4">
        <span className="bg-white/5 text-white/50 px-2 py-1 rounded-[4px] text-xs">
          Event - All hands on 15 Jan 2023
        </span>
      </div>
      <Command.Input
        ref={inputRef}
        enterKeyHint="go"
        placeholder="Type command..."
        autoFocus
        className={clsx(
          "w-full h-[62px] p-5 text-lg leading-[22px] rounded-t-xl bg-transparent text-white border-solid border-b-[1px] border-b-white/10",
          "focus:ring-0 active:ring-none focus:outline-none placeholder:text-white/50 "
        )}
      />
      <Command.List
        className={clsx(
          "p-[6px] overflow-auto overscroll-contain max-h-[299px] h-[var(--cmdk-list-height)])] scroll-p-[6px]",
          "transition-['height'] duration-300 ease-linear"
        )}
      >
        <Command.Empty>
          <div className="p-[14px] flex justify-center items-center gap-2">
            <h3 className="p-0 text-sm opacity-50 font-light">
              Oh snap! No commands found...
            </h3>
          </div>
        </Command.Empty>
        <Command.Group heading="">
          {menuItems.map((item) => (
            <CommandItem key={useId()} item={item} />
          ))}
        </Command.Group>
        <Command.Group heading="Navigation">
          {navigationItems.map((item) => {
            return <CommandItem key={useId()} item={item} />;
          })}
        </Command.Group>
      </Command.List>
    </Command>
  );
};

export default CommandMenu;
