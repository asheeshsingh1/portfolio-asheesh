import "./globals.css";
import Navbar from "../../components/NavBar";
import Footer from "../../components/Footer";

export const metadata = {
  title: "Portfolio: Asheesh Singh",
  description: "Fullstack Developer Portfolio",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />  {/* <-- Navbar added here */}
        {children}
        <Footer />
      </body>
    </html>
  );
}
