"use client";

import {
  ChatBubbleLeftEllipsisIcon,
  StarIcon,
} from "@heroicons/react/24/solid";

const testimonials = [
  {
    name: "Tarja L",
    text: "Rauhallinen ja tunnelmallinen kauneushoitola. Helppo mennä autolla, parkkipaikkoja paljon ja ajan sai varattua viikonlopuiltan 👍. Sain kauniit, hyvin pysyvät ripset. Löysin siis itselleni uuden vakipaikan 🥰",
    rating: 5,
  },
  {
    name: "Krista K",
    text: "Kiitos! Upeat kynnet 😍 olen todella tyytyväinen. Suosittelen jos haluaa hyvää palvelua myöskin.",
    rating: 5,
  },
  {
    name: "Derja K",
    text: "On hieno kokemus olla todellisen ammattilaisen käsissä. Puuterikulmista tuli täysin toivomukseni mukaiset ja Hangin työssä huokui taidokkuus ja pitkä kokemus.",
    rating: 5,
  },
  {
    name: "Saija R",
    text: "Aivan ihana rentouttava hoito, jännitys jäi hoitolaan! Siistit, laadukkaat ja miellyttävät tilat sekä todella mukava henkilökunta. Varasin jo seuraavan hoidon 👌🏼",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto bg-white p-10 sm:p-16 rounded-lg shadow-lg border-20 border-[#18254E]">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1e2746] mb-3">
            Asiakkaan Palautteet
          </h2>
          <div className="w-16 h-1 bg-yellow-500 mx-auto"></div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center space-y-4"
            >
              <ChatBubbleLeftEllipsisIcon className="w-10 h-10 text-[#1e2746]" />

              <p className="text-gray-700 text-sm sm:text-base italic leading-relaxed">
                “{t.text}”
              </p>

              <div className="flex justify-center text-yellow-400">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <StarIcon key={i} className="w-5 h-5" />
                ))}
              </div>

              <p className="font-semibold text-[#1e2746] text-base sm:text-lg">
                {t.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
