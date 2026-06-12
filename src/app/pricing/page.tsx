import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pricing | It's Zo Delicious",
  description: "Cupcake and cake pricing for It's Zo Delicious. Standard, premium, and custom options available.",
};

const cupcakePricing = [
  {
    name: "12 Standard Cupcakes",
    price: "$60",
    description: "One flavour.",
  },
  {
    name: "12 Mix & Match Cupcakes",
    price: "$90",
    description: "Choose 2 flavours: Vanilla, Chocolate or Red Velvet.",
  },
  {
    name: "12 Premium Cupcakes",
    price: "$72",
    description: "Specialty flavours.",
  },
  {
    name: "24 Mini Cupcakes",
    price: "$84",
    description: "One flavour.",
  },
  {
    name: "24 Mix & Match Mini Cupcakes",
    price: "$110",
    description: "Choose 2 flavours.",
  },
];

export default function PricingPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-light-pink py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-3xl sm:text-4xl tracking-wider text-dark mb-4">
            PRICING
          </h1>
          <div className="w-16 h-0.5 bg-gold mx-auto mb-6" />
          <p className="text-dark/60 text-lg">
            Simple, transparent pricing for all our sweet treats.
          </p>
        </div>
      </section>

      {/* Cupcakes */}
      <section className="py-20 bg-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl tracking-wider text-dark text-center mb-12">
            CUPCAKES
          </h2>

          <div className="space-y-4">
            {cupcakePricing.map((item) => (
              <div
                key={item.name}
                className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4"
              >
                <div>
                  <h3 className="font-semibold text-dark text-lg">{item.name}</h3>
                  <p className="text-dark/50 text-sm mt-1">{item.description}</p>
                </div>
                <div className="text-primary font-serif text-2xl sm:text-3xl font-bold shrink-0">
                  {item.price}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Cakes */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl tracking-wider text-dark text-center mb-12">
            CUSTOM CAKES
          </h2>

          <div className="bg-light-pink rounded-2xl p-8 sm:p-12 text-center">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
            <h3 className="font-serif text-xl tracking-wide text-dark mb-4">
              Quote on Request
            </h3>
            <p className="text-dark/60 max-w-md mx-auto mb-6">
              Get in touch to discuss your custom cake. We&apos;ll create something special for your celebration.
            </p>
            <Link
              href="/enquire"
              className="inline-block bg-primary text-white px-8 py-3 rounded-full font-medium hover:bg-primary-dark transition-colors"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Notes */}
      <section className="py-16 bg-cream">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <h3 className="font-serif text-lg tracking-wide text-dark mb-4 flex items-center gap-2">
              <svg className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
              Good to Know
            </h3>
            <ul className="space-y-3 text-dark/60 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">&#8226;</span>
                Custom colours available on all products.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">&#8226;</span>
                Premium decorations and edible images may incur additional charges.
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
