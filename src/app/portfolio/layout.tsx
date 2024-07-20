"use client"
import React from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { FaCircleArrowLeft } from "react-icons/fa6";

export default function Layout({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  const goBack = () => {
    router.back();
  };

  return (
    <main className="py-20">
      <Button
        variant="text"
        className="rounded-full md:ms-2 h-12 md:mb-4 mb-2 hover:opacity-60 transition-all"
        onClick={goBack}
      >
        <FaCircleArrowLeft className="h-full w-full" />
      </Button>
      {children}
    </main>
  );
}

