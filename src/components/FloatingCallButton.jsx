import React from "react";
import { PhoneCall } from "lucide-react";
import "./FloatingCallButton.css";

function FloatingCallButton() {
  const phoneNumber = "8853903031";

  return (
    <aside className="sticky-call-wrapper" aria-label="Call Yogesh Maurya">
      <a
        href={`tel:${phoneNumber}`}
        className="sticky-call-btn"
        title="Call +91 8853903031"
      >
        {/* Pulsing Neon Radar Wave */}
        <span className="call-radar-wave" />

        {/* Chota Red Sphere with Compact Icon */}
        <span className="call-icon-circle">
          <PhoneCall size={16} className="phone-vibrate-icon" />
        </span>

        {/* Hover Pill Label */}
        <span className="call-action-text">
          <span className="call-status-dot" />
          <span className="call-label-title">Call</span>
          <span className="call-label-sub">+91 8853903031</span>
        </span>
      </a>
    </aside>
  );
}

export default FloatingCallButton;