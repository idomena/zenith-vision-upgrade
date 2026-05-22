import cloudHero from "@/assets/clouds-hero.jpg";
import cloudPuff from "@/assets/cloud-puff.png";

export function CloudBackdrop() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-sky-gradient" />
      <img
        src={cloudHero}
        alt=""
        className="absolute inset-x-0 top-0 h-[90vh] w-full object-cover opacity-90"
      />
      <div className="absolute inset-0 bg-aurora opacity-70" />
      <img src={cloudPuff} alt="" className="absolute top-[18%] left-[-6%] w-[36rem] opacity-80 animate-float" />
      <img src={cloudPuff} alt="" className="absolute top-[8%] right-[-8%] w-[42rem] opacity-70 animate-float-slow" />
      <img src={cloudPuff} alt="" className="absolute bottom-[10%] left-[20%] w-[28rem] opacity-60 animate-float" />
      <div className="absolute inset-x-0 bottom-0 h-72 bg-gradient-to-b from-transparent to-background" />
    </div>
  );
}
