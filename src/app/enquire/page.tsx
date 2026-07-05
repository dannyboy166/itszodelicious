"use client";

import { useState } from "react";
import Link from "next/link";

export default function EnquirePage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      {/* Page Header */}
      <section className="bg-light-pink py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-3xl sm:text-4xl tracking-wider text-dark mb-4">
            ENQUIRE
          </h1>
          <div className="w-16 h-0.5 bg-gold mx-auto mb-6" />
          <p className="text-dark/60 text-lg">
            Have a question? Fill in the form below and I&apos;ll get back to you as soon as possible.
          </p>
          <p className="text-dark/40 text-sm mt-2">
            Ready to place an order?{" "}
            <Link href="/order" className="text-primary hover:text-primary-dark transition-colors underline">
              Use our order form instead
            </Link>
          </p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-cream">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          {submitted ? (
            <div className="bg-white rounded-3xl p-12 shadow-sm text-center">
              <div className="w-20 h-20 bg-light-pink rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="font-serif text-2xl tracking-wider text-dark mb-4">
                THANK YOU!
              </h2>
              <p className="text-dark/60 mb-6">
                Your enquiry has been sent. I&apos;ll get back to you as soon as possible!
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="text-primary font-medium hover:text-primary-dark transition-colors"
              >
                Send another enquiry
              </button>
            </div>
          ) : (
            <form
              action="https://formsubmit.co/hello@itzdelicious.com"
              method="POST"
              onSubmit={() => setSubmitted(true)}
              className="bg-white rounded-3xl p-8 sm:p-10 shadow-sm space-y-6"
            >
              {/* FormSubmit config */}
              <input type="hidden" name="_subject" value="New Enquiry - It's Zo Delicious" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />

              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-dark mb-2">
                  Name <span className="text-primary">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-colors text-dark"
                  placeholder="Your name"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-dark mb-2">
                  Email <span className="text-primary">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-colors text-dark"
                  placeholder="your@email.com"
                />
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-dark mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-colors text-dark"
                  placeholder="0400 000 000"
                />
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-dark mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-colors text-dark"
                  placeholder="e.g. Product question, Custom request, Availability"
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-dark mb-2">
                  Message <span className="text-primary">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-colors text-dark resize-none"
                  placeholder="Your question or message..."
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full bg-primary text-white py-4 rounded-full font-semibold text-lg hover:bg-primary-dark transition-colors shadow-lg shadow-primary/20"
              >
                Send Enquiry
              </button>
            </form>
          )}

          {/* Contact Info */}
          <div className="mt-12 text-center">
            <p className="text-dark/50 text-sm mb-2">Or email directly:</p>
            <a
              href="mailto:hello@itzdelicious.com"
              className="text-primary font-medium hover:text-primary-dark transition-colors"
            >
              hello@itzdelicious.com
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
