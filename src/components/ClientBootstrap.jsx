"use client";
import { useEffect } from "react";
function ClientBootstrap() {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  return null;
}

export default ClientBootstrap;
