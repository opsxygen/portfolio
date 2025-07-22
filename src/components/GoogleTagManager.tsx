"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    dataLayer: any[];
  }
}

function GoogleTagManager() {
  useEffect(() => {
    if (!window.dataLayer) {
      window.dataLayer = [];
    }

    const page = window.location.pathname + window.location.search;

    window.dataLayer.push({
      event: "pageview",
      page,
    });
  }, []);

  return null;
}

export default GoogleTagManager;
