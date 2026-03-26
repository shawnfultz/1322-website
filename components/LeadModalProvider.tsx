"use client";

import { createContext, useContext, useState, type ReactNode } from "react";

interface LeadModalContextType {
  isOpen: boolean;
  open: () => void;
  close: () => void;
}

const LeadModalContext = createContext<LeadModalContextType>({
  isOpen: false,
  open: () => {},
  close: () => {},
});

export function useLeadModal() {
  return useContext(LeadModalContext);
}

export default function LeadModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <LeadModalContext.Provider
      value={{
        isOpen,
        open: () => setIsOpen(true),
        close: () => setIsOpen(false),
      }}
    >
      {children}
    </LeadModalContext.Provider>
  );
}
