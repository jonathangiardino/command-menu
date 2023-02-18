import clsx from "clsx";

const Rectangle = ({ classNames }: { classNames: string }) => (
  <div className={clsx("absolute w-[199px] rounded-3xl", classNames)} />
);

export default Rectangle;
