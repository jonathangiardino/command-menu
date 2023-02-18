import { useId } from "react";
import { CommandItemProps } from "@/utils/types";
import { Command } from "cmdk";
import clsx from "clsx";

import { Icon } from "@/components/shared";

const CommandItem = ({ item }: CommandItemProps) => {
  return (
    <Command.Item
      key={useId()}
      className={clsx(
        "px-[14px] py-3 rounded-md group  flex items-center justify-between",
        "aria-[selected]:bg-white/5"
      )}
    >
      <div className="flex items-center gap-[17px]">
        <Icon
          name={item.icon}
          className={clsx(
            "fill-white/60 text-white/60",
            "group-aria-[selected]:fill-white group-aria-[selected]:text-white"
          )}
        />
        {item.text}
      </div>
      {item.command.length ? (
        <div className="flex gap-1 items-center">
          {item.command.map((item) => {
            return (
              <span
                key={useId()}
                className={clsx(
                  "text-[11px] flex items-center justify-center",
                  typeof item === "string"
                    ? "text-white/50"
                    : "w-5 h-5 bg-white/5 text-white/75 rounded-[4px] "
                )}
              >
                {typeof item === "string" ? item : item.key}
              </span>
            );
          })}
        </div>
      ) : null}
    </Command.Item>
  );
};

export default CommandItem;
