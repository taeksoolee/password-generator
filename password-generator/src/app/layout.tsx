import type { Metadata } from "next";
// import { Inter } from "next/font/google";
// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

import * as stylex from '@stylexjs/stylex';

const styles = stylex.create({
  text: {
    color: 'rgba(255,0,0,1)',
  },
  button: {
    backgroundColor: {
      default: 'lightblue',
      ':hover': 'blue',
      ':active': 'darkblue',
    },
  },
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
      {/* <body className={inter.className}>{children}</body> */}
      <body>
        <div {...stylex.props(styles.button)}>AAA</div>
        {children}
      </body>
    </html>
  );
}