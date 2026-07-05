"use client";

import { useState } from "react";
import Link from "next/link";

export default function OrderPage() {
  const [submitted, setSubmitted] = useState(false);
  const [productType, setProductType] = useState("");

  return (
    <>
      {/* Page Header */}
      <section className="bg-light-pink py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-3xl sm:text-4xl tracking-wider text-dark mb-4">
            ORDER NOW
          </h1>
          <div className="w-16 h-0.5 bg-gold mx-auto mb-6" />
          <p className="text-dark/60 text-lg">
            Fill in the details below and I&apos;ll get back to you with a quote.
          </p>
          <p className="text-dark/40 text-sm mt-2">
            Just have a question?{" "}
            <Link href="/enquire" className="text-primary hover:text-primary-dark transition-colors underline">
              Send an enquiry instead
            </Link>
          </p>
        </div>
      </section>

      {/* Order Form */}
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
                Your order has been submitted. I&apos;ll get back to you as soon as possible with a quote!
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setProductType("");
                }}
                className="text-primary font-medium hover:text-primary-dark transition-colors"
              >
                Submit another order
              </button>
            </div>
          ) : (
            <form
              action="https://formsubmit.co/hello@itzdelicious.com"
              method="POST"
              encType="multipart/form-data"
              onSubmit={() => setSubmitted(true)}
              className="bg-white rounded-3xl p-8 sm:p-10 shadow-sm space-y-8"
            >
              {/* FormSubmit config */}
              <input type="hidden" name="_subject" value="New Order - It's Zo Delicious" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />

              {/* ── Customer Details ── */}
              <div>
                <h2 className="font-serif text-lg tracking-wider text-dark border-b border-gray-100 pb-2 mb-6">
                  CUSTOMER DETAILS
                </h2>
                <div className="space-y-6">
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
                </div>
              </div>

              {/* ── Order Details ── */}
              <div>
                <h2 className="font-serif text-lg tracking-wider text-dark border-b border-gray-100 pb-2 mb-6">
                  ORDER DETAILS
                </h2>
                <div className="space-y-6">
                  {/* Product Type */}
                  <div>
                    <label htmlFor="product_type" className="block text-sm font-medium text-dark mb-2">
                      Product Type <span className="text-primary">*</span>
                    </label>
                    <select
                      id="product_type"
                      name="product_type"
                      required
                      value={productType}
                      onChange={(e) => setProductType(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-colors text-dark bg-white"
                    >
                      <option value="">Select a product</option>
                      <option value="Cupcakes">Cupcakes</option>
                      <option value="Mini Cupcakes">Mini Cupcakes</option>
                      <option value="Cookies">Cookies</option>
                      <option value="Dessert Boxes">Dessert Boxes</option>
                      <option value="Cakes">Cakes</option>
                    </select>
                  </div>

                  {/* Quantity */}
                  <div>
                    <label htmlFor="quantity" className="block text-sm font-medium text-dark mb-2">
                      Quantity
                    </label>
                    <input
                      type="number"
                      id="quantity"
                      name="quantity"
                      min="1"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-colors text-dark"
                      placeholder="e.g. 12"
                    />
                  </div>

                  {/* Flavour(s) */}
                  <div>
                    <label htmlFor="flavours" className="block text-sm font-medium text-dark mb-2">
                      Flavour(s)
                    </label>
                    <input
                      type="text"
                      id="flavours"
                      name="flavours"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-colors text-dark"
                      placeholder="e.g. Vanilla, Chocolate, Red Velvet"
                    />
                  </div>

                  {/* Event Date and Pickup/Delivery Date */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="event_date" className="block text-sm font-medium text-dark mb-2">
                        Event Date
                      </label>
                      <input
                        type="date"
                        id="event_date"
                        name="event_date"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-colors text-dark"
                      />
                    </div>
                    <div>
                      <label htmlFor="pickup_delivery_date" className="block text-sm font-medium text-dark mb-2">
                        Preferred Pickup/Delivery Date
                      </label>
                      <input
                        type="date"
                        id="pickup_delivery_date"
                        name="pickup_delivery_date"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-colors text-dark"
                      />
                    </div>
                  </div>

                  {/* Pickup or Delivery */}
                  <div>
                    <span className="block text-sm font-medium text-dark mb-3">
                      Pickup or Delivery
                    </span>
                    <div className="flex gap-6">
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="pickup_or_delivery"
                          value="Pickup"
                          className="w-4 h-4 text-primary border-gray-300 focus:ring-primary"
                        />
                        <span className="text-dark text-sm">Pickup</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="pickup_or_delivery"
                          value="Delivery"
                          className="w-4 h-4 text-primary border-gray-300 focus:ring-primary"
                        />
                        <span className="text-dark text-sm">Delivery</span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              {/* ── Conditional: Cupcake Details ── */}
              {(productType === "Cupcakes" || productType === "Mini Cupcakes") && (
                <div>
                  <h2 className="font-serif text-lg tracking-wider text-dark border-b border-gray-100 pb-2 mb-6">
                    CUPCAKE DETAILS
                  </h2>
                  <div className="space-y-6">
                    <div>
                      <label htmlFor="buttercream_colour" className="block text-sm font-medium text-dark mb-2">
                        Buttercream Colour
                      </label>
                      <input
                        type="text"
                        id="buttercream_colour"
                        name="buttercream_colour"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-colors text-dark"
                        placeholder="e.g. Pink, Blue, White"
                      />
                    </div>
                    <div>
                      <label htmlFor="theme_requests" className="block text-sm font-medium text-dark mb-2">
                        Theme / Special Requests
                      </label>
                      <textarea
                        id="theme_requests"
                        name="theme_special_requests"
                        rows={3}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-colors text-dark resize-none"
                        placeholder="e.g. Floral theme, baby shower, specific decorations..."
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* ── Conditional: Cake Details ── */}
              {productType === "Cakes" && (
                <div>
                  <h2 className="font-serif text-lg tracking-wider text-dark border-b border-gray-100 pb-2 mb-6">
                    CAKE DETAILS
                  </h2>
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="cake_size" className="block text-sm font-medium text-dark mb-2">
                          Cake Size
                        </label>
                        <input
                          type="text"
                          id="cake_size"
                          name="cake_size"
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-colors text-dark"
                          placeholder="e.g. 6 inch, 8 inch"
                        />
                      </div>
                      <div>
                        <label htmlFor="number_of_tiers" className="block text-sm font-medium text-dark mb-2">
                          Number of Tiers
                        </label>
                        <input
                          type="number"
                          id="number_of_tiers"
                          name="number_of_tiers"
                          min="1"
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-colors text-dark"
                          placeholder="e.g. 1, 2, 3"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="cake_flavour" className="block text-sm font-medium text-dark mb-2">
                          Flavour
                        </label>
                        <input
                          type="text"
                          id="cake_flavour"
                          name="cake_flavour"
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-colors text-dark"
                          placeholder="e.g. Vanilla, Chocolate"
                        />
                      </div>
                      <div>
                        <label htmlFor="filling" className="block text-sm font-medium text-dark mb-2">
                          Filling
                        </label>
                        <input
                          type="text"
                          id="filling"
                          name="filling"
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-colors text-dark"
                          placeholder="e.g. Buttercream, Ganache, Jam"
                        />
                      </div>
                    </div>

                    {/* Inspiration Photo */}
                    <div>
                      <label htmlFor="attachment" className="block text-sm font-medium text-dark mb-2">
                        Inspiration Photo
                      </label>
                      <div className="relative">
                        <input
                          type="file"
                          id="attachment"
                          name="attachment"
                          accept="image/*"
                          className="w-full px-4 py-3 rounded-xl border border-dashed border-gray-300 focus:border-primary outline-none transition-colors text-dark/60 text-sm file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:bg-light-pink file:text-primary file:font-medium file:text-sm file:cursor-pointer hover:file:bg-primary hover:file:text-white"
                        />
                      </div>
                      <p className="text-dark/40 text-xs mt-1">
                        Upload a photo for design inspiration (optional)
                      </p>
                    </div>

                    {/* Design Description */}
                    <div>
                      <label htmlFor="design_description" className="block text-sm font-medium text-dark mb-2">
                        Design Description
                      </label>
                      <textarea
                        id="design_description"
                        name="design_description"
                        rows={3}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-colors text-dark resize-none"
                        placeholder="Describe your dream cake design..."
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* ── Conditional: Dessert Box Details ── */}
              {productType === "Dessert Boxes" && (
                <div>
                  <h2 className="font-serif text-lg tracking-wider text-dark border-b border-gray-100 pb-2 mb-6">
                    DESSERT BOX DETAILS
                  </h2>
                  <div className="space-y-6">
                    <div>
                      <label htmlFor="cookie_flavours" className="block text-sm font-medium text-dark mb-2">
                        Cookie Flavours
                      </label>
                      <input
                        type="text"
                        id="cookie_flavours"
                        name="cookie_flavours"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-colors text-dark"
                        placeholder="e.g. Choc Chip, Double Choc, Snickerdoodle"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* ── Additional Notes ── */}
              <div>
                <label htmlFor="additional_notes" className="block text-sm font-medium text-dark mb-2">
                  Additional Notes
                </label>
                <textarea
                  id="additional_notes"
                  name="additional_notes"
                  rows={3}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-colors text-dark resize-none"
                  placeholder="Any other details or special requests..."
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full bg-primary text-white py-4 rounded-full font-semibold text-lg hover:bg-primary-dark transition-colors shadow-lg shadow-primary/20"
              >
                Submit Order
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
