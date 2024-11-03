import { splitProps } from "solid-js";
import type { JSX } from "solid-js";
import { twMerge } from "tailwind-merge";

interface Props extends JSX.ButtonHTMLAttributes<HTMLButtonElement> {}
export default function Button(props: Props) {
  const [own, rest] = splitProps(props, ["class"]);

  const finalClass = () => {
    return twMerge(
      `border border-blue-500 py-1 px-4 shadow-sm text-blue-500 m-2 rounded-md`,
      own.class,
    );
  };

  return <button {...rest} class={finalClass()}></button>;
}
