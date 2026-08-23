
import "@rainbow-me/rainbowkit/styles.css";
import "@scaffold-ui/components/styles.css";
import { ClientOnlyProviders } from "~~/components/ClientOnlyProviders";
import { ThemeProvider } from "~~/components/ThemeProvider";
import "~~/styles/globals.css";
import { getMetadata } from "~~/utils/scaffold-eth/getMetadata";

import { Space_Grotesk } from "next/font/google";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});


export const metadata = getMetadata({
  title: 'Crowdfunding | Speedrun Ethereum',
  description: 'Built with 🏗 Scaffold-ETH 2'
});

const ScaffoldEthApp = ({ children }: { children: React.ReactNode }) => {
  return (
    <html suppressHydrationWarning className={`${spaceGrotesk.variable} font-space-grotesk`}>
      <body>
        <ThemeProvider enableSystem>
          <ClientOnlyProviders>{children}</ClientOnlyProviders>
        </ThemeProvider>
      </body>
    </html>
  );
};

export default ScaffoldEthApp;