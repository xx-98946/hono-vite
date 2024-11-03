import {
  createSignal,
  For,
  JSX,
  mergeProps,
  Signal,
  splitProps,
} from "solid-js";

interface Props<T = string> {
  options: Array<{
    value: T;
    label: string;
  }>;
  class?: string;
  value?: Signal<T>;
}

export default function Select(props: Props) {
  // console.log("??select", props.value![0]());
  const [own, rest] = splitProps(props, ["options", "value"]);
  const [value, setValue] = own.value ? own.value : createSignal("");

  // console.log("??value", value());

  const changeValue: JSX.ChangeEventHandlerUnion<HTMLSelectElement, Event> = (
    e,
  ) => {
    setValue(e.target.value);
  };
  return (
    <select
      class="p-2 bg-red-400 outline-none rounded-md pr-4"
      {...rest}
      value={value()}
      onchange={changeValue}
    >
      <For each={own.options} fallback={<div>无数据</div>}>
        {(item, index) => (
          <option value={item.value} selected={item.value == value()}>
            {item.label}
          </option>
        )}
      </For>
    </select>
  );
}
