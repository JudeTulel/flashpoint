"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";

export default function HomePage() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.from(".hero-title", {
        y: 80,
        opacity: 0,
        duration: 1,
        ease: "power4.out",
      })
        .from(
          ".hero-subtitle",
          {
            y: 40,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.5"
        )
        .from(
          ".hero-buttons",
          {
            y: 30,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.4"
        );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <main
      ref={heroRef}
      className="relative h-screen w-full overflow-hidden"
    >
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/assets/video.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/65 backdrop-blur-[2px]" />

      {/* Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />

      {/* Hero */}
      <section className="relative z-10 flex h-full items-center">
        <div className="mx-auto w-full max-w-7xl px-8">
          <div className="max-w-3xl">
            <span className="mb-5 inline-flex rounded-full border border-red-500/40 bg-red-500/10 px-4 py-2 text-sm font-semibold uppercase tracking-widest text-red-400">
              Solana Prediction Markets
            </span>

            <h1 className="hero-title text-6xl font-black leading-tight text-white md:text-8xl">
              Flashpoint
            </h1>

            <p className="hero-subtitle mt-8 text-xl leading-9 text-gray-200 md:text-2xl">
              Trade the biggest football moments in real time.
              <br />
              Predict goals, corners, cards and match outcomes using
              decentralized micro-markets powered by Solana.
            </p>

            <div className="hero-buttons mt-12 flex flex-wrap gap-5">
              <Link
                href="/sign-in"
                className="rounded-xl bg-red-600 px-8 py-4 text-lg font-semibold text-white transition hover:bg-red-500"
              >
                Launch App
              </Link>

              <Link
                href="#about"
                className="rounded-xl border border-white/30 bg-white/10 px-8 py-4 text-lg font-semibold text-white backdrop-blur transition hover:bg-white/20"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 z-20 -translate-x-1/2">
        <div className="flex flex-col items-center gap-3">
          <span className="text-xs uppercase tracking-[0.3em] text-white/80">
            Scroll
          </span>

          <div className="flex h-12 w-7 justify-center rounded-full border border-white/40">
            <div className="mt-2 h-3 w-1 rounded-full bg-white animate-bounce" />
          </div>
        </div>
      </div>
    </main>
  );
}