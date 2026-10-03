"use client";

const WHATSAPP_NUMBER = "917517848682";

const WHATSAPP_MESSAGE =
  "Hello Sharp Rays! I visited your website and would like to know more about your services.";

const whatsappStyles = `
  .sr-whatsapp-container,
  .sr-whatsapp-container *,
  .sr-whatsapp-container *::before,
  .sr-whatsapp-container *::after {
    box-sizing: border-box;
  }

  .sr-whatsapp-button {
    isolation: isolate;

    border: 1px solid rgba(255, 255, 255, 0.55);

    box-shadow:
      0 20px 45px rgba(18, 181, 79, 0.34),
      0 8px 20px rgba(0, 0, 0, 0.22),
      inset 0 1px 2px rgba(255, 255, 255, 0.48),
      inset 0 -2px 3px rgba(0, 90, 35, 0.18);

    cursor: pointer;

    transform: translateZ(0);

    transition:
      transform 0.4s cubic-bezier(0.22, 1, 0.36, 1),
      box-shadow 0.4s ease,
      filter 0.4s ease;

    animation:
      srWhatsappFloat 4s ease-in-out 1.1s infinite;
  }

  .sr-whatsapp-button:hover {
    transform: translateY(-8px) scale(1.07) rotate(-4deg);

    box-shadow:
      0 28px 55px rgba(18, 181, 79, 0.42),
      0 11px 26px rgba(0, 0, 0, 0.24),
      inset 0 1px 2px rgba(255, 255, 255, 0.5);

    filter: brightness(1.06);

    animation-play-state: paused;
  }

  .sr-whatsapp-button:active {
    transform: translateY(-2px) scale(0.95);
  }

  .sr-whatsapp-button:focus-visible {
    outline: 4px solid rgba(37, 211, 102, 0.3);
    outline-offset: 6px;
  }

  .sr-whatsapp-icon {
    transition:
      transform 0.4s cubic-bezier(0.22, 1, 0.36, 1),
      filter 0.4s ease;

    filter: drop-shadow(0 2px 2px rgba(0, 0, 0, 0.14));
  }

  .sr-whatsapp-button:hover .sr-whatsapp-icon {
    transform: scale(1.1) rotate(9deg);
    filter: drop-shadow(0 3px 3px rgba(0, 0, 0, 0.18));
  }

  .sr-whatsapp-pulse {
    position: absolute;

    inset: 0;

    z-index: -2;

    border: 2px solid rgba(37, 211, 102, 0.7);
    border-radius: 50%;

    pointer-events: none;
  }

  .sr-whatsapp-pulse-one {
    animation: srWhatsappPulse 2.4s ease-out infinite;
  }

  .sr-whatsapp-pulse-two {
    animation: srWhatsappPulse 2.4s ease-out 1.2s infinite;
  }

  .sr-whatsapp-shine {
    position: absolute;

    inset: 3px;

    z-index: 2;

    overflow: hidden;

    border-radius: 50%;

    pointer-events: none;
  }

  .sr-whatsapp-shine::before {
    content: "";

    position: absolute;

    top: -60%;
    left: -80%;

    width: 34%;
    height: 220%;

    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.5),
      transparent
    );

    transform: rotate(25deg);

    animation: srWhatsappShine 4.7s ease-in-out 1.4s infinite;
  }

  .sr-whatsapp-status {
    position: absolute;

    top: 1px;
    right: 1px;

    z-index: 6;

    width: 15px;
    height: 15px;

    background: #ffffff;

    border: 3px solid #20c763;
    border-radius: 50%;

    box-shadow:
      0 3px 8px rgba(0, 0, 0, 0.24),
      0 0 0 3px rgba(255, 255, 255, 0.13);
  }

  .sr-whatsapp-status::after {
    content: "";

    position: absolute;

    inset: 1px;

    background: #20c763;

    border-radius: 50%;

    animation: srWhatsappStatusBlink 1.8s ease-in-out infinite;
  }

  .sr-whatsapp-tooltip {
    position: relative;

    display: flex;
    align-items: center;

    gap: 8px;

    padding: 12px 16px;

    color: #ffffff;

    background: rgba(13, 14, 16, 0.94);

    border: 1px solid rgba(255, 255, 255, 0.13);
    border-radius: 13px;

    box-shadow:
      0 14px 35px rgba(0, 0, 0, 0.25),
      inset 0 1px 0 rgba(255, 255, 255, 0.08);

    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);

    font-family: inherit;
    font-size: 13px;
    font-weight: 600;
    line-height: 1;

    letter-spacing: 0.02em;

    white-space: nowrap;

    opacity: 0;
    visibility: hidden;

    pointer-events: none;

    transform: translateX(18px) scale(0.92);
    transform-origin: right center;

    transition:
      opacity 0.3s ease,
      visibility 0.3s ease,
      transform 0.4s cubic-bezier(0.22, 1, 0.36, 1);
  }

  .sr-whatsapp-tooltip::after {
    content: "";

    position: absolute;

    top: 50%;
    right: -6px;

    width: 11px;
    height: 11px;

    background: rgba(13, 14, 16, 0.94);

    border-top: 1px solid rgba(255, 255, 255, 0.13);
    border-right: 1px solid rgba(255, 255, 255, 0.13);

    transform: translateY(-50%) rotate(45deg);
  }

  .sr-whatsapp-tooltip-dot {
    width: 7px;
    height: 7px;

    flex-shrink: 0;

    background: #30dc6c;

    border-radius: 50%;

    box-shadow: 0 0 0 4px rgba(48, 220, 108, 0.14);

    animation: srWhatsappTooltipDot 1.8s ease-in-out infinite;
  }

  .sr-whatsapp-container:hover .sr-whatsapp-tooltip {
    opacity: 1;
    visibility: visible;

    transform: translateX(0) scale(1);
  }

  @keyframes srWhatsappFloat {
    0%,
    100% {
      transform: translateY(0);
    }

    50% {
      transform: translateY(-7px);
    }
  }

  @keyframes srWhatsappPulse {
    0% {
      opacity: 0.78;
      transform: scale(0.92);
    }

    75%,
    100% {
      opacity: 0;
      transform: scale(1.58);
    }
  }

  @keyframes srWhatsappShine {
    0%,
    55% {
      left: -80%;
    }

    75%,
    100% {
      left: 150%;
    }
  }

  @keyframes srWhatsappStatusBlink {
    0%,
    100% {
      opacity: 1;
      transform: scale(1);
    }

    50% {
      opacity: 0.55;
      transform: scale(0.72);
    }
  }

  @keyframes srWhatsappTooltipDot {
    0%,
    100% {
      opacity: 1;
      transform: scale(1);
    }

    50% {
      opacity: 0.55;
      transform: scale(0.7);
    }
  }

  @media (max-width: 768px) {
    .sr-whatsapp-container {
      right: 16px !important;
      bottom: calc(
        18px + env(safe-area-inset-bottom)
      ) !important;
    }

    .sr-whatsapp-button {
      width: 57px !important;
      height: 57px !important;
      min-width: 57px !important;
      min-height: 57px !important;
    }

    .sr-whatsapp-icon {
      width: 31px !important;
      height: 31px !important;
    }

    .sr-whatsapp-status {
      width: 13px;
      height: 13px;
      border-width: 2.5px;
    }

    .sr-whatsapp-tooltip {
      display: none;
    }
  }

  @media (max-width: 380px) {
    .sr-whatsapp-container {
      right: 13px !important;
      bottom: calc(
        15px + env(safe-area-inset-bottom)
      ) !important;
    }

    .sr-whatsapp-button {
      width: 53px !important;
      height: 53px !important;
      min-width: 53px !important;
      min-height: 53px !important;
    }

    .sr-whatsapp-icon {
      width: 29px !important;
      height: 29px !important;
    }
  }

  @media (min-width: 2000px) {
    .sr-whatsapp-button {
      width: 76px !important;
      height: 76px !important;
      min-width: 76px !important;
      min-height: 76px !important;
    }

    .sr-whatsapp-icon {
      width: 41px !important;
      height: 41px !important;
    }

    .sr-whatsapp-tooltip {
      padding: 15px 20px;
      font-size: 15px;
    }

    .sr-whatsapp-status {
      width: 17px;
      height: 17px;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .sr-whatsapp-button,
    .sr-whatsapp-pulse,
    .sr-whatsapp-shine::before,
    .sr-whatsapp-status::after,
    .sr-whatsapp-tooltip-dot {
      animation: none !important;
    }

    .sr-whatsapp-button,
    .sr-whatsapp-icon,
    .sr-whatsapp-tooltip {
      transition: none !important;
    }
  }
`;

export default function FloatingWhatsAppButton() {
  const whatsappURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    WHATSAPP_MESSAGE
  )}`;

  return (
    <>
      {/* Normal CSS — no <style jsx> */}
      <style>{whatsappStyles}</style>

      <div
        className="sr-whatsapp-container"
        style={{
          position: "fixed",
          right: "clamp(16px, 2vw, 32px)",
          bottom: "clamp(18px, 3vw, 34px)",
          zIndex: 999999,

          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",

          gap: "13px",

          pointerEvents: "none",
        }}
      >
        {/* TOOLTIP */}

        <span className="sr-whatsapp-tooltip">
          <span className="sr-whatsapp-tooltip-dot" />
          Chat with us
        </span>

        {/* BUTTON */}

   <a
  href={whatsappURL}
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Chat with Sharp Rays on WhatsApp"
  title="Chat with Sharp Rays on WhatsApp"
  className="sr-whatsapp-button"
          style={{
            position: "relative",

            width: "64px",
            height: "64px",

            minWidth: "64px",
            minHeight: "64px",

            flexShrink: 0,

            display: "flex",
            alignItems: "center",
            justifyContent: "center",

            overflow: "visible",

            color: "#ffffff",

            background:
              "radial-gradient(circle at 30% 20%, rgba(255,255,255,0.4), transparent 34%), linear-gradient(145deg, #36e679 0%, #25d366 48%, #12a94f 100%)",

            borderRadius: "50%",

            textDecoration: "none",

            pointerEvents: "auto",
          }}
        >
          {/* PULSE */}

          <span className="sr-whatsapp-pulse sr-whatsapp-pulse-one" />

          <span className="sr-whatsapp-pulse sr-whatsapp-pulse-two" />

          {/* SHINE */}

          <span className="sr-whatsapp-shine" />

          {/* WHATSAPP SVG */}

          <svg
            className="sr-whatsapp-icon"
            width="35"
            height="35"
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            focusable="false"
            style={{
              position: "relative",

              zIndex: 4,

              display: "block",

              width: "35px",
              height: "35px",

              minWidth: "35px",
              minHeight: "35px",

              flexShrink: 0,

              color: "#ffffff",
            }}
          >
            <path
              fill="currentColor"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M16 2.667C8.637 2.667 2.667 8.637 2.667 16c0 2.35.61 4.56 1.68 6.48L2.667 29.333l7.013-1.64A13.27 13.27 0 0 0 16 29.333c7.363 0 13.333-5.97 13.333-13.333S23.363 2.667 16 2.667Zm0 24.4a11.02 11.02 0 0 1-5.627-1.533l-.4-.24-4.16.973.987-4.053-.267-.414A11.02 11.02 0 0 1 4.933 16C4.933 9.893 9.893 4.933 16 4.933S27.067 9.893 27.067 16 22.107 27.067 16 27.067Z"
            />

            <path
              fill="currentColor"
              d="M22.093 18.44c-.333-.173-1.986-.973-2.293-1.093-.306-.107-.533-.16-.76.173-.226.333-.866 1.08-1.066 1.307-.2.226-.4.253-.733.08-.347-.174-1.44-.534-2.734-1.694-1.013-.906-1.693-2.026-1.893-2.36-.2-.346-.027-.52.147-.693.16-.147.346-.4.52-.6.173-.2.226-.333.346-.56.107-.227.054-.427-.026-.6-.08-.173-.76-1.84-1.04-2.52-.28-.667-.56-.573-.76-.587h-.654c-.226 0-.6.08-.906.427-.307.333-1.187 1.16-1.187 2.84 0 1.666 1.213 3.28 1.387 3.506.16.227 2.4 3.667 5.813 5.147.813.347 1.44.56 1.933.72.813.253 1.56.213 2.147.133.653-.093 1.986-.813 2.266-1.6.28-.786.28-1.466.2-1.6-.08-.146-.306-.226-.64-.4Z"
            />
          </svg>

          {/* ONLINE DOT */}

          <span className="sr-whatsapp-status" />
        </a>
      </div>
    </>
  );
}