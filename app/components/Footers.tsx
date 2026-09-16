import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react"; // Only working icons imported

export default function Footers() {
  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Grid Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Column 1: Brand / Logo info */}
          <div className="space-y-4">
            <Link href="/" className="text-2xl font-bold text-blue-400">
              MyLogo
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed">
              Hum aapko behtareen services provide karne ke liye hamesha taiyar hain. Aaj hi judein aur apna appointment book karein.
            </p>
            
            {/* Social Icons (Bina lucide ke pure SVGs - Zero Errors) */}
            <div className="flex space-x-4 pt-2">
              {/* Facebook */}
              <a href="#" className="text-slate-400 hover:text-blue-500 transition-colors">
                <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24"><path d="M9 8H7v3h2v9h3v-9h3l.5-3H12V6c0-.88.77-1 1-1h2V2h-3c-2.9 0-5 1.55-5 4.5V8z"/></svg>
              </a>
              {/* Twitter / X */}
              <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">
                <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              {/* Instagram */}
              <a href="#" className="text-slate-400 hover:text-pink-500 transition-colors">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37zM17.5 6.5h.01"/></svg>
              </a>
              {/* Linkedin */}
              <a href="#" className="text-slate-400 hover:text-blue-600 transition-colors">
                <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z"/></svg>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Services</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div className="space-y-3">
            <h3 className="text-white font-semibold text-lg mb-4">Contact Us</h3>
            <div className="flex items-center space-x-3 text-sm">
              <MapPin className="h-5 w-5 text-blue-400 flex-shrink-0" />
              <span>123 Tech Park, Sector 62, Noida, India</span>
            </div>
            <div className="flex items-center space-x-3 text-sm">
              <Phone className="h-5 w-5 text-blue-400 flex-shrink-0" />
              <span>+91 98765 43210</span>
            </div>
            <div className="flex items-center space-x-3 text-sm">
              <Mail className="h-5 w-5 text-blue-400 flex-shrink-0" />
              <span>support@mylogo.com</span>
            </div>
          </div>

          {/* Column 4: Newsletter Subscription */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Newsletter</h3>
            <p className="text-sm text-slate-400 mb-4">Hamare naye updates aur offers ke liye subscribe karein.</p>
            <form className="flex flex-col space-y-2">
              <input 
                type="email" 
                placeholder="Apna Email dalein" 
                className="bg-slate-800 border border-slate-700 rounded-lg px-4 py-2 text-sm text-white focus:outline-none focus:border-blue-400 transition-colors"
                required
              />
              <button 
                type="submit" 
                className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 rounded-lg text-sm transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>

        </div>

        {/* Bottom Copyright Section */}
        <div className="border-t border-slate-800 mt-12 pt-6 text-center text-xs text-slate-500 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p>&copy; {new Date().getFullYear()} MyLogo. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:underline">Privacy Policy</a>
            <a href="#" className="hover:underline">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
