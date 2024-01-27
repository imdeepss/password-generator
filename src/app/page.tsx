"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { PasswordGenerator } from "./common/components";

const queryClient = new QueryClient();

export default function Home() {
  return (
    <QueryClientProvider client={queryClient}>
      <PasswordGenerator />
    </QueryClientProvider>
  );
}
