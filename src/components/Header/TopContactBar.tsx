"use client";
import { useState } from "react";
import { Phone, Mail, Check, Copy } from "lucide-react";
import { motion } from "framer-motion";
import { socialLinks } from "./navData";

export default function TopContactBar() {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const copyEmailToClipboard = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText("gus@havenmconstruction.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2200);
  };

  return (
    <div className="pointer-events-auto relative w-full bg-forest-deep text-linen px-3 sm:px-8 py-2.5 shadow-md backdrop-blur-xl border-b border-white/10 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-forest via-forest-deep to-forest opacity-40 pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-sage/30 to-transparent pointer-events-none" />

      <div className="relative mx-auto flex max-w-7xl flex-wrap items-center justify-center sm:justify-between gap-y-2.5 gap-x-3 text-xs">
        <div className="flex items-center gap-2 sm:gap-3.5 flex-wrap">
          <a
            href="tel:+12012643506"
            className="group hidden sm:inline-flex items-center justify-center sm:gap-2 h-auto w-auto rounded-full bg-white/[0.1] hover:bg-white/[0.2] shadow-xs border border-white/20 sm:pl-1.5 sm:pr-3 sm:py-1 text-xs font-sans text-linen transition-all duration-300 hover:border-forest active:scale-95 hover:shadow-[0_0_16px_rgba(42,75,60,0.5)]"
            title="Call Haven M Construction: (201) 264-3506"
          >
            <div className="flex sm:h-6 sm:w-6 items-center justify-center rounded-full text-white sm:bg-terracotta sm:text-white sm:shadow-xs group-hover:bg-forest group-hover:text-white transition-all duration-300 shrink-0 animate-[pulse_2s_ease-in-out_infinite] sm:animate-none">
              <Phone className="h-5 w-5 sm:h-3.5 sm:w-3.5 group-hover:rotate-12 transition-transform shrink-0" />
            </div>
            <span className="hidden sm:inline font-semibold tracking-tight text-linen group-hover:text-white">
              (201) 264-3506
            </span>
          </a>

          <div className="relative hidden sm:inline-flex items-center">
            <a
              href="mailto:gus@havenmconstruction.com"
              className="group inline-flex items-center gap-2 rounded-full bg-white/[0.1] hover:bg-white/[0.2] border border-white/20 pl-1.5 pr-1.5 py-1 text-xs font-sans text-linen transition-all duration-300 hover:border-forest active:scale-95 shadow-xs hover:shadow-[0_0_16px_rgba(42,75,60,0.5)]"
              title="Email Haven M Construction: gus@havenmconstruction.com"
            >
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-terracotta text-white shadow-xs group-hover:bg-forest group-hover:text-white transition-all duration-300 shrink-0">
                <Mail className="h-3.5 w-3.5 group-hover:-translate-y-0.5 transition-transform shrink-0" />
              </div>
              <span className="font-semibold tracking-tight text-linen group-hover:text-white">
                gus@havenmconstruction.com
              </span>
              <button
                type="button"
                onClick={copyEmailToClipboard}
                className="ml-1 px-1.5 py-0.5 rounded-full text-white/70 hover:text-white hover:bg-white/20 transition-colors flex items-center gap-1"
                title="Copy email to clipboard"
              >
                {copiedEmail ? (
                  <span className="inline-flex items-center gap-1 text-[10px] text-sage font-medium">
                    <Check className="h-3 w-3 text-sage" />
                    <span>Copied</span>
                  </span>
                ) : (
                  <Copy className="h-3.5 w-3.5" />
                )}
              </button>
            </a>
          </div>
        </div>

        <div className="flex items-center gap-3 sm:gap-3">
          {socialLinks.map(({ href, label, icon, bgClass, whileHover }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              className={`flex h-10 w-10 sm:h-8 sm:w-8 items-center justify-center rounded-full hover:bg-white/10 transition-colors [&>svg]:scale-[1.5] sm:[&>svg]:scale-[1.25] ${bgClass}`}
              whileHover={whileHover}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 600, damping: 25 }}
            >
              {icon}
            </motion.a>
          ))}
        </div>
      </div>
    </div>
  );
}
