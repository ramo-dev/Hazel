
"use client";
import React, { useEffect, useState } from 'react';
import Link from "next/link";
import { fetchImages } from '../../utils/firebase';
import { Card } from '@/components/ui/card';
import { LuLoader2 } from "react-icons/lu";
import { Button } from "@/components/ui/button";
import { Share2, ExternalLink } from "lucide-react";
import { useRouter } from "next/navigation";
import ShareDialog from "./ShareBox.tsx";

// Define the type for an image
interface Image {
  id: string;
  title: string;
  description: string;
  mainPhoto: string;
}

const Gallery: React.FC = () => {
  const [images, setImages] = useState<Image[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [iD, setShareID] = useState<string>("");
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    const loadImages = async () => {
      const fetchedImages = await fetchImages();
      setImages(fetchedImages);
      setLoading(false);
    };
    loadImages();
  }, []);

  const handleNavigate = (id: string) => {
    router.push(`/portfolio/${id}`);
  };

  const handleShare = (id: string) => {
    setShareID(id);
    setIsOpen(true);
  };

  if (loading) {
    return (
      <div className="w-full mx-auto p-4 bg-background rounded-lg h-screen flex items-center justify-center">
        <LuLoader2 className="animate-spin text-gray-500" size={24} />
        <h2 className="text-2xl ml-4">Loading...</h2>
      </div>
    );
  }

  return (
    <div className="gallery mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6  md:px-6 px-3">
      {images.map((image) => (
        <Card key={image.id} className=" cursor-pointer relative shadow-lg rounded-none overflow-hidden group">
          <img
            alt={image.description}
            src={image.mainPhoto}
            className="w-full h-[70vh] object-cover"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out p-4">
            <h1 className="text-xl font-bold text-white mb-2">{image.title}</h1>
            <p className="text-gray-200 line-clamp-3">{image.description}</p>
            <div className="flex gap-6 mt-20">
              <Button variant="ghost" className="hover:bg-background/50" onClick={() => handleShare(image.id)}>
                <Share2 className="text-4xl" />
              </Button>
              <Link href={`/portfolio/${image.id}`} passHref>
                <Button variant="ghost" className="hover:bg-background/50" onClick={() => handleNavigate(image.id)}>
                  <ExternalLink className="text-3xl" />
                </Button>
              </Link>
            </div>
          </div>
        </Card>
      ))}
      <ShareDialog isOpen={isOpen} id={iD} onOpenChange={setIsOpen} />
    </div>
  );
};

export default Gallery;


