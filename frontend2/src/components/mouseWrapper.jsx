import React from "react";
import { useLocation } from "react-router-dom";
import GlobalMouseTracker from "./globalMouseData.jsx";

const MouseTrackerWrapper = () => {
  const location = useLocation();

  return location.pathname === "/signup" ? <GlobalMouseTracker /> : null;
};

export default MouseTrackerWrapper;
