import { Bone, Activity, ShieldCheck, HeartPulse, Sparkles, UserCheck } from "lucide-react";

export default function Servicesection() {
  const services = [
    {
      title: "Joint Replacement Surgery",
      description: "Advanced computerized technique se Knee, Hip, aur Shoulder replacement ki sabse safe aur dard-mukt surgery.",
      icon: <Bone className="h-6 w-6 text-blue-600" />,
      tag: "Popular"
    },
    {
      title: "Complex Fracture & Trauma",
      description: "Accidents ya kisi bhi emergency complex fracture cases ke liye 24/7 advanced bone realignment aur surgery.",
      icon: <Activity className="h-6 w-6 text-blue-600" />,
      tag: "24/7 Emergency"
    },
    {
      title: "Spine & Back Pain Care",
      description: "Slip disc, sciatica, cervical, aur peeth ke har tarah ke purane dard ka bina operation aur operation dono se ilaaj.",
      icon: <HeartPulse className="h-6 w-6 text-blue-600" />,
    },
    {
      title: "Sports Injury & Arthroscopy",
      description: "Ligament tear (ACL/MCL) aur sports injuries ka doorbeen (arthroscopy) dwara bina bada cheera lagaye naya ilaaj.",
      icon: <Sparkles className="h-6 w-6 text-blue-600" />,
    },
    {
      title: "Arthritis & Osteoporosis",
      description: "Umar ke sath haddi kamzor hona aur gathiya (arthritis) ke dardan ka proper medication aur care plans.",
      icon: <ShieldCheck className="h-6 w-6 text-blue-600" />,
    },
    {
      title: "Pediatric Orthopedics",
      description: "Chote bachon ki janmzaat ya baad me aayi haddi aur jodon ki tedhepan (clubfoot/deformities) ka specialist ilaaj.",
      icon: <UserCheck className="h-6 w-6 text-blue-600" />,
    },
  ];

  return (
    <section id="services" className="bg-slate-50 py-16 lg:py-24 text-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-xs font-bold text-blue-600 uppercase tracking-widest bg-blue-100 inline-block px-3 py-1 rounded-full">
            Our Expertise
          </h2>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Advanced Treatments Jo Aapko Phir Se <br />
            <span className="text-blue-600">Khushi Se Chalna Sikhaayein</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-500 leading-relaxed">
            Hum pradan karte hain sabhi aadhunik suvidhaayein aur treatments taaki aapke jodon aur haddiyon ki health ekdum behtar bani rahe.
          </p>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/60 shadow-sm hover:shadow-xl transition-all duration-300 group hover:-translate-y-1 relative overflow-hidden flex flex-col justify-between"
            >
              <div>
                {/* Top Badge for special items */}
                {service.tag && (
                  <span className={`absolute top-4 right-4 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${
                    service.tag === "Popular" ? "bg-amber-100 text-amber-700" : "bg-rose-100 text-rose-700"
                  }`}>
                    {service.tag}
                  </span>
                )}

                {/* Icon Container */}
                <div className="bg-blue-50 group-hover:bg-blue-600 p-3.5 rounded-xl inline-block transition-colors duration-300 mb-6">
                  <div className="group-hover:text-white transition-colors duration-300">
                    {service.icon}
                  </div>
                </div>

                {/* Service Text */}
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors duration-200">
                  {service.title}
                </h3>
                <p className="text-slate-500 text-sm sm:text-base leading-relaxed mb-6">
                  {service.description}
                </p>
              </div>

              {/* Read More / Action link */}
              <div className="pt-2">
                <button className="text-sm font-semibold text-blue-600 group-hover:text-blue-700 inline-flex items-center space-x-1">
                  <span>Learn More</span>
                  <span className="transform group-hover:translate-x-1 transition-transform duration-200">&rarr;</span>
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
