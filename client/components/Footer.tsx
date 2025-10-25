import { Wrench, Phone, Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-blue-600 p-2 rounded-lg">
                <Wrench className="w-5 h-5 text-white" />
              </div>
              <span className="text-lg font-bold">AutoCare</span>
            </div>
            <p className="text-slate-400 text-sm">
              Professional car maintenance and repair services you can trust.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold mb-4">Services</h3>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li>
                <a href="#" className="hover:text-white transition">Oil Changes</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">Tire Service</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">Brake Inspection</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">General Repairs</a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-bold mb-4">Company</h3>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li>
                <a href="#" className="hover:text-white transition">About</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">Blog</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">Careers</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">Privacy</a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold mb-4">Contact</h3>
            <ul className="space-y-3 text-slate-400 text-sm">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <a href="tel:+1234567890" className="hover:text-white transition">(123) 456-7890</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <a href="mailto:hello@autocare.com" className="hover:text-white transition">hello@autocare.com</a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5" />
                <span>123 Main Street<br />Anytown, ST 12345</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 text-sm">
              © 2024 AutoCare. All rights reserved.
            </p>
            <div className="flex gap-6 mt-4 md:mt-0 text-slate-400 text-sm">
              <a href="#" className="hover:text-white transition">Terms</a>
              <a href="#" className="hover:text-white transition">Privacy</a>
              <a href="#" className="hover:text-white transition">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
