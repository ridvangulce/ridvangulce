import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import { Inter, JetBrains_Mono } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });
const mono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono' });

const App = ({ Component, pageProps }) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
      <main className={`${inter.variable} ${mono.variable} font-sans`}>
        <Component {...pageProps} />
      </main>
    </ThemeProvider>
  );
};

export default App;
