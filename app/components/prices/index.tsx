"use client";

import { useState } from "react";
import { categories, services } from "./data";

export default function Prices() {
  const [activeCategory, setActiveCategory] = useState("special");

  const filteredServices = services.filter(
    (service) => service.category === activeCategory
  );

  return (
    <section
      id="services"
      className="py-20 px-4 sm:px-8 bg-white text-background"
    >
      {/* Header */}
      <div className="text-center mb-12">
        <p className="text-xs sm:text-sm tracking-[0.3em] text-gray-400 uppercase mb-3 font-bold">
          Enhance Your Natural Beauty
        </p>

        <h2 className="text-3xl sm:text-4xl font-extrabold mb-6">
          Our Services List
        </h2>

        <div className="w-[1px] h-8 bg-yellow-500 mx-auto"></div>
      </div>

      {/* Category Tabs */}
      <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-10">
        {categories.map((category) => (
          <button
            key={category.key}
            className={`px-4 py-2 text-sm sm:text-base rounded-lg font-medium transition-all ${
              activeCategory === category.key
                ? "bg-yellow-500 text-white shadow-md"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
            onClick={() => setActiveCategory(category.key)}
          >
            {category.name}
          </button>
        ))}
      </div>

      {/* Service List */}
      <div className="max-w-3xl mx-auto divide-y divide-gray-200">
        {filteredServices.map((service, index) => (
          <div
            key={index}
            className="py-6 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 sm:gap-6"
          >
            <div className="flex-1 text-left">
              <h3 className="text-base sm:text-lg font-semibold">
                {service.name}
              </h3>

              {service.description && (
                <p className="text-gray-500 text-sm italic mt-1">
                  {service.description}
                </p>
              )}

              {service.details && (
                <p className="text-gray-600 text-sm mt-1">{service.details}</p>
              )}
            </div>

            <p className="text-yellow-700 font-semibold text-right sm:text-left text-base sm:text-lg whitespace-nowrap">
              {service.price}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
