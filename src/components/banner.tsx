"use client";

import { XIcon, ExternalLink } from "lucide-react";
import { useState, useEffect } from "react";

export default function Banner() {
  const [isVisible, setIsVisible] = useState(false);
  const BANNER_COOKIE_NAME = "chinchilla-banner-dismissed";

  useEffect(() => {
    // Check if banner was previously dismissed
    const isDismissed = document.cookie
      .split("; ")
      .find((row) => row.startsWith(`${BANNER_COOKIE_NAME}=`));

    setIsVisible(!isDismissed);
  }, []);

  const dismissBanner = () => {
    // Set cookie to expire in 30 days
    const expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() + 30);

    document.cookie = `${BANNER_COOKIE_NAME}=true; expires=${expirationDate.toUTCString()}; path=/`;
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <>
      {/*
        Make sure you add some bottom padding to pages that include a sticky banner like this to prevent
        your content from being obscured when the user scrolls to the bottom of the page.
      */}
      <div className="pointer-events-none fixed inset-x-0 bottom-0 sm:flex sm:justify-center sm:px-6 sm:pb-5 lg:px-8 z-20">
        <div className="pointer-events-auto flex items-center justify-between gap-x-6 bg-primary text-primary-foreground px-6 py-3 sm:rounded-lg shadow-lg border border-primary">
          <p className="text-sm">
            <a
              href="https://www.canadianpetexpo.ca/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <strong className="font-semibold">Canadian Pet Expo</strong>
              <svg
                viewBox="0 0 2 2"
                aria-hidden="true"
                className="mx-2 inline size-0.5 fill-current"
              >
                <circle r={1} cx={1} cy={1} />
              </svg>
              November 22-23, 2025
            </a>
          </p>
          <button
            type="button"
            className="-m-1.5 flex-none p-1.5 hover:bg-primary-foreground/20 rounded transition-colors"
            onClick={dismissBanner}
          >
            <span className="sr-only">Dismiss</span>
            <XIcon aria-hidden="true" className="size-5" />
          </button>
        </div>
      </div>
    </>
  );
}
