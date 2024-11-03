import { HashRouter as Router, RouteSectionProps } from "@solidjs/router";
import routes from "./routes";

const Header = () => {
  return (
    <div class=" flex justify-center gap-x-5 h-10 items-center bg-cyan-50 shadow-md">
      {routes.map((route) => {
        return <a href={route.path}>{route.name}</a>;
      })}
    </div>
  );
};

const Layout = (props: RouteSectionProps<unknown>) => {
  return (
    <main class="w-screen h-screen overflow-hidden flex flex-col">
      <Header />
      <div class="flex-1 overflow-auto">{props.children}</div>
    </main>
  );
};

const App = () => {
  return <Router root={Layout}>{routes}</Router>;
};

export default App;
