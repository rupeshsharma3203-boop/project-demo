"use client";

import { useState } from "react";
import { User, Phone, Calendar, ClipboardList, CheckCircle2, MessageSquare } from "lucide-react";

export default function Appointment() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Future me yahan database ya email API integrate kar sakte hain
  };

  if (submitted) {
    return (
      <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-8 text-center max-w-md mx-auto shadow-sm animate-fadeIn">
        <CheckCircle2 className="h-12 w-12 text-emerald-500 mx-auto mb-4" />
        <h3 className="text-xl font-bold text-emerald-900">Request Sent Successfully!</h3>
        <p className="text-sm text-emerald-700 mt-2">
          Hamari team aapse agle 15-30 minutes me sampark karke aapka appointment slot confirm karegi. Thank you!
        </p>
        <button 
          onClick={() => setSubmitted(false)}
          className="mt-6 text-sm font-semibold text-emerald-600 hover:text-emerald-700"
        >
          Book Another Appointment
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white p-6 sm:p-10 rounded-2xl border border-slate-200/80 shadow-md max-w-xl mx-auto">
      <div className="mb-6">
        <h3 className="text-xl font-bold text-slate-900">Book Patient Slot</h3>
        <p className="text-xs text-slate-500 mt-1">Sahi details bharein taaki doctor ke sath slot jaldi confirm ho sake.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Patient Name */}
        <div>
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">Patient Full Name</label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
              <User className="h-4 w-4" />
            </div>
            <input 
              type="text" 
              placeholder="Mरीज ka poora naam likhein" 
              className="w-full bg-slate-50 border border-slate-200 rounded-lg pl-10 pr-4 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-blue-500 focus:bg-white transition-all"
              required 
            />
          </div>
        </div>

        {/* Phone Number */}
        <div>
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">Contact Number</label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
              <Phone className="h-4 w-4" />
            </div>
            <input 
              type="tel" 
              placeholder="Mobile number" 
              className="w-full bg-slate-50 border border-slate-200 rounded-lg pl-10 pr-4 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-blue-500 focus:bg-white transition-all"
              required 
            />
          </div>
        </div>

        {/* Date and Specialty Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Preferred Date */}
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">Preferred Date</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                <Calendar className="h-4 w-4" />
              </div>
              <input 
                type="date" 
                className="w-full bg-slate-50 border border-slate-200 rounded-lg pl-10 pr-4 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-blue-500 focus:bg-white transition-all"
                required 
              />
            </div>
          </div>

          {/* Specialty Dropdown */}
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">Bone/Joint Problem</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                <ClipboardList className="h-4 w-4" />
              </div>
              <select 
                className="w-full bg-slate-50 border border-slate-200 rounded-lg pl-10 pr-4 py-2.5 text-sm text-slate-600 focus:outline-none focus:border-blue-500 focus:bg-white transition-all"
                required
              >
                <option value="">Bimari chunein</option>
                <option value="joint">Joint Pain / Replacement (Jodon ka dard)</option>
                <option value="fracture">Fracture & Trauma (Tuti haddi)</option>
                <option value="spine">Spine & Back Pain (Peeth ka dard)</option>
                <option value="sports">Sports Injury (Ligament Tear)</option>
                <option value="other">Other Issue</option>
              </select>
            </div>
          </div>
        </div>

        {/* Message / Symptoms */}
        <div>
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">Symptoms / Notes (Optional)</label>
          <div className="relative">
            <div className="absolute top-3 left-3.5 pointer-events-none text-slate-400">
              <MessageSquare className="h-4 w-4" />
            </div>
            <textarea 
              rows={3} 
              placeholder="Apni pareshani ke baare me thoda likhein..." 
              className="w-full bg-slate-50 border border-slate-200 rounded-lg pl-10 pr-4 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-blue-500 focus:bg-white transition-all"
            ></textarea>
          </div>
        </div>

        {/* Submit Button */}
        <button 
          type="submit" 
          className="w-full bg-blue-600 hover:bg-blue-700 active:scale-[0.99] text-white font-semibold py-3 rounded-lg text-sm shadow-md hover:shadow-lg transition-all duration-200 mt-2"
        >
          Request Appointment Slot
        </button>
      </form>
    </div>
  );
}
