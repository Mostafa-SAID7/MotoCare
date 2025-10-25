import { useState } from "react";
import { Menu, X, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer hover:opacity-90 transition">
            <div className="bg-blue-600 p-2 rounded-lg">
              <Wrench className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-slate-900">AutoCare</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-slate-700 hover:text-blue-600 transition font-medium">
              Services
            </a>
            <a href="#why-us" className="text-slate-700 hover:text-blue-600 transition font-medium">
              Why Us
            </a>
            <a href="#contact" className="text-slate-700 hover:text-blue-600 transition font-medium">
              Contact
            </a>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">Book Service</Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-slate-900" />
            ) : (
              <Menu className="w-6 h-6 text-slate-900" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden pb-4 flex flex-col gap-3">
            <a href="#services" className="text-slate-700 hover:text-blue-600 transition font-medium py-2">
              Services
            </a>
            <a href="#why-us" className="text-slate-700 hover:text-blue-600 transition font-medium py-2">
              Why Us
            </a>
            <a href="#contact" className="text-slate-700 hover:text-blue-600 transition font-medium py-2">
              Contact
            </a>
            <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">Book Service</Button>
          </nav>
        )}
      </div>
    </header>
  );
}
