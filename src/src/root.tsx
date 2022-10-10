import { Counter } from "./components/counter/counter";
import { Logo } from "./components/logo/logo";
import { Head } from "./components/head/head";

export default () => {
  return (
    <>
      <Head />
      <body>
        <Logo />
        <Counter />
      </body>
    </>
  );
};
