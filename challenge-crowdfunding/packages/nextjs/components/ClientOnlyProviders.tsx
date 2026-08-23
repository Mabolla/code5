"use client";

import dynamic from "next/dynamic";

const ScaffoldEthAppWithProviders = dynamic(
  () => import("~~/components/ScaffoldEthAppWithProviders").then(module => module.ScaffoldEthAppWithProviders),
  {
    ssr: false,
  },
);

export const ClientOnlyProviders = ({ children }: { children: React.ReactNode }) => (
  <ScaffoldEthAppWithProviders>{children}</ScaffoldEthAppWithProviders>
);
