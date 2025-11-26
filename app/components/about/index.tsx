"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="flex flex-col md:flex-row items-center md:items-start justify-center gap-10 px-6 md:px-24 py-20"
    >
      {/* Text Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="flex-1 max-w-2xl md:pt-4" // slight top padding to align perfectly
      >
        <div className="text-3xl md:text-5xl mb-6 tracking-wide text-">
          About <span className="italic font-serif">Annie Studio</span>
        </div>

        <div className="leading-relaxed text-base md:text-lg space-y-5 ">
          <p>
            At{" "}
            <span className=" font-semibold italic">Annie Studio</span>,
            beauty and precision come together in perfect harmony. Founded by a
            nurse with a deep passion for aesthetics, our mission is to provide
            lash services that are not only beautiful but also safe, meticulous,
            and tailored to each individual.
          </p>
          <p>
            With a background in healthcare, we understand the importance of
            hygiene, comfort, and attention to detail. Every appointment is
            carried out with care and professionalism, ensuring that you feel
            completely relaxed and confident throughout your visit.
          </p>
          <p>
            We specialize in creating lashes that enhance your natural beauty —
            from soft, everyday elegance to bold, glamorous styles. Each set is
            designed to complement your features and highlight your personality.
          </p>
          <p>
            At Annie Studio, it’s more than just lashes — it’s about helping you
            feel your best, inside and out. Step into our calm, welcoming space
            in Seinäjoki, and leave with a refreshed look and renewed
            confidence.
          </p>
        </div>

        <div className="mt-10">
          <div className="w-24 h-1 bg-amber-300 rounded-full"></div>
        </div>
      </motion.div>

      {/* Image Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="flex-1 flex justify-center"
      >
        {" "}
        <div className="flex-initial p-6 flex justify-center items-center">
          {" "}
          <div className="relative w-90 h-100 md:w-100 md:h-140 rounded-lg shadow-lg overflow-hidden border-20 border-amber-50">
            {" "}
            <Image
              src="/aboutUs1.png"
              alt="About Us"
              fill
              style={{ objectFit: "cover" }}
            />{" "}
          </div>{" "}
        </div>{" "}
      </motion.div>
    </section>
  );
}
