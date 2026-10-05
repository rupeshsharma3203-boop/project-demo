"use client";
import Link from "next/link";
import { useState } from "react";
import { X } from "lucide-react";
import Appointment from "../Appointmentpage/Appointment";
import { Activity, ShieldCheck, Clock, Award } from "lucide-react";


export default function Herosection() {
  {/* Popup code */}
  const [showPopup, setShowPopup] = useState(false);
  {/* Popup code */}
  return (
    <>
    <section className="relative bg-gradient-to-br from-slate-50 to-blue-50/50 py-16 lg:py-24 overflow-hidden">
      {/* Decorative Background Blur */}
      <div className="absolute top-0 right-0 -mt-12 -mr-12 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -mb-12 -ml-12 w-72 h-72 bg-emerald-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column: Text & Action */}
          <div className="space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center space-x-2 bg-blue-50 border border-blue-200/60 rounded-full px-4 py-1.5 text-sm font-semibold text-blue-600 shadow-sm">
              <Activity className="h-4 w-4 text-blue-500 animate-pulse" />
              <span>Advanced Orthopedic & Joint Care Clinic</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
              Haddi aur Jodon ke Dard se <br className="hidden sm:inline" />
              <span className="text-blue-600">Paayein Permanent Raahat</span>
            </h1>
            
            <p className="text-lg text-slate-600 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Dr. Rupesh Sharma (MS - Orthopedics) ke sath paayein jodon ka dard, fracture, aur spine se judi har samasya ka sabse aasan aur safe ilaaj. Hum aapko fir se khushi se chalne ke kabil banate hain.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2">
              <button onClick={() => setShowPopup(true)} className="bg-blue-600 hover:bg-blue-700 active:scale-[0.98] text-white font-semibold py-3.5 px-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 text-base">
                Book Appointment Now
              </button>
              <Link 
                href="#services" 
                className="inline-flex items-center justify-center border border-slate-300 hover:border-blue-400 bg-white hover:bg-slate-50 text-slate-700 font-semibold py-3.5 px-8 rounded-lg transition-colors duration-200 text-base shadow-sm"
              >
                Our Treatments
              </Link>
            </div>

            {/* Trust Badges Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 border-t border-slate-200/80 max-w-xl mx-auto lg:mx-0">
              <div className="flex flex-col items-center lg:items-start">
                <Award className="h-6 w-6 text-blue-500 mb-1" />
                <span className="text-xs text-slate-500 font-medium">15+ Yrs Exp</span>
              </div>
              <div className="flex flex-col items-center lg:items-start">
                <ShieldCheck className="h-6 w-6 text-emerald-500 mb-1" />
                <span className="text-xs text-slate-500 font-medium">Safe Surgery</span>
              </div>
              <div className="flex flex-col items-center lg:items-start">
                <Clock className="h-6 w-6 text-blue-500 mb-1" />
                <span className="text-xs text-slate-500 font-medium">24/7 Trauma</span>
              </div>
              <div className="flex flex-col items-center lg:items-start">
                <span className="text-base font-bold text-slate-800 leading-none mb-1">10k+</span>
                <span className="text-xs text-slate-500 font-medium">Happy Patients</span>
              </div>
            </div>
          </div>

          {/* Right Column: Dynamic Healthcare Graphic / Images */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md sm:max-w-lg aspect-square lg:aspect-auto lg:h-[500px] rounded-2xl overflow-hidden shadow-xl border-4 border-white bg-slate-200">
              {/* Client yahan doctor ki real photo ya stock medical photo laga sakta hai */}
              <img 
                src="doctor.jpg" 
                alt="Orthopedic Doctor Consult" 
                className="w-full h-full object-cover"
              />
              {/* Overlay Badge for Bones/Joints Specialty */}
              <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-slate-100 max-w-[240px] hidden sm:block">
                <p className="text-xs font-bold text-blue-600 uppercase tracking-wider">Specialization</p>
                <h4 className="text-sm font-bold text-slate-900 mt-0.5">Joint Replacement & Spine Care</h4>
                <p className="text-[11px] text-slate-500 mt-1">Knee, Hip, Shoulder & Complex Fracture Management.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>


{/* जब showPopup true होगा, तभी यह हिस्सा दिखेगा */}
{showPopup && (
  <div className="fixed inset-0 bg-black/80  flex justify-center items-center z-50 p-4">
    <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto relative p-6">
      
      {/* पॉपअप बंद करने का बटन */}
      <button 
        onClick={() => setShowPopup(false)}
        className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 transition"
      >
        <X className="h-6 w-6" />
      </button>

      {/* आपका अपॉइंटमेंट फॉर्म यहाँ दिखेगा */}
      <div className="mt-4">
        <Appointment />
      </div>
      
    </div>
  </div>
)}

</>


  );
}
