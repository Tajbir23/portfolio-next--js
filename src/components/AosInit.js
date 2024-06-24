"use client"
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const AosInit = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return null;
};

export default AosInit;
