import Script from "next/script"

export const metadata = {
  title: "ZiggyHQ vs GoHighLevel — Which CRM is right for you?",
  description:
    "Honest comparison of ZiggyHQ vs GoHighLevel. Price, features, setup time, and who each is really built for.",
}

const comparisonJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "ZiggyHQ",
  "applicationCategory": "BusinessApplication",
  "operatingSystem": "Web",
  "url": "https://ziggyhq.com",
  "description":
    "CRM and business operations platform for small business. Visual pipeline, email sequences, smart lists, and industry templates — starting at $49/mo.",
  "offers": {
    "@type": "Offer",
    "price": "49.00",
    "priceCurrency": "USD",
    "priceSpecification": {
      "@type": "UnitPriceSpecification",
      "price": "49.00",
      "priceCurrency": "USD",
      "unitText": "MONTH",
    },
  },
}

const rows: [string, string, string][] = [
  ["Starting Price", "$49/mo", "$97/mo"],
  ["Built For", "Small businesses, solo operators", "Marketing agencies"],
  ["Setup Time", "Under 30 minutes", "Days to weeks"],
  ["CRM & Pipeline", "✅", "✅"],
  ["Email Sequences", "✅", "✅"],
  ["SMS via Twilio (BYOK)", "✅ In Development", "✅"],
  ["AI Calling", "✅ In Development", "✅"],
  ["White-labeling", "❌", "✅"],
  ["Agency sub-accounts", "❌", "✅"],
  ["Industry templates", "✅ 10+ included", "❌ Manual setup"],
  ["Onboarding support", "✅ Included", "❌ Extra cost"],
  ["Complexity", "Low — built for owners", "High — built for agencies"],
  ["Contract required", "❌ Month-to-month", "❌"],
  ["Mobile-friendly UI", "✅", "⚠️ Complex on mobile"],
]

export default function VsGoHighLevel() {
  return (
    <>
      <Script
        id="vs-ghl-json-ld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(comparisonJsonLd) }}
      />

      {/* ── NAV ── */}
      <nav
        style={{
          position: "sticky",
          top: 0,
          zIndex: 100,
          background: "rgba(10,10,10,0.92)",
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid #1f1f1f",
          padding: "0 24px",
        }}
      >
        <div
          style={{
            maxWidth: 1120,
            margin: "0 auto",
            height: 64,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <a href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center" }}>
            <img src="/ziggyhq-wordmark-v3.png" alt="ZiggyHQ" style={{ height: 32, width: "auto" }} />
          </a>

          <div style={{ display: "flex", alignItems: "center", gap: 32 }}>
            <div style={{ display: "flex", gap: 28 }}>
              {[
                ["Features", "/#features"],
                ["Compare", "/vs/gohighlevel"],
                ["Pricing", "/#pricing"],
                ["Blog", "/blog"],
                ["Sign In", "https://app.ziggyhq.com/login"],
              ].map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  style={{
                    color: label === "Compare" ? "#ff006e" : "#888",
                    fontSize: 15,
                    textDecoration: "none",
                    fontWeight: 500,
                  }}
                >
                  {label}
                </a>
              ))}
            </div>
            <a
              href="https://app.ziggyhq.com/signup"
              style={{
                background: "#ff006e",
                color: "#fff",
                textDecoration: "none",
                padding: "9px 20px",
                borderRadius: 8,
                fontSize: 14,
                fontWeight: 600,
                whiteSpace: "nowrap",
              }}
            >
              Start Free Trial
            </a>
          </div>
        </div>
      </nav>

      <div style={{ background: "#0a0a0a", color: "#fff", minHeight: "100vh" }}>
        {/* ── HERO ── */}
        <section
          style={{
            padding: "90px 24px 72px",
            textAlign: "center",
            maxWidth: 780,
            margin: "0 auto",
          }}
        >
          <div
            style={{
              display: "inline-block",
              background: "rgba(255,0,110,0.1)",
              border: "1px solid rgba(255,0,110,0.25)",
              borderRadius: 99,
              padding: "6px 16px",
              fontSize: 13,
              color: "#ff006e",
              fontWeight: 600,
              marginBottom: 28,
              letterSpacing: "0.02em",
            }}
          >
            Honest Comparison · Updated March 2026
          </div>

          <h1
            style={{
              fontSize: "clamp(34px, 5vw, 58px)",
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: "-1.5px",
              marginBottom: 24,
              color: "#fff",
            }}
          >
            ZiggyHQ vs GoHighLevel
          </h1>

          <p
            style={{
              fontSize: 19,
              color: "#888",
              lineHeight: 1.65,
              maxWidth: 600,
              margin: "0 auto 40px",
            }}
          >
            GoHighLevel is powerful. It's also{" "}
            <strong style={{ color: "#fff" }}>$97/mo</strong>, overwhelming, and
            built for agencies.{" "}
            <strong style={{ color: "#fff" }}>ZiggyHQ</strong> is built for the
            business owner who just wants it to work.
          </p>

          <a
            href="https://app.ziggyhq.com/signup"
            style={{
              display: "inline-block",
              background: "#ff006e",
              color: "#fff",
              textDecoration: "none",
              padding: "15px 32px",
              borderRadius: 10,
              fontSize: 16,
              fontWeight: 600,
            }}
          >
            Start free — no credit card
          </a>
        </section>

        {/* ── COMPARISON TABLE ── */}
        <section
          style={{
            padding: "0 24px 80px",
            maxWidth: 900,
            margin: "0 auto",
          }}
        >
          {/* Desktop table — hidden on mobile via wrapper */}
          <div
            style={{
              background: "#111",
              border: "1px solid #1f1f1f",
              borderRadius: 16,
              overflow: "hidden",
            }}
          >
            {/* Table header */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "2fr 1fr 1fr",
                borderBottom: "1px solid #1f1f1f",
              }}
            >
              <div
                style={{
                  padding: "18px 24px",
                  fontSize: 13,
                  color: "#555",
                  fontWeight: 600,
                  textTransform: "uppercase",
                  letterSpacing: "0.07em",
                }}
              >
                Feature
              </div>
              <div
                style={{
                  padding: "18px 24px",
                  fontSize: 15,
                  color: "#ff006e",
                  fontWeight: 700,
                  textAlign: "center",
                  background: "rgba(255,0,110,0.05)",
                  borderLeft: "1px solid #1f1f1f",
                  borderRight: "1px solid #1f1f1f",
                }}
              >
                ZiggyHQ
              </div>
              <div
                style={{
                  padding: "18px 24px",
                  fontSize: 13,
                  color: "#555",
                  fontWeight: 600,
                  textAlign: "center",
                  textTransform: "uppercase",
                  letterSpacing: "0.07em",
                }}
              >
                GoHighLevel
              </div>
            </div>

            {/* Table rows — responsive: stacked on small screens */}
            {rows.map(([feature, ziggy, ghl], i) => (
              <div
                key={feature}
                style={{
                  display: "grid",
                  gridTemplateColumns: "2fr 1fr 1fr",
                  borderBottom:
                    i < rows.length - 1 ? "1px solid #161616" : "none",
                  background: i % 2 !== 0 ? "#0d0d0d" : "transparent",
                }}
              >
                <div
                  style={{
                    padding: "16px 24px",
                    fontSize: 15,
                    color: "#999",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  {feature}
                </div>
                <div
                  style={{
                    padding: "16px 24px",
                    fontSize: 15,
                    color: "#fff",
                    fontWeight: 500,
                    textAlign: "center",
                    background: "rgba(255,0,110,0.03)",
                    borderLeft: "1px solid #1f1f1f",
                    borderRight: "1px solid #1f1f1f",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {ziggy}
                </div>
                <div
                  style={{
                    padding: "16px 24px",
                    fontSize: 15,
                    color: "#555",
                    textAlign: "center",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {ghl}
                </div>
              </div>
            ))}
          </div>

          {/* Mobile stacked cards — shown via max-width media query simulation */}
          <style>{`
            @media (max-width: 600px) {
              .vs-table-grid { display: none !important; }
              .vs-table-cards { display: flex !important; }
            }
            @media (min-width: 601px) {
              .vs-table-cards { display: none !important; }
              .vs-table-grid { display: block !important; }
            }
          `}</style>

          {/* Mobile cards */}
          <div
            className="vs-table-cards"
            style={{
              flexDirection: "column",
              gap: 12,
              marginTop: 16,
              display: "none",
            }}
          >
            {rows.map(([feature, ziggy, ghl]) => (
              <div
                key={`mobile-${feature}`}
                style={{
                  background: "#111",
                  border: "1px solid #1f1f1f",
                  borderRadius: 12,
                  padding: "18px 20px",
                }}
              >
                <p
                  style={{
                    fontSize: 13,
                    fontWeight: 600,
                    color: "#555",
                    textTransform: "uppercase",
                    letterSpacing: "0.07em",
                    marginBottom: 12,
                  }}
                >
                  {feature}
                </p>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: 12,
                  }}
                >
                  <div
                    style={{
                      background: "rgba(255,0,110,0.06)",
                      border: "1px solid rgba(255,0,110,0.15)",
                      borderRadius: 8,
                      padding: "10px 14px",
                    }}
                  >
                    <p
                      style={{
                        fontSize: 11,
                        color: "#ff006e",
                        fontWeight: 700,
                        marginBottom: 4,
                        textTransform: "uppercase",
                        letterSpacing: "0.05em",
                      }}
                    >
                      ZiggyHQ
                    </p>
                    <p style={{ fontSize: 14, color: "#fff", fontWeight: 500 }}>
                      {ziggy}
                    </p>
                  </div>
                  <div
                    style={{
                      background: "#0d0d0d",
                      border: "1px solid #1f1f1f",
                      borderRadius: 8,
                      padding: "10px 14px",
                    }}
                  >
                    <p
                      style={{
                        fontSize: 11,
                        color: "#555",
                        fontWeight: 700,
                        marginBottom: 4,
                        textTransform: "uppercase",
                        letterSpacing: "0.05em",
                      }}
                    >
                      GoHighLevel
                    </p>
                    <p style={{ fontSize: 14, color: "#666" }}>{ghl}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <p
            style={{
              textAlign: "center",
              marginTop: 16,
              fontSize: 13,
              color: "#333",
            }}
          >
            Pricing data sourced from GoHighLevel.com · Updated March 2026
          </p>
        </section>

        {/* ── BOTTOM LINE ── */}
        <section
          style={{
            padding: "72px 24px",
            background: "#0d0d0d",
            borderTop: "1px solid #1f1f1f",
            borderBottom: "1px solid #1f1f1f",
          }}
        >
          <div style={{ maxWidth: 760, margin: "0 auto", textAlign: "center" }}>
            <h2
              style={{
                fontSize: "clamp(24px, 3.5vw, 38px)",
                fontWeight: 700,
                letterSpacing: "-0.8px",
                marginBottom: 24,
                color: "#fff",
              }}
            >
              The bottom line
            </h2>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: 20,
                marginBottom: 40,
              }}
            >
              <div
                style={{
                  background: "#111",
                  border: "1px solid #1f1f1f",
                  borderRadius: 14,
                  padding: "28px 26px",
                  textAlign: "left",
                }}
              >
                <div style={{ fontSize: 28, marginBottom: 12 }}>🏢</div>
                <h3
                  style={{
                    fontSize: 16,
                    fontWeight: 700,
                    color: "#fff",
                    marginBottom: 10,
                  }}
                >
                  Choose GoHighLevel if…
                </h3>
                <p style={{ fontSize: 14, color: "#666", lineHeight: 1.65 }}>
                  You're a marketing agency managing multiple clients at scale,
                  need white-labeling, or require sub-account architecture. The
                  complexity is worth it for that use case.
                </p>
              </div>

              <div
                style={{
                  background: "rgba(255,0,110,0.06)",
                  border: "1px solid rgba(255,0,110,0.2)",
                  borderRadius: 14,
                  padding: "28px 26px",
                  textAlign: "left",
                }}
              >
                <div style={{ fontSize: 28, marginBottom: 12 }}>⚡</div>
                <h3
                  style={{
                    fontSize: 16,
                    fontWeight: 700,
                    color: "#fff",
                    marginBottom: 10,
                  }}
                >
                  Choose ZiggyHQ if…
                </h3>
                <p style={{ fontSize: 14, color: "#aaa", lineHeight: 1.65 }}>
                  You're a business owner who wants a CRM that just works on day
                  one. Under 30 minutes to set up, half the price, and built for
                  how real businesses actually sell.
                </p>
              </div>
            </div>

            <p
              style={{
                fontSize: 17,
                color: "#777",
                lineHeight: 1.7,
                maxWidth: 640,
                margin: "0 auto",
              }}
            >
              If you're a marketing agency managing clients at scale, GoHighLevel
              is worth the complexity. If you're a business owner who wants a CRM
              that just works on day one —{" "}
              <strong style={{ color: "#fff" }}>
                ZiggyHQ is the better fit.
              </strong>
            </p>
          </div>
        </section>

        {/* ── CTA ── */}
        <section
          style={{
            padding: "96px 24px",
            textAlign: "center",
            background: "linear-gradient(180deg, #0a0a0a 0%, #0d0005 100%)",
          }}
        >
          <h2
            style={{
              fontSize: "clamp(30px, 4.5vw, 50px)",
              fontWeight: 700,
              letterSpacing: "-1.2px",
              marginBottom: 16,
              lineHeight: 1.1,
            }}
          >
            Ready to make the switch?
          </h2>
          <p style={{ fontSize: 17, color: "#555", marginBottom: 36 }}>
            14 days free. No credit card. You're live in under 30 minutes.
          </p>
          <a
            href="https://app.ziggyhq.com/signup"
            style={{
              display: "inline-block",
              background: "#ff006e",
              color: "#fff",
              textDecoration: "none",
              padding: "18px 40px",
              borderRadius: 12,
              fontSize: 17,
              fontWeight: 700,
              letterSpacing: "-0.2px",
            }}
          >
            Start free — no credit card →
          </a>
          <p style={{ marginTop: 16, fontSize: 13, color: "#333" }}>
            Cancel anytime · No contracts · 5 seats included
          </p>
        </section>

        {/* ── FOOTER ── */}
        <footer
          style={{
            background: "#050505",
            borderTop: "1px solid #111",
            padding: "40px 24px",
          }}
        >
          <div
            style={{
              maxWidth: 1100,
              margin: "0 auto",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 20,
              textAlign: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                gap: 28,
                flexWrap: "wrap",
                justifyContent: "center",
              }}
            >
              {[
                ["Home", "/"],
                ["Features", "/#features"],
                ["Compare", "/vs/gohighlevel"],
                ["Pricing", "/#pricing"],
                ["Blog", "/blog"],
                ["Privacy", "/privacy"],
                ["Terms", "/terms"],
                ["Sign In", "https://app.ziggyhq.com/login"],
              ].map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  style={{
                    color: "#555",
                    fontSize: 14,
                    textDecoration: "none",
                    fontWeight: 500,
                  }}
                >
                  {label}
                </a>
              ))}
            </div>

            <p style={{ fontSize: 13, color: "#333" }}>
              Part of{" "}
              <a
                href="https://ziggybusiness.com"
                style={{ color: "#555", textDecoration: "none" }}
              >
                ZiggyTech Business Suite
              </a>
              {" · "}
              <a
                href="https://ziggybusiness.com"
                style={{ color: "#555", textDecoration: "none" }}
              >
                ziggybusiness.com
              </a>
            </p>

            <p style={{ fontSize: 13, color: "#2a2a2a" }}>
              © 2026 ZiggyHQ. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </>
  )
}
