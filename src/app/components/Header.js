import Link from "next/link";
import FontAwesome from "./FontAwesome";

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-primary to-secondary text-white p-6 rounded-xl shadow-lg mb-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-20"></div>
      <div className="relative z-10 flex flex-col items-center text-center">
        <img
          src="https://ui-avatars.com/api/?name=Zain+Imran&background=random"
          alt="Zain Imran"
          className="w-28 h-28 rounded-full border-4 border-white shadow-md mb-6 hover:scale-105 hover:rotate-3 transition-transform duration-300"
        />
        <h1 className="text-4xl font-bold mb-3">ZAIN IMRAN</h1>
        <p className="text-xl opacity-90 mb-6">
          Full-Stack Web Developer | Next.js, MongoDB, MERN Stack Enthusiast
        </p>
        
        <div className="flex flex-wrap justify-center gap-4 mb-6">
          <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full backdrop-blur-sm hover:bg-white/30 hover:-translate-y-1 transition-all duration-300">
            <FontAwesome icon="map-marker-alt" className="text-sm" />
            <span>Gujrat, Punjab, Pakistan</span>
          </div>
          <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full backdrop-blur-sm hover:bg-white/30 hover:-translate-y-1 transition-all duration-300">
            <FontAwesome icon="phone" className="text-sm" />
            <span>+92 3226409363</span>
          </div>
          <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full backdrop-blur-sm hover:bg-white/30 hover:-translate-y-1 transition-all duration-300">
            <FontAwesome icon="envelope" className="text-sm" />
            <span>mirzazan3334@gmail.com</span>
          </div>
        </div>
        
        <div className="flex gap-4">
  <Link href="https://github.com/mzain4321" target="_blank" className="text-2xl hover:-translate-y-1 hover:scale-110 transition-transform duration-300">
    <FontAwesome icon="github" brand />
  </Link>
  <Link href="https://www.linkedin.com/in/zain-imran-792545320" target="_blank" rel="noopener noreferrer" className="text-2xl hover:-translate-y-1 hover:scale-110 transition-transform duration-300">
    <FontAwesome icon="linkedin" brand />
  </Link>
  <Link href="#" target="_blank" className="text-2xl hover:-translate-y-1 hover:scale-110 transition-transform duration-300">
    <FontAwesome icon="twitter" brand />
  </Link>
</div>
      </div>
    </header>
  );
}