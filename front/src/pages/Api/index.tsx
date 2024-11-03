import { createSignal, splitProps } from "solid-js";
import Button from "@/comps/Button";
import Head from "@/comps/Head";
import Select from "@/comps/Select";
import Textarea from "@/comps/Textrea";
import Input from "@/comps/Input";

export default function Api() {
  const methodValue = createSignal("GET");

  const [getMethodValue, setMethodValue] = methodValue;
  const methodOptions = [
    {
      value: "POST",
      label: "POST",
    },
    {
      value: "DELETE",
      label: "DELETE",
    },
    {
      value: "PUT",
      label: "PUT",
    },
    {
      value: "PATCH",
      label: "PATCH",
    },
    {
      value: "GET",
      label: "GET",
    },
  ];

  const reqType = createSignal("JSON");
  const reqTypeOptions = [
    {
      value: "JSON",
      label: "JSON",
    },
    {
      value: "TEXT",
      label: "TEXT",
    },
  ];

  const reqBody = createSignal("");
  const [getReqBody, setReqBody] = reqBody;

  const resBody = createSignal("");
  const [getResBody, setResBody] = createSignal("");

  const reqPath = createSignal("/api");
  const [getReqPath, setReqPath] = reqPath;

  const handleSendReq = async () => {
    console.log("发送请求");
    const method = getMethodValue();
    const init: RequestInit = {
      method,
    };
    if (method != "GET") {
      init["body"] = getReqBody();
    }
    const res = await fetch(getReqPath(), init);
    const text = await res.text();
    setResBody(text);
  };

  return (
    <main class="w-3/4 mx-auto p-2">
      <div class="flex p-2 items-center">
        <Head>请求方法：</Head>
        <Select options={methodOptions} value={methodValue}></Select>
      </div>
      <div>
        <Head>请求地址：</Head>
        <Input value={reqPath} />
      </div>

      <div class="p-2">
        <div class="flex items-center">
          <Head>请求体：</Head>
          <Select options={reqTypeOptions} value={reqType}></Select>
        </div>
        <Textarea rows={5} value={getReqBody()} setValue={setReqBody} />
      </div>

      <div>
        <Button onclick={handleSendReq}>发送请求</Button>
      </div>

      <Head>响应结果：</Head>
      <div class="p-2">
        <Textarea rows={5} value={getResBody()} setValue={setResBody} />
      </div>
    </main>
  );
}
