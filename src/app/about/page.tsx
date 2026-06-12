import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Zoe | It's Zo Delicious",
  description: "Meet Zoe, the baker behind It's Zo Delicious. Homemade cupcakes and cakes from Sydney's Northern Beaches.",
};

export default function AboutPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-light-pink py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-3xl sm:text-4xl tracking-wider text-dark mb-4">
            ABOUT
          </h1>
          <div className="w-16 h-0.5 bg-gold mx-auto" />
        </div>
      </section>

      {/* About Content */}
      <section className="py-20 bg-cream">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-16">
            {/* Photo */}
            <div className="flex-1 w-full max-w-sm">
              <div className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-xl bg-light-pink">
                {/* Placeholder for Zoe's photo */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
                  <div className="w-24 h-24 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                    <svg className="w-12 h-12 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <p className="text-primary/60 text-sm font-medium">
                    Zoe&apos;s photo coming soon
                  </p>
                </div>
              </div>
            </div>

            {/* Story */}
            <div className="flex-1">
              <h2 className="font-script text-5xl text-primary mb-6">
                Hi, I&apos;m Zoe!
              </h2>
              <div className="space-y-4 text-dark/70 leading-relaxed">
                <p>
                  Welcome to It&apos;s Zo Delicious! I&apos;m Zoe, a home baker based on
                  Sydney&apos;s beautiful Northern Beaches with a serious passion for all
                  things sweet.
                </p>
                <p>
                  What started as a love for baking in my family kitchen has grown into a
                  small business built on one simple idea: every celebration deserves
                  something special. Whether it&apos;s a box of beautifully piped cupcakes
                  for a birthday, a tower of mini treats for a baby shower, or a show-stopping
                  custom creation, I pour my heart into every single order.
                </p>
                <p>
                  I believe that the best baked goods are made with quality ingredients,
                  attention to detail, and a whole lot of love. Every cupcake is baked fresh,
                  every design is hand-decorated, and every order is made just for you.
                </p>
                <p className="text-dark/50 italic text-sm">
                  (Zoe - update this with your own story!)
                </p>
              </div>

              <div className="mt-8">
                <Link
                  href="/enquire"
                  className="inline-block bg-primary text-white px-8 py-3 rounded-full font-medium hover:bg-primary-dark transition-colors"
                >
                  Let&apos;s Create Something Sweet
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            <div>
              <div className="w-14 h-14 bg-light-pink rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="font-serif text-sm tracking-wider text-dark mb-2">QUALITY</h3>
              <p className="text-dark/50 text-sm">Only the best ingredients in every batch.</p>
            </div>
            <div>
              <div className="w-14 h-14 bg-light-pink rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="font-serif text-sm tracking-wider text-dark mb-2">PASSION</h3>
              <p className="text-dark/50 text-sm">Every order is made with genuine care.</p>
            </div>
            <div>
              <div className="w-14 h-14 bg-light-pink rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-serif text-sm tracking-wider text-dark mb-2">JOY</h3>
              <p className="text-dark/50 text-sm">Baked to make you smile.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
