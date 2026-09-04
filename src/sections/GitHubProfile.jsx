import { useEffect, useState } from "react";
import "./GitHubProfile.css";

const USERNAME = "Yogesh1212-eng";

const API_URL = `https://api.github.com/users/${USERNAME}`;

function GitHubProfile() {
  const [github, setGithub] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchGitHubData = async () => {
    try {
      setLoading(true);
      setError(false);

      const response = await fetch(API_URL);

      if (!response.ok) {
        throw new Error("GitHub API failed");
      }

      const data = await response.json();

      console.log("GITHUB DATA:", data);

      setGithub(data);
    } catch (err) {
      console.error("GitHub API Error:", err);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchGitHubData();

    // Refresh every 30 minutes
    const interval = setInterval(
      fetchGitHubData,
      30 * 60 * 1000
    );

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="github-profile"
      id="github-profile"
    >
      <div className="github-glow github-glow-one"></div>
      <div className="github-glow github-glow-two"></div>

      <div className="github-container">

        {/* =========================
            HEADING
        ========================== */}

        <div className="github-heading">

          <span className="github-small-title">
            03 / GITHUB PROFILE
          </span>

          <h2>
            Code. Commit. <span>Ship.</span>
          </h2>

          <p>
            A live snapshot of my GitHub
            development journey.
          </p>

        </div>

        {/* =========================
            MAIN CARD
        ========================== */}

        <div className="github-card">

          {/* Loading */}

          {loading && (
            <div className="github-loading">

              <div className="github-loader"></div>

              <span>
                Fetching live GitHub data...
              </span>

            </div>
          )}

          {/* Error */}

          {!loading && error && (
            <div className="github-error">

              <span>
                Unable to fetch GitHub data.
              </span>

              <button
                onClick={fetchGitHubData}
              >
                Try Again
              </button>

              <a
                href={`https://github.com/${USERNAME}`}
                target="_blank"
                rel="noreferrer"
              >
                Open GitHub ↗
              </a>

            </div>
          )}

          {/* Data */}

          {!loading && !error && github && (
            <>

              {/* =========================
                  PROFILE TOP
              ========================== */}

              <div className="github-profile-top">

                <div className="github-user">

                  <img
                    src={github.avatar_url}
                    alt="Yogesh Maurya"
                    className="github-avatar"
                  />

                  <div>

                    <h3>
                      {github.name || "Yogesh Maurya"}
                    </h3>

                    <p>
                      @{github.login}
                    </p>

                  </div>

                </div>

                <a
                  href={github.html_url}
                  target="_blank"
                  rel="noreferrer"
                  className="github-profile-link"
                >
                  View GitHub ↗
                </a>

              </div>

              {/* =========================
                  BIO
              ========================== */}

              <p className="github-bio">
                {github.bio ||
                  "Computer Science Engineering student & Full Stack Developer."}
              </p>

              {/* =========================
                  STATS
              ========================== */}

              <div className="github-stats">

                {/* REPOSITORIES */}

                <div className="github-stat primary-github-stat">

                  <strong>
                    {github.public_repos}
                  </strong>

                  <span>
                    Public Repositories
                  </span>

                </div>

                {/* FOLLOWERS */}

                <div className="github-stat">

                  <strong>
                    {github.followers}
                  </strong>

                  <span>
                    Followers
                  </span>

                </div>

                {/* FOLLOWING */}

                <div className="github-stat">

                  <strong>
                    {github.following}
                  </strong>

                  <span>
                    Following
                  </span>

                </div>

                {/* GISTS */}

                <div className="github-stat">

                  <strong>
                    {github.public_gists}
                  </strong>

                  <span>
                    Public Gists
                  </span>

                </div>

              </div>

              {/* =========================
                  DETAILS
              ========================== */}

              <div className="github-details">

                {github.location && (
                  <span>
                    📍 {github.location}
                  </span>
                )}

                {github.company && (
                  <span>
                    🏢 {github.company}
                  </span>
                )}

                {github.blog && (
                  <a
                    href={
                      github.blog.startsWith("http")
                        ? github.blog
                        : `https://${github.blog}`
                    }
                    target="_blank"
                    rel="noreferrer"
                  >
                    🌐 Website ↗
                  </a>
                )}

              </div>

            </>
          )}

        </div>

        {/* =========================
            LIVE BADGE
        ========================== */}

        <div className="github-live">

          <span className="github-live-dot"></span>

          <span>
            LIVE GITHUB DATA
          </span>

          <span className="github-live-divider">
            •
          </span>

          <span>
            Auto refreshes every 30 min
          </span>

        </div>

      </div>
    </section>
  );
}

export default GitHubProfile;