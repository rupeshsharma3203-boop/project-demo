import { Mail, Phone, MapPin, Clock, CalendarDays, ShieldAlert } from "lucide-react";

export default function Contactsection() {
  return (
    <section id="contact" className="bg-white py-16 lg:py-24 text-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-xs font-bold text-blue-600 uppercase tracking-widest bg-blue-100 inline-block px-3 py-1 rounded-full">
            Book Appointment
          </h2>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Aaj Hi Appointment Le Aur <br />
            <span className="text-blue-600">Dard-Mukt Zindagi Ki Shuruat Karein</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-500 leading-relaxed">
            Niche diye gaye form ko bharein ya seedhe diye gaye number par call karke apna checkup slot book karein.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Left Side: Appointment Form */}
          <div className="bg-slate-50 p-6 sm:p-10 rounded-2xl border border-slate-200/60 shadow-sm">
            <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center space-x-2">
              <CalendarDays className="h-5 w-5 text-blue-600" />
              <span>Fill Appointment Form</span>
            </h3>
            
            <form className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-1.5">Full Name</label>
                  <input type="text" placeholder="Apna naam likhein" className="w-full bg-white border border-slate-200 rounded-lg px-4 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-blue-500 transition-colors" required />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-1.5">Phone Number</label>
                  <input type="tel" placeholder="Mobile number" className="w-full bg-white border border-slate-200 rounded-lg px-4 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-blue-500 transition-colors" required />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-1.5">Select Date</label>
                  <input type="date" className="w-full bg-white border border-slate-200 rounded-lg px-4 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-blue-500 transition-colors" required />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-1.5">Problem / Specialty</label>
                  <select className="w-full bg-white border border-slate-200 rounded-lg px-4 py-2.5 text-sm text-slate-500 focus:outline-none focus:border-blue-500 transition-colors" required>
                    <option value="">Kya dikkat hai chunein</option>
                    <option value="joint">Joint Pain / Replacement</option>
                    <option value="fracture">Fracture / Trauma</option>
                    <option value="spine">Spine / Back Pain</option>
                    <option value="other">Other Ortho Problem</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-1.5">Message (Optional)</label>
                <textarea rows={3} placeholder="Apni dikkat ke baare me thoda batayein..." className="w-full bg-white border border-slate-200 rounded-lg px-4 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-blue-500 transition-colors"></textarea>
              </div>

              <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg text-sm shadow-md transition-colors duration-200 mt-2">
                Confirm Booking Request
              </button>
            </form>
          </div>

          {/* Right Side: Contact Info & Emergency Info */}
          <div className="flex flex-col justify-between space-y-8">
            
            {/* Direct Info Blocks */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Clinic Contact Information</h3>
              
              <div className="flex items-start space-x-4">
                <div className="bg-blue-50 p-2.5 rounded-xl text-blue-600 mt-1">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 text-sm sm:text-base">Clinic Address</h4>
                  <p className="text-slate-500 text-xs sm:text-sm mt-0.5">123 Tech Park, Near Metro Pillar 54, Sector 62, Noida, India</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-blue-50 p-2.5 rounded-xl text-blue-600 mt-1">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 text-sm sm:text-base">Call For Booking</h4>
                  <p className="text-slate-500 text-xs sm:text-sm mt-0.5">+91 98765 43210, +91 0120 445566</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-blue-50 p-2.5 rounded-xl text-blue-600 mt-1">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 text-sm sm:text-base">Clinic Timings</h4>
                  <p className="text-slate-500 text-xs sm:text-sm mt-0.5">Monday to Saturday: 10:00 AM - 2:00 PM & 5:00 PM - 8:00 PM</p>
                </div>
              </div>
            </div>

            {/* Red/Alert Highlight for Emergency Trauma */}
            <div className="bg-rose-50 border border-rose-200 p-5 rounded-2xl flex items-start space-x-4">
              <div className="bg-rose-100 p-2.5 rounded-xl text-rose-600 flex-shrink-0 mt-0.5">
                <ShieldAlert className="h-5 w-5 animate-pulse" />
              </div>
              <div>
                <h4 className="font-bold text-rose-900 text-sm sm:text-base">24/7 Fracture & Trauma Emergency</h4>
                <p className="text-rose-700 text-xs sm:text-sm mt-0.5">
                  Accident, joint dislocation, ya gabhir fracture ke cases ke liye hamari emergency team aur doctor 24 ghante upalabdh hain. Emergency Hotline: <span className="font-bold text-rose-900">+91 99999 88888</span>
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
