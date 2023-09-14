import { useState } from "preact/hooks";

export const Counter = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div class="flex self-center items-center mb-4">
      <button
        class="border px-4 py-2 text-xl text-bold"
        onClick={() => setCounter((prev) => prev - 1)}
      >
        -
      </button>
      <span class="text-yellow-300 text-xl mx-4">{counter}</span>
      <button
        class="border px-4 py-2 text-xl text-bold"
        onClick={() => setCounter((prev) => prev + 1)}
      >
        +
      </button>
    </div>
  );
};
