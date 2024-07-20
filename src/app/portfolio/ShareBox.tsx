
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { FaWhatsapp, FaInstagram, FaRegClipboard } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

interface ShareDialogProps {
  id: string;
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
}

export default function ShareDialog({ id, isOpen, onOpenChange }: ShareDialogProps) {
  const [url, setUrl] = useState<string>("");

  useEffect(() => {
    if (id) {
      setUrl(`https://localhost:3001/portfolio/${id}`);
    }
  }, [id]);

  const copyToClipboard = () => {
    if (url) {
      navigator.clipboard.writeText(url);
      alert("URL copied to clipboard!");
    }
  };

  const shareOnSocialMedia = (platform: string) => {
    const encodedUrl = encodeURIComponent(url);
    let shareUrl;

    switch (platform) {
      case "whatsapp":
        shareUrl = `https://wa.me/?text=${encodedUrl}`;
        break;
      case "instagram":
        shareUrl = `https://www.instagram.com/?url=${encodedUrl}`; // Instagram doesn't support direct URL sharing
        break;
      case "twitter":
        shareUrl = `https://twitter.com/intent/tweet?url=${encodedUrl}`;
        break;
      default:
        return;
    }

    window.open(shareUrl, "_blank");
  };

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Share This Link</DialogTitle>
          <DialogDescription>
            Share this link with others or copy it to your clipboard.
          </DialogDescription>
        </DialogHeader>
        <div className="py-4">
          <div className="flex items-center mb-4 justify-between">
            <Input
              id="share-url"
              value={url}
              readOnly
              className="flex-1"
            />
            <Button onClick={copyToClipboard} variant="outline" style={{ marginLeft: "10px" }}>
              <FaRegClipboard size={16} />
            </Button>
          </div>
          <div className="flex space-x-2">
            <Button onClick={() => shareOnSocialMedia("whatsapp")} variant="outline">
              <FaWhatsapp size={16} />
            </Button>
            <Button onClick={() => shareOnSocialMedia("instagram")} variant="outline">
              <FaInstagram size={16} />
            </Button>
            <Button onClick={() => shareOnSocialMedia("twitter")} variant="outline">
              <FaXTwitter size={16} />
            </Button>
          </div>
        </div>
        <DialogFooter>
          <Button type="button" onClick={() => onOpenChange(false)}>Close</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

