import { component$ } from "@builder.io/qwik";

// Qwik components can be asynchronous
export const Head = component$(() => {
  // Returns JSX
  return (
    <head>
      <meta charSet="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Home</title>
    </head>
  );
});
