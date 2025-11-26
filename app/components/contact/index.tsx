import Image from "next/image";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { BsTelephone } from "react-icons/bs";
import { GrLocation } from "react-icons/gr";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-16 px-6 sm:px-12 lg:px-20 bg-[#2c2c2c] text-white flex flex-col lg:flex-row items-center justify-between gap-12"
    >
      {/* Left: Logo & Social */}
      <div className="flex flex-col items-center text-center flex-1">
        <div className="relative w-36 h-16 sm:w-50 sm:h-35">
          <Image
            src="/logo2.png"
            alt="Logo"
            fill
            className="object-contain"
            priority
          />
        </div>

        <p className="text-base sm:text-lg italic mb-4 text-[#e1d4c4]">
          The Promised Land of Beauty
        </p>

        <div className="flex gap-6">
          <a
            href="https://www.facebook.com/p/Annie-Studio-100085130037350/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook className="text-2xl sm:text-3xl transition-transform duration-300 hover:scale-110 hover:text-[#e1d4c4]" />
          </a>
          <a
            href="https://www.instagram.com/anniestudio_sjk/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="text-2xl sm:text-3xl transition-transform duration-300 hover:scale-110 hover:text-[#e1d4c4]" />
          </a>
        </div>
      </div>

      {/* Middle: Opening Hours */}
      <div className="flex flex-col text-center lg:text-left flex-1">
        <h3 className="font-extrabold text-2xl mb-3 text-[#e1d4c4]">
          Opening Hours
        </h3>
        <p className="text-sm sm:text-base">Monday – Friday: 10:00 – 20:00</p>
        <p className="text-sm sm:text-base">Saturday – Sunday: 12:00 – 20:00</p>
        <p className="italic text-[#e1d4c4] mt-4 text-xs sm:text-sm">
          Please note that our team is available based on bookings.
        </p>
      </div>

      {/* Right: Contact Info + Responsive Map */}
      <div className="flex flex-col items-center lg:items-start flex-1 w-full max-w-lg">
        <div className="flex items-center gap-3 mb-2 text-sm sm:text-base">
          <GrLocation className="text-lg" />
          <p>Keskuskatu 17 B, 2nd floor, 60100 Seinäjoki</p>
        </div>

        <div className="flex items-center gap-3 text-sm sm:text-base">
          <BsTelephone />
          <p>+358 44 9425604</p>
        </div>

        {/* Interactive Google Map */}
        <div className="w-full h-56 sm:h-64 md:h-72 lg:h-60 mt-5 rounded-xl overflow-hidden shadow-lg">
          <iframe
            title="Annie Studio Location"
            src="https://www.google.com/maps?q=Keskuskatu%2017%20B%2060100%20Sein%C3%A4joki&output=embed"
            className="w-full h-full border-0"
            loading="lazy"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
}
