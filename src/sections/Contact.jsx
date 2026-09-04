import { useState } from "react";
import {
  ArrowUpRight,
  Check,
  Copy,
  Mail,
  MapPin,
} from "lucide-react";

import "./Contact.css";

const Contact = () => {
  const [copied, setCopied] = useState(false);

  const email = "yogeshmaurya1205@gmail.com";

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);

      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (error) {
      console.error("Failed to copy email:", error);
    }
  };

  return (
    <section
      className="contact-section"
      id="contact"
    >
      {/* Background */}
      <div className="contact-grid"></div>

      <div className="contact-noise"></div>

      <div className="contact-glow contact-glow-one"></div>

      <div className="contact-glow contact-glow-two"></div>

      {/* Background word */}
      <div className="contact-bg-word">
        CONNECT
      </div>

      <div className="contact-container">

        {/* ======================================
            TOP META
        ====================================== */}

        <div className="contact-meta">

          <div className="contact-meta-left">

            <span className="contact-red-dot"></span>

            <span>
              08 / CONTACT
            </span>

          </div>

          <span className="contact-meta-right">
            LET'S CONNECT • LET'S BUILD
          </span>

        </div>


        {/* ======================================
            MAIN
        ====================================== */}

        <div className="contact-main">

          {/* LEFT */}

          <div className="contact-left">

            <div className="contact-eyebrow">

              <Mail size={16} />

              <span>
                OPEN FOR OPPORTUNITIES
              </span>

            </div>


            <h2 className="contact-title">

              Let's Build

              <br />

              <span>
                Something
              </span>

              <br />

              Great.

            </h2>


            <p className="contact-description">
              Have an idea, project, internship opportunity
              or simply want to connect? My inbox is always
              open for meaningful conversations.
            </p>


            {/* Availability */}

            <div className="contact-availability">

              <span className="availability-dot"></span>

              <span>
                AVAILABLE FOR NEW OPPORTUNITIES
              </span>

            </div>

          </div>


          {/* RIGHT */}

          <div className="contact-right">

            {/* EMAIL CARD */}

            <div className="contact-email-card">

              <div className="contact-card-label">
                EMAIL
              </div>

              <div className="contact-email-row">

                <a
                  href={`mailto:${email}`}
                  className="contact-email"
                >
                  {email}
                </a>

                <button
                  className="copy-email-btn"
                  onClick={copyEmail}
                  aria-label="Copy email"
                >
                  {copied ? (
                    <Check size={17} />
                  ) : (
                    <Copy size={17} />
                  )}
                </button>

              </div>

              <div className="contact-email-hint">
                {copied
                  ? "EMAIL COPIED"
                  : "CLICK TO COPY EMAIL"}
              </div>

            </div>


            {/* SOCIAL LINKS */}

            {/* SOCIALS */}

<div className="contact-socials">

  <a
    href="https://github.com/Yogesh1212-eng"
    target="_blank"
    rel="noreferrer"
    className="contact-social"
  >

    <div className="contact-social-icon social-github">
      GH
    </div>

    <div className="contact-social-content">

      <span>
        GITHUB
      </span>

      <strong>
        Yogesh1212-eng
      </strong>

    </div>

    <ArrowUpRight size={18} />

  </a>


  <a
    href="https://www.linkedin.com/in/yogesh-maurya-4010b2325/"
    target="_blank"
    rel="noreferrer"
    className="contact-social"
  >

    <div className="contact-social-icon social-linkedin">
      in
    </div>

    <div className="contact-social-content">

      <span>
        LINKEDIN
      </span>

      <strong>
        Yogesh Maurya
      </strong>

    </div>

    <ArrowUpRight size={18} />

  </a>

</div>
            {/* INFO */}

            <div className="contact-info-row">

              <div className="contact-info">

                <MapPin size={15} />

                <div>

                  <span>
                    LOCATION
                  </span>

                  <strong>
                    Lucknow, India
                  </strong>

                </div>

              </div>


              <div className="contact-info">

                <Mail size={15} />

                <div>

                  <span>
                    RESPONSE
                  </span>

                  <strong>
                    24–48 HOURS
                  </strong>

                </div>

              </div>

            </div>


            {/* MAIN CTA */}

            <a
              href={`mailto:${email}?subject=Let's%20Connect`}
              className="contact-main-btn"
            >

              <span>
                SEND ME AN EMAIL
              </span>

              <div className="contact-main-btn-icon">
                <ArrowUpRight size={22} />
              </div>

            </a>

          </div>

        </div>


        {/* ======================================
            DIVIDER
        ====================================== */}

        <div className="contact-divider">
          <span></span>
          <p>
            THANKS FOR MAKING IT THIS FAR
          </p>
          <span></span>
        </div>


        {/* ======================================
            FOOTER
        ====================================== */}

        <footer className="contact-footer">

          <div className="footer-left">

            <span>
              © 2026 YOGESH MAURYA
            </span>

            <span className="footer-separator">
              /
            </span>

            <span>
              FULL STACK DEVELOPER
            </span>

          </div>


          <div className="footer-right">

            <span>
              BUILT WITH
            </span>

            <span className="footer-red">
              REACT
            </span>

            <span>
              •
            </span>

            <span>
              PASSION
            </span>

          </div>

        </footer>

      </div>
    </section>
  );
};

export default Contact;