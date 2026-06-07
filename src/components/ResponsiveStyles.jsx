export default function ResponsiveStyles() {
  return (
    <style>{`
      /* ===== GLOBAL RESPONSIVE ===== */
      @media (max-width: 900px) {
        /* Nav */
        nav .desktop-nav { display: none !important; }
        nav .mobile-menu-btn { display: flex !important; }

        /* Trust Bar */
        #trust-grid {
          grid-template-columns: repeat(2, 1fr) !important;
        }
        #trust-grid > div:nth-child(2) {
          border-right: none !important;
        }
        #trust-grid > div:nth-child(3) {
          border-right: 1px solid var(--border-light) !important;
          border-top: 1px solid var(--border-light) !important;
          padding-top: 32px !important;
        }
        #trust-grid > div:nth-child(4) {
          border-top: 1px solid var(--border-light) !important;
          padding-top: 32px !important;
        }

        /* Before/After */
        #before-after .ba-grid {
          grid-template-columns: 1fr !important;
        }

        /* Services */
        #services .service-row {
          grid-template-columns: 1fr !important;
        }
        #services .service-row .text-side {
          padding: 44px 28px !important;
          order: 1 !important;
        }
        #services .service-row .visual-side {
          min-height: 220px !important;
          order: 0 !important;
        }
        #services .cta-banner {
          padding: 36px 28px !important;
          flex-direction: column !important;
          align-items: flex-start !important;
        }

        /* About */
        #about .about-grid {
          grid-template-columns: 1fr !important;
          gap: 56px !important;
        }

        /* WhyUs */
        .reasons-grid {
          grid-template-columns: 1fr !important;
        }

        /* Reviews */
        #reviews .review-header {
          flex-direction: column !important;
          align-items: flex-start !important;
        }
        #reviews .featured-review {
          padding: 44px 28px !important;
        }
        #reviews .review-footer {
          flex-direction: column !important;
          align-items: flex-start !important;
          gap: 16px !important;
        }

        /* Contact */
        #contact .contact-grid {
          grid-template-columns: 1fr !important;
          gap: 48px !important;
        }
        #contact .name-phone-grid {
          grid-template-columns: 1fr !important;
        }
      }

      @media (max-width: 600px) {
        /* Trust bar single column */
        #trust-grid {
          grid-template-columns: 1fr !important;
        }
        #trust-grid > div {
          border-right: none !important;
          border-top: none !important;
          padding-left: 0 !important;
          padding-bottom: 28px !important;
          border-bottom: 1px solid var(--border-light) !important;
        }
        #trust-grid > div:last-child {
          border-bottom: none !important;
        }

        /* Hero adjustments */
        .hero-ctas {
          flex-direction: column !important;
          align-items: stretch !important;
        }
        .hero-ctas a {
          text-align: center !important;
        }

        /* WhyUs reasons single col */
        .reason-cell {
          border-radius: 0 !important;
          padding: 36px 24px !important;
        }

        /* Footer */
        .footer-top {
          flex-direction: column !important;
        }
        .footer-links {
          gap: 36px !important;
        }
        .footer-bottom {
          flex-direction: column !important;
          gap: 8px !important;
        }
      }

      /* ===== HOVER STATES ===== */
      .cta-primary:hover {
        background: var(--forest-mid) !important;
        transform: translateY(-1px);
      }
      .cta-white:hover {
        background: rgba(255,255,255,0.12) !important;
      }
      .service-item:hover .visual-side {
        filter: brightness(1.05);
      }

      /* ===== FOCUS STATES ===== */
      input:focus, textarea:focus, select:focus {
        border-color: rgba(26,58,42,0.5) !important;
        box-shadow: 0 0 0 3px rgba(26,58,42,0.15) !important;
      }

      /* ===== SCROLL BEHAVIOUR ===== */
      * {
        scroll-margin-top: 80px;
      }
    `}</style>
  )
}
