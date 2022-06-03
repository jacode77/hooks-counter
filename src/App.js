import React, { useState } from "react";
import { CapacitySetter } from "./components/CapacitySetter";
import { Counter } from "./components/Counter";

function App() {
  const [capacity, setCapacity] = useState(5);

  function handleCapacityChange(event) {
    const newCapacity = Number(event.target.value);
    setCapacity(newCapacity);
  }
  return (
    <>
      <Counter capacity={capacity} />
      <CapacitySetter
        onInputChange={handleCapacityChange}
        capacity={capacity}
      />
    </>
  );
}

export default App;
