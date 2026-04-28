"use client";

import React from "react";
import Link from "next/link";
import {
  ShoppingCart,
  Heart,
  Star,
  Truck,
  Shield,
  Headphones,
  ArrowRight,
  Sparkles,
} from "lucide-react";

export default function Home() {
  const categories = [
    {
      name: "Electronics",
      image:
        "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=400&h=300&fit=crop",
    },
    {
      name: "Fashion",
      image:
        "https://images.unsplash.com/photo-1445205170230-053b83016050?w=400&h=300&fit=crop",
    },
    {
      name: "Home & Living",
      image:
        "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=400&h=300&fit=crop",
    },
    {
      name: "Sports",
      image:
        "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=400&h=300&fit=crop",
    },
  ];

  const featuredProducts = [
    {
      id: 1,
      name: "Wireless Headphones",
      price: 129.99,
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop",
      rating: 4.5,
    },
    {
      id: 2,
      name: "Smart Watch",
      price: 299.99,
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop",
      rating: 4.8,
    },
    {
      id: 3,
      name: "Premium Sneakers",
      price: 159.99,
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop",
      rating: 4.6,
    },
    {
      id: 4,
      name: "Camera Lens",
      price: 449.99,
      image:
        "https://images.unsplash.com/photo-1606925797300-0b35e9d1794e?w=400&h=400&fit=crop",
      rating: 4.9,
    },
    {
      id: 5,
      name: "Backpack",
      price: 79.99,
      image:
        "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop",
      rating: 4.4,
    },
    {
      id: 6,
      name: "Sunglasses",
      price: 189.99,
      image:
        "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=400&fit=crop",
      rating: 4.7,
    },
  ];

  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-slate-900 dark:via-slate-900 dark:to-slate-800" />
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold tracking-wide uppercase mb-6">
                <Sparkles className="w-3.5 h-3.5" />
                Summer Sale Live
              </span>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-slate-900 dark:text-white leading-[1.05]">
                Curated finds.{" "}
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Up to 50% off.
                </span>
              </h1>
              <p className="text-lg text-slate-600 dark:text-slate-300 mt-6 max-w-lg">
                Discover thoughtfully selected products with free shipping over
                $50 and a 30-day return guarantee.
              </p>
              <div className="flex flex-wrap gap-3 mt-8">
                <Link
                  href="/products"
                  className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-xl font-semibold hover:bg-primary-dark hover:shadow-xl hover:shadow-primary/25 transition"
                >
                  Shop Now <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 bg-white text-slate-900 px-6 py-3 rounded-xl font-semibold border border-slate-200 hover:border-slate-300 hover:bg-slate-50 dark:bg-slate-800 dark:text-white dark:border-slate-700 dark:hover:bg-slate-700 transition"
                >
                  Learn More
                </Link>
              </div>
              <div className="flex items-center gap-6 mt-10">
                <div>
                  <p className="text-2xl font-bold text-slate-900 dark:text-white">
                    10k+
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Happy buyers
                  </p>
                </div>
                <div className="h-10 w-px bg-slate-200 dark:bg-slate-700" />
                <div>
                  <p className="text-2xl font-bold text-slate-900 dark:text-white">
                    4.9
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Avg rating
                  </p>
                </div>
                <div className="h-10 w-px bg-slate-200 dark:bg-slate-700" />
                <div>
                  <p className="text-2xl font-bold text-slate-900 dark:text-white">
                    24/7
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Support
                  </p>
                </div>
              </div>
            </div>
            <div className="relative hidden md:block">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-secondary/30 rounded-3xl rotate-3" />
              <img
                src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=600&h=600&fit=crop"
                alt="Shopping"
                className="relative rounded-3xl shadow-2xl object-cover w-full h-[480px]"
              />
              <div className="absolute -bottom-6 -left-6 bg-white dark:bg-slate-800 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700 p-4 flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
                  <Truck className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Free shipping
                  </p>
                  <p className="text-sm font-semibold text-slate-900 dark:text-white">
                    On orders $50+
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-white dark:bg-slate-900 border-y border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Truck,
                title: "Free Shipping",
                desc: "On orders over $50, no codes needed",
              },
              {
                icon: Shield,
                title: "Secure Payment",
                desc: "256-bit SSL encryption on every checkout",
              },
              {
                icon: Headphones,
                title: "24/7 Support",
                desc: "Dedicated humans, not bots",
              },
            ].map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="flex items-start gap-4 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-primary/30 hover:shadow-lg transition"
              >
                <div className="bg-primary/10 p-3 rounded-xl shrink-0">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-slate-900 dark:text-white mb-1">
                    {title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm">
                    {desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="text-xs font-semibold tracking-widest uppercase text-primary mb-2">
                Browse
              </p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
                Shop by category
              </h2>
            </div>
            <Link
              href="/products"
              className="hidden sm:inline-flex items-center gap-1 text-sm font-medium text-primary hover:text-primary-dark"
            >
              View all <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {categories.map((category, index) => (
              <Link
                href="/products"
                key={index}
                className="relative overflow-hidden rounded-2xl group cursor-pointer aspect-[4/5] block"
              >
                <img
                  src={category.image}
                  alt={category.name}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 className="text-white text-lg font-semibold">
                    {category.name}
                  </h3>
                  <p className="text-white/80 text-xs mt-1 inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                    Explore <ArrowRight className="w-3 h-3" />
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-10">
            <div>
              <p className="text-xs font-semibold tracking-widest uppercase text-primary mb-2">
                Trending
              </p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
                Featured products
              </h2>
            </div>
            <Link
              href="/products"
              className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:text-primary-dark"
            >
              View all <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="relative bg-slate-50 dark:bg-slate-800 aspect-square overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <button className="absolute top-4 right-4 bg-white/90 backdrop-blur p-2.5 rounded-full shadow-md hover:bg-white hover:scale-110 transition">
                    <Heart className="h-4 w-4 text-slate-700" />
                  </button>
                </div>
                <div className="p-5">
                  <h3 className="font-semibold text-base text-slate-900 dark:text-white mb-2 truncate">
                    {product.name}
                  </h3>
                  <div className="flex items-center mb-3">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-3.5 w-3.5 ${
                            i < Math.floor(product.rating)
                              ? "text-amber-400 fill-current"
                              : "text-slate-300"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="ml-2 text-xs text-slate-500 dark:text-slate-400">
                      ({product.rating})
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xl font-bold text-slate-900 dark:text-white">
                      ${product.price}
                    </span>
                    <button className="inline-flex items-center gap-1.5 bg-slate-900 text-white text-sm font-medium px-4 py-2 rounded-xl hover:bg-primary transition">
                      <ShoppingCart className="w-4 h-4" /> Add
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-primary-dark to-slate-900 p-10 md:p-16">
            <div className="absolute -top-20 -right-20 w-80 h-80 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-secondary/20 rounded-full blur-3xl" />
            <div className="relative text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
                Get exclusive deals first
              </h2>
              <p className="text-indigo-100 mb-8 max-w-xl mx-auto">
                Join 10,000+ shoppers getting early access to drops and members-only
                discounts.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="you@email.com"
                  className="flex-1 px-4 py-3 rounded-xl bg-white/95 text-slate-900 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-white/60"
                />
                <button className="bg-white text-primary px-6 py-3 rounded-xl font-semibold hover:bg-slate-100 transition shadow-lg">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-300 py-16 mt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-white text-xl font-bold mb-4 tracking-tight">
                ShopHub
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Your one-stop shop for quality products at honest prices.
              </p>
            </div>
            {[
              {
                title: "Shop",
                links: ["Electronics", "Fashion", "Home & Living", "Sports"],
              },
              {
                title: "Customer Service",
                links: ["Contact Us", "Shipping Info", "Returns", "FAQ"],
              },
              {
                title: "Follow Us",
                links: ["Facebook", "Instagram", "Twitter", "Pinterest"],
              },
            ].map((col) => (
              <div key={col.title}>
                <h4 className="text-white font-semibold mb-4 text-sm">
                  {col.title}
                </h4>
                <ul className="space-y-3 text-sm">
                  {col.links.map((l) => (
                    <li key={l}>
                      <a
                        href="#"
                        className="text-slate-400 hover:text-white transition"
                      >
                        {l}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-slate-500">
            <p>&copy; 2026 ShopHub. All rights reserved.</p>
            <p>Crafted with care.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
