import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Paper Mill Co. - How Toilet Paper is Made",
  description: "Learn about the fascinating process of toilet paper manufacturing, from raw materials to finished product.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased bg-white text-gray-900`}>
        <header className="bg-white shadow-sm border-b border-amber-100">
          <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center">
                <h1 className="text-2xl font-bold text-amber-800">Paper Mill Co.</h1>
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-6">
                  <a href="/" className="text-amber-700 hover:text-amber-900 px-3 py-2 text-sm font-medium transition-colors">
                    Home
                  </a>
                  <a href="#process" className="text-amber-700 hover:text-amber-900 px-3 py-2 text-sm font-medium transition-colors">
                    Process
                  </a>
                  <a href="#materials" className="text-amber-700 hover:text-amber-900 px-3 py-2 text-sm font-medium transition-colors">
                    Materials
                  </a>
                  <a href="/why-we-love-it" className="text-amber-700 hover:text-amber-900 px-3 py-2 text-sm font-medium transition-colors">
                    Why We Love It
                  </a>
                  <a href="#history" className="text-amber-700 hover:text-amber-900 px-3 py-2 text-sm font-medium transition-colors">
                    History
                  </a>
                  <a href="#contact" className="text-amber-700 hover:text-amber-900 px-3 py-2 text-sm font-medium transition-colors">
                    Contact
                  </a>
                </div>
              </div>
            </div>
          </nav>
        </header>
        
        <main>
          {children}
        </main>
        
        <footer className="bg-amber-800 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">Paper Mill Co.</h3>
                <p className="text-amber-100">
                  Educational resource for understanding toilet paper manufacturing processes and industry standards.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4">Resources</h4>
                <ul className="space-y-2 text-amber-100">
                  <li><a href="#" className="hover:text-white transition-colors">Manufacturing Guide</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Industry Standards</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Environmental Impact</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Research Papers</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4">Contact</h4>
                <div className="text-amber-100 space-y-2">
                  <p>Educational Inquiries</p>
                  <p>info@papermillco.edu</p>
                  <p>1-800-PAPER-ED</p>
                </div>
              </div>
            </div>
            <div className="border-t border-amber-700 mt-8 pt-8 text-center text-amber-100">
              <p>&copy; 2024 Paper Mill Co. Educational Resource. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}