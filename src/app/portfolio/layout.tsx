
"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { FaCircleArrowLeft } from "react-icons/fa6";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const router = useRouter();

  const goBack = () => {
    router.back();
  };

  return (
    <main className="py-20">
      <Button
        variant="ghost"
        className="rounded-full md:ms-2 h-12 md:mb-4 mb-2 hover:opacity-60 transition-all"
        onClick={goBack}
      >
        <FaCircleArrowLeft className="h-full w-full" />
      </Button>
      {children}
    </main>
  );
};

export default Layout;

