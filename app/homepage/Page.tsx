import Herosection from "./Herosection";
import Aboutsection from "./Aboutsection"
import Servicesection from "./Servicesection";
import Contactsection from "./Contactsection";
import Appointment from "./Appointment";


export default function Home() {
  return (
    <>
      <Herosection />
      <Aboutsection />
      <Servicesection />
      <Contactsection />
      <Appointment />
      
      {/* Baaki ke sections jaise Features, About yahan aayenge */}
    </>
  );
}
