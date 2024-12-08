import localFont from "next/font/local";
import "../globals.css";

const circularWebFont = localFont({
  src: "../fonts/circularweb-book.woff2", // Adjusted path relative to this file
  variable: "--font-circularweb",
  weight: "400",
});

const generalFont = localFont({
  src: "../fonts/general.woff2", // Adjusted path relative to this file
  variable: "--font-general",
  weight: "400",
});

const robertMediumFont = localFont({
  src: "../fonts/robert-medium.woff2", // Adjusted path relative to this file
  variable: "--font-robert-medium",
  weight: "400",
});

const robertRegularFont = localFont({
  src: "../fonts/robert-regular.woff2", // Adjusted path relative to this file
  variable: "--font-robert-regular",
  weight: "400",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${generalFont.variable} ${circularWebFont.variable} ${robertMediumFont.variable} ${robertRegularFont.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
