

"use client";
import React, { useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { MapPin, Loader2 } from "lucide-react";
import { db } from '../../../utils/firebase';
import { doc, getDoc } from 'firebase/firestore';
import Image from "next/image";

interface Photo {
  mainPhoto: string;
  title: string;
  timestamp: string;
  location: string;
  description: string;
  otherPhotos?: string[];
}

interface PhotoPageProps {
  params: {
    id: string;
  };
}

const PhotoPage: React.FC<PhotoPageProps> = ({ params }) => {
  const router = useRouter();
  const { id } = params;
  const pathname = usePathname();
  console.log(pathname);

  const [photo, setPhoto] = useState<Photo | null>(null);

  useEffect(() => {
    const fetchPhoto = async () => {
      if (id) {
        try {
          const docRef = doc(db, 'photos', id);
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            setPhoto(docSnap.data() as Photo);
          } else {
            console.warn('Document not found');
          }
        } catch (error) {
          console.error('Error fetching photo:', error);
        }
      }
    };

    fetchPhoto();
  }, [id]);

  if (!photo) {
    return (
      <div className="w-full mx-auto p-4 bg-background rounded-lg h-screen flex items-center justify-center">
        <Loader2 className="animate-spin text-gray-500" size={24} />
        <h2 className="text-2xl ml-4">Loading...</h2>
      </div>
    );
  }

  return (
    <div className="p-4 bg-background w-full max-w-[350px] md:max-w-[600px] mx-auto min-h-[100vh]">
      <div className="relative w-full md:h-[70vh] h-[40vh] mb-2 rounded-none overflow-hidden">
        <img
          src={photo.mainPhoto}
          alt={photo.title}
          className="transition-opacity duration-700 ease-in-out h-full"
        />
      </div>
      <div className="flex justify-between items-center my-4">
        <small className="text-muted-foreground w-full border-b w-max">{photo.timestamp}</small>

        <div className="flex items-center space-x-2">
          <MapPin className="text-red-500" />
          <p className="text-gray-700 dark:text-foreground text-sm">{photo.location}</p>
        </div>
      </div>
      <h1 className="text-2xl font-bold">{photo.title}</h1>
      <p className="mb-4 text-gray-800 dark:text-foreground">{photo.description}</p>

      {photo.otherPhotos && photo.otherPhotos.length > 0 ? (
        <div className="my-5">
          <h2 className="text-xl font-semibold mb-2">Other Photos</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 my-5">
            {photo.otherPhotos.map((url, index) => (
              <div key={index} className="relative w-full h-32">
                <Image
                  src={url}
                  alt={`Other photo ${index + 1}`}
                  layout="fill"
                  objectFit="cover"
                  className="transition-opacity duration-700 ease-in-out"
                  placeholder="blur"
                  blurDataURL={url} // Use a small, low-resolution version of the image as placeholder
                />
              </div>
            ))}
          </div>
        </div>
      ) : (
        <p className="text-gray-500">No extra photos</p>
      )}
    </div>
  );
};

export default PhotoPage;

