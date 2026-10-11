"use client";

import { Phone } from "lucide-react";

const callStyles = `
  .sr-call-container,
  .sr-call-container *,
  .sr-call-container *::before,
  .sr-call-container *::after {
    box-sizing: border-box;
  }

  .sr-call-button {
    isolation: isolate;
    border: 1px solid rgba(255, 255, 255, 0.45);

    box-shadow:
      0 20px 45px rgba(11, 42, 82, 0.30),
      0 8px 20px rgba(0, 0, 0, 0.18),
      inset 0 1px 2px rgba(255, 255, 255, 0.28),
      inset 0 -2px 3px rgba(0, 0, 0, 0.16);

    cursor: pointer;
    transform: translateZ(0);

    transition:
      transform 0.4s cubic-bezier(0.22, 1, 0.36, 1),
      box-shadow 0.4s ease,
      filter 0.4s ease;

    animation:
      srCallFloat 4s ease-in-out 0.4s infinite;
  }

  .sr-call-button:hover {
    transform: translateY(-8px) scale(1.07) rotate(-4deg);

    box-shadow:
      0 28px 55px rgba(11, 42, 82, 0.36),
      0 11px 26px rgba(0, 0, 0, 0.22),
      inset 0 1px 2px rgba(255, 255, 255, 0.32);

    filter: brightness(1.07);
    animation-play-state: paused;
  }

  .sr-call-button:active {
    transform: translateY(-2px) scale(0.95);
  }

  .sr-call-button:focus-visible {
    outline: 4px solid rgba(98, 133, 173, 0.24);
    outline-offset: 6px;
  }

  .sr-call-icon {
    transition:
      transform 0.4s cubic-bezier(0.22, 1, 0.36, 1),
      filter 0.4s ease;

    filter: drop-shadow(0 2px 2px rgba(0, 0, 0, 0.16));
  }

  .sr-call-button:hover .sr-call-icon {
    transform: scale(1.12) rotate(10deg);
    filter: drop-shadow(0 3px 3px rgba(0, 0, 0, 0.2));
  }

  .sr-call-pulse {
    position: absolute;
    inset: 0;
    z-index: -2;
    border: 2px solid rgba(98, 133, 173, 0.58);
    border-radius: 50%;
    pointer-events: none;
  }

  .sr-call-pulse-one {
    animation: srCallPulse 2.4s ease-out infinite;
  }

  .sr-call-pulse-two {
    animation: srCallPulse 2.4s ease-out 1.2s infinite;
  }

  .sr-call-shine {
    position: absolute;
    inset: 3px;
    z-index: 2;
    overflow: hidden;
    border-radius: 50%;
    pointer-events: none;
  }

  .sr-call-shine::before {
    content: "";
    position: absolute;
    top: -60%;
    left: -80%;
    width: 34%;
    height: 220%;

    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.42),
      transparent
    );

    transform: rotate(25deg);
    animation: srCallShine 4.7s ease-in-out 1s infinite;
  }

  .sr-call-status {
    position: absolute;
    top: 1px;
    right: 1px;
    z-index: 6;

    width: 15px;
    height: 15px;

    background: #ffffff;
    border: 3px solid #6285ad;
    border-radius: 50%;

    box-shadow:
      0 3px 8px rgba(0, 0, 0, 0.22),
      0 0 0 3px rgba(255, 255, 255, 0.12);
  }

  .sr-call-status::after {
    content: "";
    position: absolute;
    inset: 1px;
    background: #6285ad;
    border-radius: 50%;
    animation: srCallStatusBlink 1.8s ease-in-out infinite;
  }

  .sr-call-tooltip {
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

  .sr-call-tooltip::after {
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

  .sr-call-tooltip-dot {
    width: 7px;
    height: 7px;
    flex-shrink: 0;

    background: #8eb7d4;
    border-radius: 50%;

    box-shadow: 0 0 0 4px rgba(142, 183, 212, 0.14);

    animation: srCallTooltipDot 1.8s ease-in-out infinite;
  }

  .sr-call-container:hover .sr-call-tooltip {
    opacity: 1;
    visibility: visible;
    transform: translateX(0) scale(1);
  }

  @keyframes srCallFloat {
    0%,
    100% {
      transform: translateY(0);
    }

    50% {
      transform: translateY(-7px);
    }
  }

  @keyframes srCallPulse {
    0% {
      opacity: 0.72;
      transform: scale(0.92);
    }

    75%,
    100% {
      opacity: 0;
      transform: scale(1.58);
    }
  }

  @keyframes srCallShine {
    0%,
    55% {
      left: -80%;
    }

    75%,
    100% {
      left: 150%;
    }
  }

  @keyframes srCallStatusBlink {
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

  @keyframes srCallTooltipDot {
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
    .sr-call-container {
      right: 16px !important;
      bottom: calc(
        88px + env(safe-area-inset-bottom)
      ) !important;
    }

    .sr-call-button {
      width: 57px !important;
      height: 57px !important;
      min-width: 57px !important;
      min-height: 57px !important;
    }

    .sr-call-icon {
      width: 25px !important;
      height: 25px !important;
    }

    .sr-call-status {
      width: 13px;
      height: 13px;
      border-width: 2.5px;
    }

    .sr-call-tooltip {
      display: none;
    }
  }

  @media (max-width: 380px) {
    .sr-call-container {
      right: 13px !important;
      bottom: calc(
        80px + env(safe-area-inset-bottom)
      ) !important;
    }

    .sr-call-button {
      width: 53px !important;
      height: 53px !important;
      min-width: 53px !important;
      min-height: 53px !important;
    }

    .sr-call-icon {
      width: 23px !important;
      height: 23px !important;
    }
  }

  @media (min-width: 2000px) {
    .sr-call-button {
      width: 76px !important;
      height: 76px !important;
      min-width: 76px !important;
      min-height: 76px !important;
    }

    .sr-call-icon {
      width: 31px !important;
      height: 31px !important;
    }

    .sr-call-tooltip {
      padding: 15px 20px;
      font-size: 15px;
    }

    .sr-call-status {
      width: 17px;
      height: 17px;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .sr-call-button,
    .sr-call-pulse,
    .sr-call-shine::before,
    .sr-call-status::after,
    .sr-call-tooltip-dot {
      animation: none !important;
    }

    .sr-call-button,
    .sr-call-icon,
    .sr-call-tooltip {
      transition: none !important;
    }
  }
`;

export default function GlobalCallButton() {
  return (
    <>
      <style>{callStyles}</style>

      <div
        className="sr-call-container"
        style={{
          position: "fixed",
          right: "clamp(16px, 2vw, 32px)",
          bottom: "clamp(94px, 8vw, 112px)",
          zIndex: 999998,

          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",

          gap: "13px",

          pointerEvents: "none",
        }}
      >
        {/* TOOLTIP */}

        <span className="sr-call-tooltip">
          <span className="sr-call-tooltip-dot" />
          Call Sharp Rays
        </span>

        {/* BUTTON */}

        <a
          href="tel:+919415951060"
          aria-label="Call Sharp Rays at +91 94159 51060"
          title="Call Sharp Rays"
          className="sr-call-button"
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
              "radial-gradient(circle at 30% 20%, rgba(255,255,255,0.28), transparent 34%), linear-gradient(145deg, #174A7E 0%, #0B2A52 52%, #061C39 100%)",

            borderRadius: "50%",

            textDecoration: "none",

            pointerEvents: "auto",
          }}
        >
          {/* PULSE */}

          <span className="sr-call-pulse sr-call-pulse-one" />
          <span className="sr-call-pulse sr-call-pulse-two" />

          {/* SHINE */}

          <span className="sr-call-shine" />

          {/* PHONE ICON */}

          <Phone
            aria-hidden="true"
            className="sr-call-icon"
            size={27}
            strokeWidth={1.9}
            style={{
              position: "relative",
              zIndex: 4,
              display: "block",
              color: "#ffffff",
            }}
          />

          {/* STATUS DOT */}

          <span className="sr-call-status" />
        </a>
      </div>
    </>
  );
}