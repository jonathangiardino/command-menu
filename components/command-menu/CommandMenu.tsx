import { Fragment, KeyboardEvent, useContext, useEffect, useRef } from "react";
import { Command } from "cmdk";
import { useHotkeys } from "react-hotkeys-hook";
import clsx from "clsx";

import { CommandContext } from "@/context";
import { copyToClipboard, filterWords } from "@/utils";
import { Toast } from "@/components/shared";
import CommandItem from "@/components/command-menu/CommandItem";

const CommandMenu = () => {
  const {
    search,
    setSearch,
    pages,
    setPages,
    toast,
    setToast,
    toastVisible,
    setToastVisible,
    sequence,
    setSequence,
  } = useContext(CommandContext);

  const inputRef = useRef<HTMLInputElement>(null);
  const page = pages[pages.length - 1];

  const handleFilter = (value: string, search: string) => {
    const words = value.split(" ");
    return filterWords(words, search);
  };

  const handleSelect = (toastMessage: string) => {
    setToast(toastMessage);
    setToastVisible(true);
    setSearch("");
    setPages(pages.slice(0, pages.length - 1));
  };

  const resetMenu = (e: KeyboardEvent<HTMLDivElement>) => {
    e.preventDefault();
    setSearch("");
    setPages([]);
  };

  const menuItems = [
    {
      text: "Email all participants",
      command: [{ key: "E" }, "then", { key: "E" }],
      icon: "send-email",
      onSelect: () => handleSelect("Emailed all participants!"),
    },
    {
      text: "Copy event",
      command: [{ key: "⌘" }, { key: "C" }],
      icon: "copy-event",
      onSelect: () => {
        copyToClipboard("All hands on 15 Jan 2023");
        handleSelect("Event copied to clipboard");
      },
    },
    {
      text: "Change color of event",
      command: [{ key: "E" }, "then", { key: "C" }],
      icon: "change-color",
      onSelect: () => {
        setPages([...pages, "Change color of event"]);
      },
    },
    {
      text: "Delete event",
      command: [{ key: "⌘" }, { key: "⌫" }],
      icon: "delete",
      onSelect: () => handleSelect("Event deleted!"),
    },
  ];

  const navigationItems = [
    {
      text: "Go to day view",
      command: [{ key: "D" }],
      icon: "right",
      onSelect: () => handleSelect("Day view activated!"),
    },
    {
      text: "Go to month view",
      command: [{ key: "M" }],
      icon: "right",
      onSelect: () => handleSelect("Month view activated!"),
    },
    {
      text: "Go to year view",
      command: [{ key: "Y" }],
      icon: "right",
      onSelect: () => handleSelect("Year view activated!"),
    },
  ];

  const colorItems = [
    {
      text: "Red",
      parent: "Change color of event",
      command: [{ key: "⌘" }, { key: "1" }],
      icon: "red",
      onSelect: () => handleSelect("Red Selected!"),
    },
    {
      text: "Orange",
      parent: "Change color of event",
      command: [{ key: "⌘" }, { key: "2" }],
      icon: "orange",
      onSelect: () => handleSelect("Orange Selected!"),
    },
    {
      text: "Yellow",
      parent: "Change color of event",
      command: [{ key: "⌘" }, { key: "3" }],
      icon: "yellow",
      onSelect: () => handleSelect("Yellow Selected!"),
    },
    {
      text: "Green",
      parent: "Change color of event",
      command: [{ key: "⌘" }, { key: "4" }],
      icon: "green",
      onSelect: () => handleSelect("Green Selected!"),
    },
  ];

  // KEYBOARD SHORTCUTS
  // Single key shortcuts
  useHotkeys("d,m,y", (context) => {
    switch (true) {
      case context.key === "d":
        navigationItems[0].onSelect();
        break;
      case context.key === "m":
        navigationItems[1].onSelect();
        break;
      case context.key === "y":
        navigationItems[2].onSelect();
        break;

      default:
        break;
    }
  });

  // Combinations key shortcuts
  useHotkeys(
    "meta+c, meta+backspace,meta+1,meta+2,meta+3,meta+4",
    (context) => {
      const { key, metaKey } = context;

      switch (true) {
        case metaKey && key === "c":
          menuItems[1].onSelect();
          break;
        case metaKey && key === "Backspace":
          menuItems[3].onSelect();
          break;
        case metaKey && key === "1":
          colorItems[0].onSelect();
          break;
        case metaKey && key === "2":
          colorItems[1].onSelect();
          break;
        case metaKey && key === "3":
          colorItems[2].onSelect();
          break;
        case metaKey && key === "4":
          colorItems[3].onSelect();
          break;
        default:
          break;
      }
    },
    {
      preventDefault: true,
      enableOnFormTags: true,
    }
  );

  // Sequential key shortcuts
  useHotkeys("e, c", (context) => {
    const { key } = context;
    switch (true) {
      case key === "e":
        if (sequence === "e") {
          menuItems[0].onSelect();
          setSequence("");
        } else {
          setSequence("e");
          setTimeout(() => {
            setSequence("");
          }, 3000);
        }
        break;

      case key === "c":
        if (sequence === "e" && page !== "Change color of event") {
          menuItems[2].onSelect();
          setTimeout(() => {
            inputRef?.current?.focus();
            setSequence("");
          }, 300);
        }
        break;

      default:
        break;
    }
  });

  useEffect(() => inputRef?.current?.focus(), []);

  return (
    <>
      <Command
        loop
        filter={handleFilter}
        label="Command Menu"
        className={clsx(
          "fixed z-50 left-1/2 top-[150px] -translate-x-1/2 w-full max-w-[95%] rounded-xl bg-gray-70/50 border-solid border-[0.5px] border-white/10 backdrop-blur-[50px] text-white font-normal caret-purple-60 drop-shadow-custom",
          "md:max-w-[641px]"
        )}
        onKeyDown={(e) => {
          const escOrDelete =
            e.key === "Escape" || (e.key === "Backspace" && !search);
          if (escOrDelete && !e.metaKey) {
            resetMenu(e);
          }
        }}
      >
        {/* Breadcrumbs */}
        <div className="h-[39px] flex gap-2 pl-4 pt-4 relative">
          <span className="bg-white/5 text-white/50 px-2 py-1 rounded-[4px] text-xs">
            Event - All hands on 15 Jan 2023
          </span>
          {pages?.map((currentPage) => (
            <Fragment key={currentPage}>
              <span className="text-white/5">/</span>
              <span className="bg-white/5 text-white/50 px-2 py-1 rounded-[4px] text-xs">
                {currentPage}
              </span>
            </Fragment>
          ))}

          {/* Back button */}
          {pages?.length ? (
            <div className="absolute right-3 bottom-1 text-white/50 text-[10px] flex gap-1 items-center">
              Cancel
              <span
                className={clsx(
                  "text-[8px] flex items-center justify-center px-1 py-[2px] bg-white/5 text-white/75 rounded-[4px]"
                )}
              >
                Esc
              </span>
            </div>
          ) : null}
        </div>

        <Command.Input
          ref={inputRef}
          value={search}
          onValueChange={setSearch}
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

          {!page ? (
            <Command.Group heading="">
              {menuItems.map((item) => (
                <CommandItem key={item.text} {...item} />
              ))}
            </Command.Group>
          ) : null}

          {!page ? (
            <Command.Group heading="Navigation">
              {navigationItems.map((item) => (
                <CommandItem key={item.text} {...item} />
              ))}
            </Command.Group>
          ) : null}

          {!!search || page === "Change color of event"
            ? colorItems.map((item) => (
                <CommandItem key={item.text} {...item} />
              ))
            : null}
        </Command.List>
      </Command>
      <Toast
        title={toast}
        open={toastVisible}
        setOpen={setToastVisible}
        position="top"
      />
    </>
  );
};

export default CommandMenu;
