"use client";

import posthog from "posthog-js";
import { PostHogProvider as PHProvider } from "posthog-js/react";
import { useEffect, useState } from "react";
import PostHogPageView from "./PostHogPageView";

export function PostHogProvider({ children }: { children: React.ReactNode }) {
  const [isPosthogReady, setIsPosthogReady] = useState(false);

  useEffect(() => {
    if (!posthog.has_opted_out_capturing()) {
      posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY || "", {
        api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
        capture_pageview: false,
      });
      setIsPosthogReady(true);
    }
  }, []);

  if (!isPosthogReady) return null; // Prevent rendering until PostHog is ready

  return (
    <PHProvider client={posthog}>
      <PostHogPageView />
      {children}
    </PHProvider>
  );
}
