import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import SubmitForm from "./components/SubmitForm";
import BannerSection from "./components/BannerSlider";
import { useMediaQuery } from "@mui/material";

function App() {
  const isMobileDevice = useMediaQuery('(min-width:787px)');

  return (
    <div style={{ background: "#f3f3f3", height: isMobileDevice ? "100vh" : "100%" }}>
      <SubmitForm />
      {/* <BannerSection /> */}
    </div>
  );
}

export default App;
