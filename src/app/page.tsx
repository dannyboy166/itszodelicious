import Image from "next/image";
import Link from "next/link";

const featuredProducts = [
  { src: "/images/featured/vanilla-cupcakes.jpg", title: "Vanilla Cupcakes" },
  { src: "/images/featured/chocolate-cupcakes.jpg", title: "Chocolate Cupcakes" },
  { src: "/images/featured/red-velvet-cupcakes.jpg", title: "Red Velvet Cupcakes" },
  { src: "/images/featured/custom-cupcakes.jpg", title: "Custom Cupcakes" },
  { src: "/images/featured/custom-cakes.jpg", title: "Cakes" },
  { src: "/images/featured/seasonal-cupcakes.jpg", title: "Seasonal" },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-light-pink">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 py-16 lg:py-12">
            {/* Left side */}
            <div className="flex-1 text-center flex flex-col items-center lg:justify-start lg:pt-0">
              <Image
                src="/images/logo/logo-square.png"
                alt="It's Zo Delicious"
                width={500}
                height={500}
                className="mb-6 w-80 sm:w-96 lg:w-[28rem] h-auto"
                priority
              />
              <p className="text-dark/70 text-lg sm:text-xl font-light mb-8 max-w-md">
                Made with Love, Baked to Make You Smile
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/pricing"
                  className="bg-primary text-white px-8 py-3 rounded-full font-medium hover:bg-primary-dark transition-colors text-center"
                >
                  View Pricing
                </Link>
                <Link
                  href="/gallery"
                  className="border-2 border-primary text-primary px-8 py-3 rounded-full font-medium hover:bg-primary hover:text-white transition-colors text-center"
                >
                  Gallery
                </Link>
                <Link
                  href="/enquire"
                  className="border-2 border-gold text-gold px-8 py-3 rounded-full font-medium hover:bg-gold hover:text-white transition-colors text-center"
                >
                  Enquire Now
                </Link>
              </div>
            </div>

            {/* Right side - Hero image */}
            <div className="w-full max-w-sm lg:max-w-lg">
              <div className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/hero/hero-cupcakes.jpg"
                  alt="Beautiful pink cupcakes by It's Zo Delicious"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 bg-cream">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-script text-4xl sm:text-5xl text-primary mb-2">Welcome to</h2>
          <h3 className="font-serif text-2xl sm:text-3xl tracking-wider text-dark mb-8">
            IT&apos;S ZO DELICIOUS
          </h3>
          <p className="text-dark/70 text-lg leading-relaxed">
            Homemade cupcakes, cakes and sweet treats made on Sydney&apos;s Northern Beaches.
            Every order is baked fresh and customised to suit your celebration.
          </p>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-2xl sm:text-3xl tracking-wider text-dark mb-4">
              OUR TREATS
            </h2>
            <div className="w-16 h-0.5 bg-gold mx-auto" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {featuredProducts.map((product) => (
              <Link
                key={product.title}
                href="/gallery"
                className="group relative aspect-square rounded-2xl overflow-hidden shadow-md"
              >
                <Image
                  src={product.src}
                  alt={product.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-white font-medium text-sm sm:text-base">{product.title}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-cream">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-2xl sm:text-3xl tracking-wider text-dark mb-4">
              WHY CHOOSE US
            </h2>
            <div className="w-16 h-0.5 bg-gold mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Freshly Baked */}
            <div className="text-center p-8 bg-white rounded-2xl shadow-sm">
              <div className="w-16 h-16 bg-light-pink rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-serif text-lg tracking-wide text-dark mb-2">Freshly Baked</h3>
              <p className="text-dark/60 text-sm">Made fresh for every order.</p>
            </div>

            {/* Custom Designs */}
            <div className="text-center p-8 bg-white rounded-2xl shadow-sm">
              <div className="w-16 h-16 bg-light-pink rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </div>
              <h3 className="font-serif text-lg tracking-wide text-dark mb-2">Custom Designs</h3>
              <p className="text-dark/60 text-sm">Colours and themes tailored to your event.</p>
            </div>

            {/* Made With Love */}
            <div className="text-center p-8 bg-white rounded-2xl shadow-sm">
              <div className="w-16 h-16 bg-light-pink rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="font-serif text-lg tracking-wide text-dark mb-2">Made With Love</h3>
              <p className="text-dark/60 text-sm">Every order is personally baked and decorated by Zoe.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Instagram Section */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-2xl sm:text-3xl tracking-wider text-dark mb-4">
            FOLLOW ALONG
          </h2>
          <div className="w-16 h-0.5 bg-gold mx-auto mb-8" />
          <p className="text-dark/60 mb-8">
            Follow us on Instagram for the latest creations, behind-the-scenes and more.
          </p>

          {/* Instagram grid preview */}
          <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-8">
            {[
              "/images/gallery/IMG_1025.jpg",
              "/images/gallery/IMG_1739.jpg",
              "/images/gallery/IMG_1266.jpg",
              "/images/gallery/IMG_1437.jpg",
              "/images/gallery/IMG_0176.jpg",
              "/images/gallery/IMG_1879.jpg",
            ].map((src, i) => (
              <div key={i} className="aspect-square rounded-xl overflow-hidden">
                <Image
                  src={src}
                  alt="Instagram post"
                  width={300}
                  height={300}
                  className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>

          <a
            href="https://instagram.com/itszodelicious"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 text-white px-8 py-3 rounded-full font-medium hover:opacity-90 transition-opacity"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
            </svg>
            Follow @itszodelicious
          </a>
        </div>
      </section>

      {/* Call To Action */}
      <section className="py-20 bg-light-pink">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-script text-4xl sm:text-5xl text-primary mb-4">
            Ready to order something delicious?
          </h2>
          <p className="text-dark/60 mb-8 text-lg">
            Get in touch to place your custom order today.
          </p>
          <Link
            href="/enquire"
            className="inline-block bg-primary text-white px-10 py-4 rounded-full font-semibold text-lg hover:bg-primary-dark transition-colors shadow-lg shadow-primary/30"
          >
            Enquire Now
          </Link>
        </div>
      </section>
    </>
  );
}
