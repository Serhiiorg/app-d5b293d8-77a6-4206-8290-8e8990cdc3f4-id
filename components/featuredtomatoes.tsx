"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface TomatoProduct {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}

interface FeaturedTomatoesProps {
  products: TomatoProduct[];
}

export function FeaturedTomatoes({
  products = [
    {
      id: "1",
      name: "Roma Tomatoes",
      description:
        "Perfect for sauces and canning with their dense, meaty flesh and few seeds.",
      price: 3.99,
      imageUrl:
        "https://images.unsplash.com/photo-1582284540020-8acbe03f4924?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1335&q=80",
    },
    {
      id: "2",
      name: "Cherry Tomatoes",
      description:
        "Sweet, bite-sized tomatoes perfect for salads and snacking.",
      price: 4.49,
      imageUrl:
        "https://images.unsplash.com/photo-1592841200221-a6898f307baa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80",
    },
    {
      id: "3",
      name: "Heirloom Tomatoes",
      description:
        "Vibrant, flavorful varieties passed down through generations of farmers.",
      price: 5.99,
      imageUrl:
        "https://images.unsplash.com/photo-1597118862246-d44c345dc2f7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80",
    },
    {
      id: "4",
      name: "Beefsteak Tomatoes",
      description: "Large, juicy tomatoes perfect for sandwiches and burgers.",
      price: 4.79,
      imageUrl:
        "https://images.unsplash.com/photo-1594057687713-5fd14eed1a17?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1364&q=80",
    },
  ],
}: FeaturedTomatoesProps) {
  return (
    <section
      className="py-16 px-4 md:px-8 lg:px-12 bg-gradient-to-b from-red-50 to-transparent"
      data-component="FeaturedTomatoes"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
            Featured Tomatoes
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our handpicked selection of premium tomatoes, grown with
            care and harvested at peak ripeness for the most vibrant flavors and
            nutritional benefits.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>

        <motion.div
          className="mt-12 text-center"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link
            href="/products"
            className="inline-flex items-center px-6 py-3 bg-red-600 text-white rounded-full font-medium hover:bg-red-700 transition-colors shadow-md hover:shadow-lg"
          >
            View All Tomatoes
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

function ProductCard({
  product,
  index,
}: {
  product: TomatoProduct;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8, transition: { duration: 0.2 } }}
      className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
    >
      <div className="h-48 overflow-hidden">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>
      <div className="p-5">
        <h3 className="font-serif font-bold text-xl text-gray-900 mb-2">
          {product.name}
        </h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {product.description}
        </p>
        <div className="flex justify-between items-center">
          <span className="text-red-600 font-bold">
            ${product.price.toFixed(2)}
          </span>
          <button className="px-3 py-1.5 bg-red-100 text-red-600 rounded-full text-sm font-medium hover:bg-red-200 transition-colors">
            Add to Cart
          </button>
        </div>
      </div>
    </motion.div>
  );
}
