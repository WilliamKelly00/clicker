import { useState } from "react";

export default function Aimarea() {

    const[x, setX] = useState(0);
    const[y, setY] = useState(0);

    const changePosition = () => {
        setX(Math.floor(Math.random() * (window.innerWidth - 50)));
        setY(Math.floor(Math.random() * (window.innerHeight - 50) ));
    }

  return (
        <button className="p-5 bg-red-600 rounded-full" style={{position: "absolute", left: x, top: y }} 
        onClick={() => changePosition()}
        >
        </button>
  )
}

