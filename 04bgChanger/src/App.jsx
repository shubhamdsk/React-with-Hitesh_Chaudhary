import { useState } from "react";

import "./App.css";

function App() {
  const [color, setColor] = useState("white");

  return (
    <div
      className="w-full h-screen duration-200 "
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button
            onClick={() => setColor("red")}
            className="outline-none px-3 py-1 rounded-full text-white shadow-lg "
            style={{ backgroundColor: "red" }}
          >
            Red
          </button>
          <button
            className="outline-none px-3 py-1 rounded-full text-black shadow-lg "
            style={{ backgroundColor: "white" }}
          >
            White
          </button>
          <button
            className="outline-none px-3 py-1 rounded-full text-black shadow-lg "
            style={{ backgroundColor: "olive" }}
          >
            Olive
          </button>
          <button
            className="outline-none px-3 py-1 rounded-full text-white shadow-lg "
            style={{ backgroundColor: "green" }}
          >
            Green
          </button>
          <button
            className="outline-none px-3 py-1 rounded-full text-white shadow-lg "
            style={{ backgroundColor: "blue" }}
          >
            Blue
          </button>
          <button
            className="outline-none px-3 py-1 rounded-full text-black shadow-lg "
            style={{ backgroundColor: "yellow" }}
          >
            Yellow
          </button>
          <button
            className="outline-none px-3 py-1 rounded-full text-black shadow-lg "
            style={{ backgroundColor: "pink" }}
          >
            Pink
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
