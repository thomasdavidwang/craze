"use client";

import { Amplify } from "aws-amplify";
import awsconfig from "@/src/aws-exports";

Amplify.configure({ ...awsconfig, ssr: true });

export interface LayoutProps {
  children: React.ReactNode;
}

export default function AWSProvider(props: LayoutProps) {
  return <>{props.children}</>;
}
