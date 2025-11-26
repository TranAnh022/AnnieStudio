"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="home"
      className=" py-20 px-6 sm:px-10 flex flex-col items-center justify-center bg-white text-center relative overflow-hidden"
    >
      {/* Logo animation */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="relative w-40 h-40 sm:w-60 sm:h-60 md:w-70 md:h-70 mx-auto">
          <Image
            src="/logo1.png"
            alt="Annie Studio Logo"
            fill
            className="object-contain"
            priority
          />
        </div>
      </motion.div>

      {/* Tagline */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className=" text-gray-700 text-base sm:text-lg md:text-3xl font-light italic"
      >
        Enhancing your natural beauty with calm, care, and precision.
      </motion.p>

      {/* Button */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.7, duration: 0.8 }}
        className="mt-10"
      >
        <Link
          href="https://varaa.timma.fi/anniestudio?fbclid=IwY2xjawOF_dFleHRuA2FlbQIxMABicmlkETF1N2RPV1piVXE2elp5Tmdmc3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MghjYWxsc2l0ZQEyAAEe6ltoTb-dabPTgrBxIZJkJo6wZQhmzLWuHJjR89wIeTDXuoWlT93lfRAYKmk_aem_gytOB2v6f2YYRIe6TyXYww"
          className="inline-block bg-[#e1d4c4] text-[#18254E] font-semibold tracking-wide text-sm sm:text-base px-8 py-3 rounded-full shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-lg"
        >
          Make an Appointment
        </Link>
      </motion.div>
    </section>
  );
}
