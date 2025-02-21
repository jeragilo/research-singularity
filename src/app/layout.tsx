import "@/app/globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-900 text-white">
        {children} {/* Ensures pages render properly */}
      </body>
    </html>
  );
}
