import {
  Accessor,
  createSignal,
  JSX,
  Setter,
  Signal,
  splitProps,
} from "solid-js";
import { twMerge } from "tailwind-merge";

interface Props {
  value: string;
  setValue: Setter<string>;
  class?: string;
  rows?: number;
}

export default function Textarea(props: Props) {
  const [own, rest] = splitProps(props, ["class", "value", "setValue"]);
  const finalClass = () => {
    return twMerge(`border shadow-md w-full`, own.class);
  };

  const handleInput: JSX.InputEventHandlerUnion<
    HTMLTextAreaElement,
    InputEvent
  > = (e) => {
    own.setValue(e.target.value);
  };

  return (
    <textarea class={finalClass()} {...rest} oninput={handleInput}>
      {own.value}
    </textarea>
  );
}
