// // app/providers.tsx
// "use client";

// import { NextUIProvider } from "@nextui-org/react";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// // next auth
// import { SessionProvider } from "next-auth/react";

// export function Providers({ children }: { children: React.ReactNode }) {
//   const queryClient = new QueryClient();

//   return (
//     <SessionProvider>
//       <QueryClientProvider client={queryClient}>
//         <NextUIProvider>{children}</NextUIProvider>
//       </QueryClientProvider>
//     </SessionProvider>
//   );
// }

"use client";

import { SessionProvider } from "next-auth/react";

type Props = {
  children?: React.ReactNode;
};

export const NextAuthProvider = ({ children }: Props) => {
  return <SessionProvider>{children}</SessionProvider>;
};
