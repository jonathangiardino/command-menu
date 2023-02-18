import clsx from "clsx";

interface HotkeyProps {
  item: {
    text: string;
    command: string[];
    commandType: "subsequential" | "parallel";
    icon: string;
  };
}

const Hotkey = ({ item }: HotkeyProps) => {
  return (
    <div className="flex gap-1 items-center">
      {item.command.map((cmd: string, index: number) => {
        console.log(index);

        switch (item.commandType) {
          case "subsequential":
            return (
              <div
                key={cmd}
                className={clsx(
                  "w-5 h-5 bg-white/5 rounded-[4px] text-[11px] flex items-center justify-center",
                  { "before:content-['_then_']": index === 1 }
                )}
              >
                {cmd}
              </div>
            );
          case "parallel":
            return (
              <span
                key={cmd}
                className="w-5 h-5 bg-white/5 rounded-[4px] text-[11px] flex items-center justify-center"
              >
                {cmd}
              </span>
            );
          default:
            return null;
        }
      })}
    </div>
  );
};

export default Hotkey;
