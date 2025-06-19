"use client";
import React from "react";
import { motion } from "framer-motion";
import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

interface ProductCardProps {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  onAddToCart: (id: string) => void;
}

export function ProductCard({
  id = "1",
  name = "Organic Roma Tomato",
  description = "Fresh organic Roma tomatoes grown locally. Perfect for sauces and salads.",
  price = 2.99,
  imageUrl = "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?q=80&w=500&auto=format&fit=crop",
  onAddToCart = () => {},
}: ProductCardProps) {
  // Format price as currency
  const formattedPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(price);

  // Truncate description if too long
  const truncatedDescription =
    description.length > 100
      ? `${description.substring(0, 97)}...`
      : description;

  return (
    <motion.div
      data-component="ProductCard"
      className="group relative flex flex-col rounded-xl overflow-hidden bg-white shadow-md hover:shadow-lg transition-all duration-300 h-full"
      whileHover={{ y: -5 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="relative h-48 sm:h-56 w-full overflow-hidden">
        <Image
          src={imageUrl}
          alt={name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <div className="flex flex-col flex-grow p-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-1">{name}</h3>
        <p className="text-sm text-gray-600 mb-4 flex-grow">
          {truncatedDescription}
        </p>

        <div className="flex items-center justify-between mt-auto">
          <span className="text-lg font-bold text-primary">
            {formattedPrice}
          </span>
          <Button
            onClick={() => onAddToCart(id)}
            size="sm"
            className="rounded-full bg-primary hover:bg-primary/90 text-white transition-all duration-300"
          >
            <ShoppingCart className="h-4 w-4 mr-2" />
            Add to Cart
          </Button>
        </div>
      </div>
    </motion.div>
  );
}
