import { createSignal, JSX, Signal, splitProps } from "solid-js";
import { twMerge } from "tailwind-merge";

interface Props {
  value?: Signal<string>;
  class?: string;
}

export default function Input(props: Props) {
  const [own, rest] = splitProps(props, ["class", "value"]);
  const finalClass = () => {
    return twMerge(`border shadow-md w-full p-2`, own.class);
  };

  const [value, setValue] = own.value ? own.value : createSignal("");

  const handleInput: JSX.InputEventHandlerUnion<
    HTMLInputElement,
    InputEvent
  > = (e) => {
    setValue(e.target.value);
  };

  return (
    <input
      class={finalClass()}
      {...rest}
      oninput={handleInput}
      value={value()}
    />
  );
}
