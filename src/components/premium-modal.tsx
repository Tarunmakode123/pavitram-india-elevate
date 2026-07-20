import { useEffect } from "react";
import { Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, type LucideIcon } from "lucide-react";

export type ModalHighlight = {
  point: string;
  desc: string;
};

export type ModalData = {
  icon: LucideIcon;
  hindi: string;
  title: string;
  philosophy: string;
  highlights: ModalHighlight[];
  tag: string;
  pageUrl?: string;
  pageLabel?: string;
};

export function PremiumModal({ data, onClose }: { data: ModalData | null; onClose: () => void }) {
  useEffect(() => {
    if (!data) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [data, onClose]);

  return (
    <AnimatePresence>
      {data && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-10">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
            className="fixed inset-0 bg-navy/80 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 10 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 w-full max-w-[680px] max-h-[90vh] sm:max-h-[85vh] flex flex-col overflow-hidden rounded-[20px] sm:rounded-[24px] bg-white shadow-2xl"
          >
            {/* Close Button - Sticky/Fixed Top Right */}
            <button
              onClick={onClose}
              aria-label="Close modal"
              className="absolute right-3 top-3 z-30 grid h-9 w-9 sm:h-10 sm:w-10 place-items-center rounded-full bg-white/10 text-gold border border-white/20 backdrop-blur-md transition-transform duration-300 hover:rotate-90 hover:bg-white/20 sm:right-5 sm:top-5 cursor-pointer"
            >
              <X className="h-4 w-4 sm:h-5 sm:w-5" />
            </button>

            {/* Scrollable Content wrapper */}
            <div className="flex-1 overflow-y-auto scrollbar-thin">
              {/* Split Content */}
              <div className="flex flex-col md:flex-row min-h-full">
                {/* Left Panel */}
                <div className="flex w-full flex-col justify-between bg-navy p-6 sm:p-8 text-left md:w-[38%] shrink-0">
                  <div>
                    <div className="grid h-12 w-12 sm:h-16 sm:w-16 place-items-center rounded-2xl bg-white/10 text-gold ring-1 ring-gold/30">
                      <data.icon className="h-7 w-7 sm:h-10 sm:w-10" />
                    </div>
                    <p className="mt-4 sm:mt-6 font-deva text-lg sm:text-xl font-semibold text-gold">
                      {data.hindi}
                    </p>
                    <h3 className="mt-1 font-display text-xl sm:text-2xl font-bold text-white leading-tight">
                      {data.title}
                    </h3>
                  </div>
                  <div className="mt-6 sm:mt-8 border-t border-white/10 pt-4">
                    <p className="font-serif text-xs sm:text-sm italic leading-relaxed text-white/70">
                      "{data.philosophy}"
                    </p>
                  </div>
                </div>

                {/* Right Panel */}
                <div className="flex w-full flex-col justify-between bg-white p-5 sm:p-8 text-left md:w-[62%]">
                  <div>
                    <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-gold">
                      KEY HIGHLIGHTS
                    </span>

                    <div className="mt-4 sm:mt-5 space-y-3.5 sm:space-y-4">
                      {data.highlights.map((h, i) => (
                        <div key={i} className="flex items-start gap-2.5 sm:gap-3">
                          <span className="mt-1 text-gold text-xs shrink-0">◆</span>
                          <div>
                            <h4 className="text-sm sm:text-[15px] font-bold text-ink leading-snug">
                              {h.point}
                            </h4>
                            <p className="mt-0.5 text-xs sm:text-[13px] leading-relaxed text-mist">
                              {h.desc}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <div className="my-5 sm:my-6 h-px w-full bg-gold/20" />
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <span className="inline-block rounded-full border border-gold/60 bg-gold/5 px-3 sm:px-3.5 py-1 text-[11px] sm:text-xs font-semibold text-gold">
                        {data.tag}
                      </span>

                      {data.pageUrl && (
                        <Link
                          to={data.pageUrl}
                          onClick={onClose}
                          className="inline-flex items-center gap-1.5 rounded-full bg-navy px-4 py-2 text-xs font-bold text-white transition hover:bg-gold hover:text-navy cursor-pointer"
                        >
                          {data.pageLabel || "Explore Page"} <ArrowRight className="h-3.5 w-3.5" />
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
