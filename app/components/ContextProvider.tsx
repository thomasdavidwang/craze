"use client";

import { createContext, useState } from "react";

interface LayoutProps {
  children: React.ReactNode;
}

interface ContextData {
  userID: string;
  setUserID: (id: string) => void;
}

export const context = createContext<ContextData | null>(null);

export default function ContextProvider(props: LayoutProps) {
  const [userID, setUserID] = useState("");

  return (
    <context.Provider value={{ userID, setUserID }}>
      {props.children}
    </context.Provider>
  );
}
