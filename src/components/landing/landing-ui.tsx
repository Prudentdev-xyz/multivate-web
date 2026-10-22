"use client";

import { createContext, use, useState, type ReactNode } from "react";

type LandingUi = {
  menuOpen: boolean;
  setMenuOpen: (open: boolean | ((open: boolean) => boolean)) => void;
};

const LandingUiContext = createContext<LandingUi | null>(null);

/** Shares the mobile menu state between the header and the floating Kazzy button. */
export function LandingUiProvider({ children }: { children: ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);
  return <LandingUiContext value={{ menuOpen, setMenuOpen }}>{children}</LandingUiContext>;
}

export function useLandingUi() {
  const ctx = use(LandingUiContext);
  if (!ctx) throw new Error("useLandingUi must be used inside <LandingUiProvider>");
  return ctx;
}
