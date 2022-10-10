import { component$, useStore } from "@builder.io/qwik";
import { Counter } from "../counter/counter";

// Qwik components can be asynchronous
export const App = component$(() => {
  const store = useStore({ backgroundUrl: "" });
  // Returns JSX
  return (
    <body>
      <Counter />
    </body>
  );
});
