import Hero from "@/components";
import Image from "next/image";
import React from "react";

export default function Home() {
  return (
    <main className="overflow-hidden bg-gradient-to-r from-purple-500 to-pink-500">
      <Hero />
    </main>
  );
}
