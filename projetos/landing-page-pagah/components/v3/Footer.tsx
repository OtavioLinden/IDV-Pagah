"use client";

import { motion } from "motion/react";
import { footer } from "@/content/landing";

export default function V3Footer() {
  return (
    <footer
      id="contato"
      className="relative pt-16 pb-10 border-t border-[var(--border-subtle)]"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid lg:grid-cols-3 gap-4 mb-10">
          {/* Brand tile */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="v3-tile p-6 lg:col-span-1"
          >
            <div className="flex items-center gap-2.5 mb-4">
              <span
                className="size-9 grid place-items-center rounded-[10px]"
                style={{
                  background:
                    "linear-gradient(135deg, #F1E52F 0%, #C9BF28 100%)",
                  color: "#0F0F10",
                  boxShadow:
                    "0 0 0 1px rgba(241,229,47,0.25), 0 6px 20px -6px rgba(241,229,47,0.5)",
                }}
                aria-hidden="true"
              >
                <svg viewBox="0 0 24 24" fill="none" className="size-4">
                  <path
                    d="M5 4h9a5 5 0 0 1 0 10H5V4z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M5 14v6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
              <span className="text-[18px] font-semibold tracking-[-0.02em] lowercase">
                pagah
              </span>
            </div>
            <p className="text-[13.5px] leading-relaxed text-[var(--text-secondary)]">
              {footer.tagline}
            </p>
          </motion.div>

          {/* Links tile */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.05 }}
            className="v3-tile p-6"
          >
            <div className="v3-mono text-[10px] tracking-[0.2em] uppercase text-[var(--text-tertiary)] mb-4">
              Navegação
            </div>
            <ul className="grid grid-cols-2 gap-y-2 gap-x-4">
              {footer.links.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-[13px] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact tile */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.1 }}
            className="v3-tile p-6 grid gap-3"
          >
            <div className="v3-mono text-[10px] tracking-[0.2em] uppercase text-[var(--text-tertiary)] mb-1">
              Contato
            </div>
            <a
              href={`mailto:${footer.contact.email}`}
              className="text-[14px] font-medium hover:opacity-80 transition-opacity"
              style={{ color: "var(--accent)" }}
            >
              {footer.contact.email}
            </a>
            <span className="text-[13px] text-[var(--text-secondary)] v3-num">
              {footer.contact.whatsapp}
            </span>
            <span className="text-[12px] text-[var(--text-tertiary)] leading-relaxed">
              {footer.contact.address}
            </span>
          </motion.div>
        </div>

        <div
          className="pt-6 border-t flex flex-wrap items-center justify-between gap-3 text-[11px] v3-mono tracking-[0.14em] uppercase text-[var(--text-tertiary)]"
          style={{ borderColor: "var(--border-subtle)" }}
        >
          <span>© Pagah · todos os direitos reservados</span>
          <div className="flex items-center gap-2.5">
            <span className="v3-status-dot" aria-hidden="true" />
            <span>Sistema operacional · 99,98% uptime</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
