import { PropsWithChildren } from "react";
import Header from "@/components/Header";
import "../globals.css";

export const metadata = {
  title: "Next.js Page Routing & Rendering",
  description: "Learn how to route to different pages.",
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body>
        <Header />
        <div id="page">{children}</div>
      </body>
    </html>
  );
}
