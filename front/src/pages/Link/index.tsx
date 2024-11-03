import data from "./data.json";

export default function Link() {
  return (
    <section class="flex flex-wrap gap-3 p-3 items-center">
      {data.map((item) => {
        return (
          <a
            href={item.link}
            class="py-1 px-3 flex items-center border shadow-sm rounded-md"
            target="_blank"
          >
            <img src={item.icon} class="w-6 h-6 m-2" />
            {item.title}
          </a>
        );
      })}
    </section>
  );
}
