import { JSX, splitProps } from "solid-js";
import { twMerge } from "tailwind-merge";

interface Props extends JSX.HTMLAttributes<HTMLHeadingElement> {}
export default function Head(props: Props) {
  const [own, rest] = splitProps(props, ["class"]);
  const finalClass = () => {
    return twMerge(`text-xl p-2`, own.class);
  };
  return <h1 class={finalClass()} {...rest}></h1>;
}
