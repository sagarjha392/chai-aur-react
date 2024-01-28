import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");
  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0">
        <div className="flex flex-wrap justify-center shadow-xl gap-3 bg-white px-3 py-2 rounded-3xl">
          <button
            onClick={() => setColor("red")}
            className="outline-none px-4 text-white rounded-full shadow-lg py-1"
            style={{ backgroundColor: "Red" }}
          >
            Red
          </button>
          <button
            onClick={() => setColor("green")}
            className="outline-none px-4 text-white rounded-full shadow-lg py-1"
            style={{ backgroundColor: "green" }}
          >
            Green
          </button>
          <button
            onClick={() => setColor("blue")}
            className="outline-none px-4 text-white rounded-full shadow-lg py-1"
            style={{ backgroundColor: "blue" }}
          >
            Blue
          </button>
          <button
            onClick={() => setColor("purple")}
            className="outline-none px-4 text-white rounded-full shadow-lg py-1"
            style={{ backgroundColor: "purple" }}
          >
            Purple
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
