import Link from "next/link";
import { ArrowUpRight, Home } from "lucide-react";
import Footer from "@/components/Home/Footer";
import Navbar from "@/components/Home/Navbar";

export default function NotFound() {
  return (
    <main className="relative min-h-[75vh] overflow-hidden bg-white text-[#0B2A52]">
        <Navbar />
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-20 top-10 h-[420px] w-[420px] rounded-full bg-[#EAF3FB] blur-3xl" />
        <div className="absolute -left-24 bottom-0 h-[320px] w-[320px] rounded-full bg-[#F2F7FB] blur-3xl" />
      </div>

      <section className="relative mx-auto flex min-h-[75vh] max-w-[1500px] items-center px-5 py-20 sm:px-8 md:px-10 lg:px-14 xl:px-20">
        <div className="grid w-full items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="max-w-2xl">
            <p className="mb-5 text-[11px] font-medium uppercase tracking-[0.22em] text-[#6285AD]">
              404 · Page Not Found
            </p>

            <h1 className="font-serif text-[2.6rem] leading-[0.98] tracking-[-0.04em] sm:text-[2.95rem] lg:text-[3.1rem] xl:text-[3.35rem]">
              Looks like this page moved out of reach.
            </h1>

            <p className="mt-6 max-w-xl text-[15px] leading-7 text-[#48637F]">
              The page you’re looking for may have been moved, renamed or removed.
              You can head back home or continue exploring Sharp Rays.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/"
                title="Back to Sharp Rays Home"
                className="group inline-flex min-h-[48px] items-center gap-2 rounded-[15px] bg-[#0B2A52] px-5 text-[12px] font-medium text-white transition hover:bg-[#123B69]"
              >
                <Home size={15} />
                Back to Home
              </Link>

              <Link
                href="/services"
                title="Explore Sharp Rays Services"
                className="group inline-flex min-h-[48px] items-center gap-2 rounded-[15px] border border-[#0B2A52]/15 bg-white px-5 text-[12px] font-medium text-[#0B2A52] transition hover:border-[#0B2A52]/25 hover:bg-[#F7FAFD]"
              >
                Explore Services
                <ArrowUpRight
                  size={14}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-[12px] text-[#6285AD]">
              <Link href="/work" title="View Sharp Rays Work" className="transition hover:text-[#0B2A52]">
                Work
              </Link>

              <Link href="/blog" title="Read Sharp Rays Insights" className="transition hover:text-[#0B2A52]">
                Blog
              </Link>

              <Link href="/contact" title="Contact Sharp Rays" className="transition hover:text-[#0B2A52]">
                Contact
              </Link>
            </div>
          </div>

          <div className="relative flex items-center justify-center lg:justify-end">
            <div className="relative flex aspect-square w-full max-w-[460px] items-center justify-center">
              <div className="absolute inset-0 rounded-full border border-[#0B2A52]/8" />
              <div className="absolute inset-[12%] rounded-full border border-[#0B2A52]/8" />
              <div className="absolute inset-[24%] rounded-full bg-[#F6F9FC]" />

              <div className="relative text-center">
                <div className="text-[clamp(7rem,18vw,13rem)] font-semibold leading-none tracking-[-0.08em] text-[#0B2A52]">
                  404
                </div>

                <p className="mt-2 text-[11px] uppercase tracking-[0.2em] text-[#6285AD]">
                  Lost in the digital space
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}