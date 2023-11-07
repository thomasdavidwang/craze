"use client";

import { createContext, useState } from "react";

interface LayoutProps {
  children: React.ReactNode;
}

type ContextData = {
  userID: string | null;
  firstName: string | null;
  lastName: string | null;
  pic: string | null;
};

export const context = createContext(null);

export default function ContextProvider(props: LayoutProps) {
  const [contextData, setContextData] = useState<ContextData>();

  return (
    <context.Provider value={{ contextData, setContextData }}>
      {props.children}
    </context.Provider>
  );
}
