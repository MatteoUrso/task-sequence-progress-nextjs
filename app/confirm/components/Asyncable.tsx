/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { use } from "react";

export const Asyncable = ({
  work,
  children,
}: {
  work: Promise<any>;
  children: React.ReactNode;
}) => {
  use(work); // tell React to suspend the component until the promise is resolved which will show the nearest fallback component

  return <>{children}</>;
};
