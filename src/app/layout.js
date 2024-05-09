
import "./globals.css";
import Footer from "@/components/Footer";


export const metadata = {
  title: "Google Clone",
  description: "Create an app by cloning google",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="relative min-h-screen"  suppressHydrationWarning={true}>{children}
      <Footer/>
      </body>
    </html>
  );
}
