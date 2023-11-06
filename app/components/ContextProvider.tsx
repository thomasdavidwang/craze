"use client";

import { createContext, useContext, useState } from "react";

interface LayoutProps {
  children: React.ReactNode;
}

interface contextData {
  userID: string;
}

const context = createContext({ userID: "" });

export default function ContextProvider(props: LayoutProps) {
  const [context, setContextData] = useState({ userID: "" });

  return <context.Provider value={context}>{props.children}</context.Provider>;
}
