import { Stethoscope, Award, Users, Activity, CheckCircle2 } from "lucide-react";

export default function Aboutsection() {
  const specialties = [
    "Joint Replacement Surgery (Knee, Hip, Shoulder)",
    "Complex Fracture & Trauma Management",
    "Spine Surgery & Back Pain Treatment",
    "Arthroscopy & Sports Medicine",
    "Arthritis & Osteoporosis Management",
    "Pediatric Orthopedics (Bachon ki haddi ka ilaaj)",
  ];

  return (
    <section  id="about"  className="bg-white py-16 lg:py-24 text-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-xs font-bold text-blue-600 uppercase tracking-widest bg-blue-50 inline-block px-3 py-1 rounded-full">
            Our Identity
          </h2>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Hum Hain Aapke Jodon Aur Haddi Ke <br />
            <span className="text-blue-600">Sache Aur Trusted Sathi</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-500 leading-relaxed">
            Pichle 15+ saalon se hamara ek hi maqsad hai — har mareez ko dard-mukt zindagi dena aur unhe phir se apne pairon par khada karna.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side: Stats and Info Cards */}
          <div className="space-y-8">
            <div className="prose prose-slate max-w-none">
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Dr. Rupesh Sharma (MS - Orthopedics)</h3>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                Hamari clinic advanced orthopedic treatments ke liye jaani jaati hai. Hum sirf ilaaj nahi karte, balki rehabilitation aur proper physiotherapy ke sath mareez ki complete recovery ensure karte hain. Hamari clinic me sabhi modern machinery aur computerized diagnostic tools available hain.
              </p>
            </div>

            {/* Specialties Checklist */}
            <div className="space-y-3">
              <h4 className="font-bold text-slate-900 text-base">Hamari Khas Visheshgata (Specialties):</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {specialties.map((item, index) => (
                  <div key={index} className="flex items-start space-x-2 text-sm text-slate-600">
                    <CheckCircle2 className="h-5 w-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Small Stat Blocks */}
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-slate-100">
              <div className="text-center p-3 bg-slate-50 rounded-xl">
                <div className="text-xl sm:text-2xl font-black text-blue-600">15+</div>
                <div className="text-[11px] font-medium text-slate-500 uppercase tracking-wider mt-0.5">Years Exp</div>
              </div>
              <div className="text-center p-3 bg-slate-50 rounded-xl">
                <div className="text-xl sm:text-2xl font-black text-blue-600">10k+</div>
                <div className="text-[11px] font-medium text-slate-500 uppercase tracking-wider mt-0.5">Surgeries</div>
              </div>
              <div className="text-center p-3 bg-slate-50 rounded-xl">
                <div className="text-xl sm:text-2xl font-black text-blue-600">99%</div>
                <div className="text-[11px] font-medium text-slate-500 uppercase tracking-wider mt-0.5">Success Rate</div>
              </div>
            </div>
          </div>

          {/* Right Side: Features List with Icons */}
          <div className="bg-slate-50 p-6 sm:p-8 rounded-2xl border border-slate-200/60 space-y-6">
            <h3 className="text-xl font-bold text-slate-900 mb-2">Why Choose Our Clinic?</h3>
            
            {/* Feature 1 */}
            <div className="flex items-start space-x-4">
              <div className="bg-blue-100 p-2.5 rounded-lg text-blue-600 mt-1">
                <Stethoscope className="h-5 w-5" />
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 text-base">Advanced Diagnostics</h4>
                <p className="text-slate-500 text-xs sm:text-sm mt-0.5">Hum digital X-Ray aur accurate diagnosis ke sath bone density test (BMD) ki turant suvidha dete hain.</p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex items-start space-x-4">
              <div className="bg-blue-100 p-2.5 rounded-lg text-blue-600 mt-1">
                <Award className="h-5 w-5" />
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 text-base">Certified Surgeons</h4>
                <p className="text-slate-500 text-xs sm:text-sm mt-0.5">Dr. Rupesh Sharma board-certified senior surgeon hain jinhe desh ke naye aur bade medical institutes ka anubhav hai.</p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex items-start space-x-4">
              <div className="bg-blue-100 p-2.5 rounded-lg text-blue-600 mt-1">
                <Users className="h-5 w-5" />
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 text-base">Patient Centric Rehab</h4>
                <p className="text-slate-500 text-xs sm:text-sm mt-0.5">Hum operation ke baad mareez ke uthne-baithne aur chalne tak poori training aur physiotherapy support dete hain.</p>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="flex items-start space-x-4">
              <div className="bg-blue-100 p-2.5 rounded-lg text-blue-600 mt-1">
                <Activity className="h-5 w-5" />
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 text-base">Emergency Fracture Care</h4>
                <p className="text-slate-500 text-xs sm:text-sm mt-0.5">Accident ya complex fracture ke cases ke liye hamari trauma management team hamesha active rehti hai.</p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
