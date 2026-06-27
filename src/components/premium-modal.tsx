import { useEffect, type ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, type LucideIcon } from "lucide-react";

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
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
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
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 w-full max-w-[680px] overflow-hidden rounded-[24px] bg-white shadow-2xl"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              aria-label="Close modal"
              className="absolute right-4 top-4 z-20 grid h-10 w-10 place-items-center rounded-full bg-black/10 text-gold backdrop-blur-md transition-transform duration-300 hover:rotate-90 hover:bg-black/20 sm:right-6 sm:top-6"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Split Content */}
            <div className="flex flex-col md:flex-row min-h-[420px]">
              {/* Left Panel */}
              <div className="flex w-full flex-col justify-between bg-navy p-8 text-left md:w-[38%] rounded-t-[24px] md:rounded-tr-none md:rounded-l-[24px]">
                <div>
                  <div className="grid h-16 w-16 place-items-center rounded-2xl bg-white/10 text-gold ring-1 ring-gold/30">
                    <data.icon className="h-10 w-10" />
                  </div>
                  <p className="mt-6 font-deva text-xl font-semibold text-gold">{data.hindi}</p>
                  <h3 className="mt-1 font-display text-2xl font-bold text-white leading-tight">
                    {data.title}
                  </h3>
                </div>
                <div className="mt-8 border-t border-white/10 pt-4">
                  <p className="font-serif text-sm italic leading-relaxed text-white/70">
                    "{data.philosophy}"
                  </p>
                </div>
              </div>

              {/* Right Panel */}
              <div className="flex w-full flex-col justify-between bg-white p-6 sm:p-8 text-left md:w-[62%] rounded-b-[24px] md:rounded-bl-none md:rounded-r-[24px]">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-gold">
                    KEY HIGHLIGHTS
                  </span>

                  <div className="mt-5 space-y-4">
                    {data.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <span className="mt-1 text-gold text-xs shrink-0">◆</span>
                        <div>
                          <h4 className="text-[15px] font-bold text-ink leading-snug">{h.point}</h4>
                          <p className="mt-0.5 text-[13px] leading-relaxed text-mist">{h.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="my-6 h-px w-full bg-gold/20" />
                  <div>
                    <span className="inline-block rounded-full border border-gold/60 bg-gold/5 px-3.5 py-1 text-xs font-semibold text-gold">
                      {data.tag}
                    </span>
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
