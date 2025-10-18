import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Property } from "@/types/propertyType";
import { MapPin } from "lucide-react";

const ProoertyCard: React.FC<{ item: Property }> = ({ item }) => {
  
  return (
    <section>
      <motion.article className="group relative overflow-hidden rounded-xl shadow-md ring-1 ring-black/5">
        <div className="relative aspect-[4/3] w-full">
          <img
            src={item?.propertyImages?.[0]}
            alt={item.title}
            className=" w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
        </div>

        <div
          className={`absolute top-4 right-4 rounded-md p-2 text-white bg-red
        `}
        >
          {item.tag}
        </div>

        <div className="relative z-10">
          <div className="relative bg-gray-200 px-5 py-3 text-darkGray">
            <h3 className="text-lg font-extrabold">{item.title}</h3>
            <p className="mt-2 text-sm">
              <MapPin className=" inline text-red scale-90" />{" "}
              {item.location.city} , {item.location.country} ,{" "}
              {item.location.address}
            </p>
            <p className="mt-2 text-sm">{item.description}</p>
            <hr className="text-black/20" />
            <p className="mt-2 font-bold text-red">
              {item.propertyPricing.priceValue}
            </p>
          </div>
        </div>
      </motion.article>
    </section>
  );
};

export default ProoertyCard;
