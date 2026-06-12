"use client";

import { useState } from "react";
import Image from "next/image";

type Category = "All" | "Cupcakes" | "Cakes" | "Birthdays" | "Baby Showers" | "Anniversaries" | "Custom Orders";

interface GalleryImage {
  src: string;
  alt: string;
  categories: Category[];
}

const galleryImages: GalleryImage[] = [
  { src: "/images/gallery/IMG_1025.jpg", alt: "White rose cupcakes with gold pearls", categories: ["All", "Cupcakes", "Anniversaries"] },
  { src: "/images/gallery/IMG_1029.jpg", alt: "Gold pearl cupcakes close-up", categories: ["All", "Cupcakes", "Anniversaries"] },
  { src: "/images/gallery/IMG_1021.jpg", alt: "Elegant white and gold cupcakes", categories: ["All", "Cupcakes", "Custom Orders"] },
  { src: "/images/gallery/IMG_1739.jpg", alt: "Pink and cream cupcakes with gold details", categories: ["All", "Cupcakes", "Birthdays"] },
  { src: "/images/gallery/IMG_1741.jpg", alt: "Pink cupcakes variety", categories: ["All", "Cupcakes", "Birthdays"] },
  { src: "/images/gallery/IMG_1748.jpg", alt: "Pink frosted cupcakes close-up", categories: ["All", "Cupcakes", "Baby Showers"] },
  { src: "/images/gallery/IMG_1752.jpg", alt: "Pink assorted cupcakes", categories: ["All", "Cupcakes", "Baby Showers"] },
  { src: "/images/gallery/IMG_0176.jpg", alt: "Yellow and pink cupcakes with bees", categories: ["All", "Cupcakes", "Birthdays", "Baby Showers"] },
  { src: "/images/gallery/IMG_1266.jpg", alt: "Blue teal cupcakes", categories: ["All", "Cupcakes", "Custom Orders", "Baby Showers"] },
  { src: "/images/gallery/IMG_1437.jpg", alt: "Lemon and chocolate cupcakes", categories: ["All", "Cupcakes"] },
  { src: "/images/gallery/IMG_1879.jpg", alt: "Red and white cupcakes with gold", categories: ["All", "Cupcakes", "Custom Orders"] },
  { src: "/images/gallery/IMG_1882.jpg", alt: "Red and white cupcakes close-up", categories: ["All", "Cupcakes", "Custom Orders"] },
  { src: "/images/gallery/IMG_1887.jpg", alt: "Red and white cupcakes in box", categories: ["All", "Cupcakes", "Birthdays"] },
  { src: "/images/gallery/IMG_1890.jpg", alt: "Navy and white cupcakes", categories: ["All", "Cupcakes", "Custom Orders"] },
  { src: "/images/gallery/IMG_1893.jpg", alt: "Navy blue cupcakes close-up", categories: ["All", "Cupcakes", "Custom Orders"] },
  { src: "/images/gallery/IMG_1894.jpg", alt: "Navy and white cupcakes with gold", categories: ["All", "Cupcakes", "Anniversaries"] },
  { src: "/images/gallery/IMG_1895.jpg", alt: "Navy cupcakes box", categories: ["All", "Cupcakes", "Custom Orders"] },
  { src: "/images/gallery/IMG_1896.jpg", alt: "Orange and yellow cupcakes", categories: ["All", "Cupcakes", "Birthdays"] },
  { src: "/images/gallery/IMG_1897.jpg", alt: "Peach and yellow cupcakes close-up", categories: ["All", "Cupcakes"] },
  { src: "/images/gallery/IMG_1898.jpg", alt: "Peach and yellow cupcakes in box", categories: ["All", "Cupcakes"] },
  { src: "/images/gallery/IMG_1899.jpg", alt: "Orange and cream cupcakes", categories: ["All", "Cupcakes"] },
  { src: "/images/gallery/IMG_1901.jpg", alt: "Yellow and peach cupcakes", categories: ["All", "Cupcakes"] },
  { src: "/images/gallery/IMG_1903.jpg", alt: "Gold detailed cupcakes", categories: ["All", "Cupcakes"] },
  { src: "/images/gallery/IMG_0975.jpg", alt: "White textured cupcakes", categories: ["All", "Cupcakes"] },
  { src: "/images/gallery/IMG_1160.jpg", alt: "White cupcakes in box", categories: ["All", "Cupcakes"] },
  { src: "/images/gallery/att.56sD3SLkbCm2L7TEOPvXOZUuxnf_yY0tHtyJ4PXmJhQ.jpg", alt: "Red and blue cupcakes", categories: ["All", "Cupcakes", "Custom Orders"] },
];

const categories: Category[] = [
  "All",
  "Cupcakes",
  "Cakes",
  "Birthdays",
  "Baby Showers",
  "Anniversaries",
  "Custom Orders",
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [lightboxImage, setLightboxImage] = useState<GalleryImage | null>(null);

  const filteredImages = galleryImages.filter((img) =>
    img.categories.includes(activeCategory)
  );

  return (
    <>
      {/* Page Header */}
      <section className="bg-light-pink py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-3xl sm:text-4xl tracking-wider text-dark mb-4">
            GALLERY
          </h1>
          <div className="w-16 h-0.5 bg-gold mx-auto mb-6" />
          <p className="text-dark/60 text-lg">
            Browse our latest creations and find inspiration for your next order.
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-12 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === category
                    ? "bg-primary text-white"
                    : "bg-white text-dark/60 hover:text-primary hover:bg-light-pink"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Image Grid */}
          {filteredImages.length > 0 ? (
            <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
              {filteredImages.map((image) => (
                <button
                  key={image.src}
                  onClick={() => setLightboxImage(image)}
                  className="gallery-item block w-full rounded-xl overflow-hidden cursor-pointer break-inside-avoid"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={600}
                    height={600}
                    className="w-full h-auto"
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                </button>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-dark/40 text-lg">
                No images in this category yet. Check back soon!
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {lightboxImage && (
        <div
          className="lightbox-overlay fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setLightboxImage(null)}
        >
          <button
            onClick={() => setLightboxImage(null)}
            className="absolute top-4 right-4 text-white/80 hover:text-white z-10"
            aria-label="Close lightbox"
          >
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div className="max-w-4xl max-h-[90vh] relative" onClick={(e) => e.stopPropagation()}>
            <Image
              src={lightboxImage.src}
              alt={lightboxImage.alt}
              width={1200}
              height={1200}
              className="max-h-[90vh] w-auto object-contain rounded-lg"
            />
          </div>
        </div>
      )}
    </>
  );
}
