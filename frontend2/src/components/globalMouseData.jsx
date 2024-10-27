import React, { useEffect } from "react";
import io from "socket.io-client";

const socket = io("https://sih-again-1.onrender.com", {
  transports: ["websocket", "polling"],
  withCredentials: true,
});

const GlobalMouseTracker = () => {
  useEffect(() => {
    const handleMouseMove = (event) => {
      const { clientX, clientY } = event;
      const mouseData = { x: clientX, y: clientY, timestamp: Date.now() };
      console.log("Mouse Data: ", mouseData);

      socket.emit("mouse_data", mouseData);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return null;
};

export default GlobalMouseTracker;
