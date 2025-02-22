
import "./globals.css"; // ✅ Correct import
import Navbar from "../components/Navbar";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-900 text-white">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
