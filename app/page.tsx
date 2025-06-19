"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Truck, Leaf, Award, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
export default function Home() {
  return (
    <div data-component="HomePage" className="min-h-screen flex flex-col">
      {" "}
      POSTGRES_URL: {process.env.POSTGRES_URL} NEXT_PUBLIC_TEST:{" "}
      {process.env.NEXT_PUBLIC_TEST}{" "}
    </div>
  );
}
