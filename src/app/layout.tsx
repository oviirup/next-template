import { Providers } from "@/components/layout/providers";
import { fonts } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import "./globals.css";

export { metadata, viewport } from "./meta";

export default function RootLayout({ children }: React.PropsWithChildren) {
  const fontClassNames = [fonts.sans.variable, fonts.code.variable];
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(fontClassNames, "flex flex-col bg-background px-2")}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
