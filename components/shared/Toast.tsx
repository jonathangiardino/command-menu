import { useEffect, useState } from "react";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";
import * as RadixToast from "@radix-ui/react-toast";

import { SwipeDirection, ToastProps } from "@/utils/types";

const Toast = ({
  position = "top-left",
  duration = 1000,
  title = "Toast title",
  open = false,
  setOpen,
}: ToastProps) => {
  const [swipeDirection, setSwipeDirection] = useState<SwipeDirection>("left");

  useEffect(() => {
    switch (position) {
      case "top-left" || "bottom-left":
        setSwipeDirection("left");
        break;
      case "top-right" || "bottom-right":
        setSwipeDirection("right");
        break;
      case "top":
        setSwipeDirection("up");
        break;
      case "bottom":
        setSwipeDirection("down");
        break;
      default:
        setSwipeDirection("left");
        break;
    }
  }, [position]);

  return (
    <RadixToast.Provider swipeDirection={swipeDirection}>
      <RadixToast.Root
        duration={duration}
        id="toast"
        className={twMerge(
          clsx(
            "bg-gray-70/50 border-solid border-[0.5px] border-white/10 backdrop-blur-[50px] text-white font-normal rounded-lg shadow-lg p-2 transition-transform duration-75 ease-out flex flex-col",
            {
              "data-[state='open']:animate-slide-in data-[state='closed']:animate-fade-out data-[swipe='move']:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe='cancel']:translate-x-0":
                swipeDirection === "left",
            },
            {
              "data-[state='open']:animate-slide-in-inverse data-[state='closed']:animate-fade-out-inverse data-[swipe='move']:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe='cancel']:translate-x-0":
                swipeDirection === "right",
            },
            {
              "data-[state='open']:animate-slide-down data-[state='closed']:animate-fade-out data-[swipe='move']:translate-y-[var(--radix-toast-swipe-move-y)] data-[swipe='cancel']:translate-y-0":
                swipeDirection === "up",
            },
            {
              "data-[state='open']:animate-slide-up data-[state='closed']:animate-fade-out data-[swipe='move']:translate-y-[var(--radix-toast-swipe-move-y)] data-[swipe='cancel']:translate-y-0":
                swipeDirection === "down",
            }
          )
        )}
        open={open}
        onOpenChange={setOpen}
      >
        <RadixToast.Title className="text-xs font-medium">
          {title}
        </RadixToast.Title>
      </RadixToast.Root>
      <RadixToast.Viewport
        className={twMerge(
          clsx(
            "fixed flex flex-col z-50",
            { "top-3 left-3": position === "top-left" },
            { "top-3 right-3": position === "top-right" },
            { "bottom-3 left-3": position === "bottom-left" },
            { "bottom-3 right-3": position === "bottom-right" },
            { "top-3 left-1/2 -translate-x-1/2": position === "top" },
            { "bottom-3 left-1/2 -translate-x-1/2": position === "bottom" }
          )
        )}
      />
    </RadixToast.Provider>
  );
};

export default Toast;
