import Hero from "@/components";
import Image from "next/image";
import React from "react";

export default function Home() {
  return (
    <body className="bg-gradient-to-r from-purple-500 to-pink-500">
      <main className="overflow-hidden">
        <Hero />
      </main>
    </body>
  );
}
