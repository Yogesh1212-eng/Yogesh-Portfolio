import { useCallback, useEffect, useMemo, useState } from "react";
import "./CodingProfile.css";

const USERNAME = "Yogesh_Maurya12";

const PROFILE_API =
  `https://leetcode-api-pied.vercel.app/user/${USERNAME}`;

const CALENDAR_API =
  `https://leetcode-api-pied.vercel.app/user/${USERNAME}/calendar`;

function CodingProfile() {
  const [profile, setProfile] = useState(null);
  const [calendar, setCalendar] = useState(null);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  // =========================================
  // FETCH LEETCODE DATA
  // =========================================

  const fetchLeetCodeData = useCallback(async (signal) => {
    try {
      setLoading(true);
      setError(false);

      const [profileResponse, calendarResponse] =
        await Promise.all([
          fetch(PROFILE_API, { signal }),
          fetch(CALENDAR_API, { signal }),
        ]);

      if (!profileResponse.ok) {
        throw new Error("Profile API failed");
      }

      const profileData =
        await profileResponse.json();

      const calendarData =
        calendarResponse.ok
          ? await calendarResponse.json()
          : null;

      setProfile(profileData);
      setCalendar(calendarData);

    } catch (err) {
      if (err?.name === "AbortError") return;

      console.error("LeetCode API Error:", err);

      setError(true);

    } finally {
      setLoading(false);
    }
  }, []);

  // =========================================
  // INITIAL FETCH
  // =========================================

  useEffect(() => {
    const controller = new AbortController();

    fetchLeetCodeData(controller.signal);

    const interval = setInterval(() => {
      fetchLeetCodeData(controller.signal);
    }, 30 * 60 * 1000);

    return () => {
      controller.abort();
      clearInterval(interval);
    };
  }, [fetchLeetCodeData]);

  // =========================================
  // PROBLEMS SOLVED
  // =========================================

  const solved = useMemo(() => {
    if (!profile) return 0;

    /*
      Actual API structure:

      profile.submitStats.acSubmissionNum

      [
        {
          difficulty: "All",
          count: 208,
          submissions: 434
        }
      ]
    */

    const solvedList =
      profile?.submitStats?.acSubmissionNum;

    if (Array.isArray(solvedList)) {
      const allProblems =
        solvedList.find(
          (item) =>
            item?.difficulty === "All"
        );

      if (allProblems) {
        return Number(
          allProblems.count
        ) || 0;
      }
    }

    return 0;
  }, [profile]);

  // =========================================
  // GLOBAL RANK
  // =========================================

  const ranking = useMemo(() => {
    if (!profile) return 0;

    /*
      Actual API structure:

      profile.profile.ranking
    */

    return (
      Number(
        profile?.profile?.ranking
      ) || 0
    );
  }, [profile]);

  // =========================================
  // ACTIVE DAYS
  // =========================================

  const activeDays = useMemo(() => {
    if (!calendar) return 0;

    return (
      Number(
        calendar?.totalActiveDays
      ) || 0
    );
  }, [calendar]);

  // =========================================
  // CURRENT STREAK
  // =========================================

  const streak = useMemo(() => {
    if (!calendar) return 0;

    return (
      Number(
        calendar?.streak
      ) || 0
    );
  }, [calendar]);

  // =========================================
  // SUBMISSION CALENDAR
  // =========================================

  const submissionCalendar = useMemo(() => {
    if (!calendar) return {};

    return (
      calendar?.submissionCalendar ||
      {}
    );
  }, [calendar]);

  // =========================================
  // HEATMAP
  // =========================================

  const heatmap = useMemo(() => {
    const calendarData =
      submissionCalendar;

    if (
      !calendarData ||
      Object.keys(calendarData).length === 0
    ) {
      return [];
    }

    const today = new Date();

    const startDate = new Date();

    startDate.setDate(
      today.getDate() - 364
    );

    const days = [];

    for (
      let current = new Date(startDate);
      current <= today;
      current.setDate(
        current.getDate() + 1
      )
    ) {
      const year =
        current.getFullYear();

      const month =
        current.getMonth();

      const day =
        current.getDate();

      let count = 0;

      /*
        Find matching Unix timestamp
      */

      for (
        const [
          timestamp,
          value
        ] of Object.entries(
          calendarData
        )
      ) {
        const timestampNumber =
          Number(timestamp);

        if (
          Number.isNaN(
            timestampNumber
          )
        ) {
          continue;
        }

        const apiDate =
          new Date(
            timestampNumber * 1000
          );

        if (
          apiDate.getFullYear() === year &&
          apiDate.getMonth() === month &&
          apiDate.getDate() === day
        ) {
          count =
            Number(value) || 0;

          break;
        }
      }

      days.push({
        date: new Date(current),
        count,
        timestamp:
          Math.floor(
            current.getTime() / 1000
          ),
      });
    }

    return days;
  }, [submissionCalendar]);

  // =========================================
  // HEATMAP LEVEL
  // =========================================

  const getLevel = (count) => {
    if (count === 0) return 0;

    if (count === 1) return 1;

    if (count <= 3) return 2;

    if (count <= 5) return 3;

    return 4;
  };

  // =========================================
  // UI
  // =========================================

  return (
    <section
      className="coding-profile"
      id="coding"
    >

      {/* Background */}

      <div className="coding-glow coding-glow-one"></div>

      <div className="coding-glow coding-glow-two"></div>

      <div className="coding-container">

        {/* =================================
            HEADING
        ================================= */}

        <div className="coding-heading">

          <span className="coding-small-title">
            02 / CODING PROFILE
          </span>

          <h2>
            Code. Solve. <span>Build.</span>
          </h2>

          <p>
            A live snapshot of my coding
            journey across LeetCode,
            GitHub and LinkedIn.
          </p>

        </div>

        {/* =================================
            LEETCODE CARD
        ================================= */}

        <div className="leetcode-card">

          {/* TOP */}

          <div className="leetcode-top">

            <div className="leetcode-brand">

              <div className="leetcode-icon">
  <img
    src="/leetcode.png"
    alt="LeetCode"
  />
</div>

              <div>

                <h3>
                  LeetCode
                </h3>

                <p>
                  @{USERNAME}
                </p>

              </div>

            </div>

            <a
              href="https://leetcode.com/u/Yogesh_Maurya12/"
              target="_blank"
              rel="noreferrer"
              className="profile-link"
            >
              View Profile ↗
            </a>

          </div>

          {/* =================================
              LOADING
          ================================= */}

          {loading && (
            <div className="coding-loading">

              <div className="loader"></div>

              <span>
                Fetching live LeetCode data...
              </span>

            </div>
          )}

          {/* =================================
              ERROR
          ================================= */}

          {!loading && error && (
            <div className="coding-error">

              <span>
                Unable to fetch live
                LeetCode data.
              </span>

              <button
                onClick={() => fetchLeetCodeData()}
              >
                Try Again
              </button>

              <a
                href="https://leetcode.com/u/Yogesh_Maurya12/"
                target="_blank"
                rel="noreferrer"
              >
                Open LeetCode ↗
              </a>

            </div>
          )}

          {/* =================================
              DATA
          ================================= */}

          {!loading &&
            !error &&
            profile && (
              <>

                {/* =================================
                    STATS
                ================================= */}

                <div className="leetcode-stats">

                  {/* PROBLEMS SOLVED */}

                  <div className="leetcode-stat primary-stat">

                    <strong>
                      {solved}
                    </strong>

                    <span>
                      Problems Solved
                    </span>

                  </div>

                  {/* ACTIVE DAYS */}

                  <div className="leetcode-stat">

                    <strong>
                      {activeDays}
                    </strong>

                    <span>
                      Active Days
                    </span>

                  </div>

                  {/* STREAK */}

                  <div className="leetcode-stat">

                    <strong>
                      {streak}
                    </strong>

                    <span>
                      Current Streak
                    </span>

                  </div>

                  {/* GLOBAL RANK */}

                  <div className="leetcode-stat">

                    <strong>
                      {ranking > 0
                        ? ranking.toLocaleString()
                        : "—"}
                    </strong>

                    <span>
                      Global Rank
                    </span>

                  </div>

                </div>

                {/* =================================
                    HEATMAP
                ================================= */}

                <div className="heatmap-section">

                  {/* HEADER */}

                  <div className="heatmap-header">

                    <span>
                      Submission Activity
                    </span>

                    <div className="heatmap-legend">

                      <span>
                        Less
                      </span>

                      <i className="level-0"></i>

                      <i className="level-1"></i>

                      <i className="level-2"></i>

                      <i className="level-3"></i>

                      <i className="level-4"></i>

                      <span>
                        More
                      </span>

                    </div>

                  </div>

                  {/* HEATMAP */}

                  <div className="heatmap-wrapper">

                    <div className="heatmap">

                      {heatmap.map(
                        (day, index) => (
                          <div
                            key={`${day.timestamp}-${index}`}
                            className={`heat-cell level-${getLevel(
                              day.count
                            )}`}
                            title={`${day.count} submission${
                              day.count !== 1
                                ? "s"
                                : ""
                            } on ${day.date.toDateString()}`}
                          ></div>
                        )
                      )}

                    </div>

                  </div>

                  {/* FOOTER */}

                  <div className="heatmap-footer">

                    <span>
                      Last 12 months
                    </span>

                    <span>
                      Live data •
                      refreshes every
                      30 min
                    </span>

                  </div>

                </div>

              </>
            )}

        </div>

        {/* =================================
            GITHUB + LINKEDIN
        ================================= */}

        {/* Other Profiles */}
<div className="other-profiles">

  {/* GitHub */}
  <a
    href="https://github.com/Yogesh1212-eng"
    target="_blank"
    rel="noreferrer"
    className="profile-card"
  >
    <div className="profile-card-icon github-icon">
      <img
        src="/github.png"
        alt="GitHub"
      />
    </div>

    <div className="profile-card-content">
      <span>GitHub</span>
      <strong>Yogesh1212-eng</strong>
    </div>

    <span className="profile-arrow">↗</span>
  </a>

  {/* LinkedIn */}
  <a
    href="https://www.linkedin.com/in/yogesh-maurya-4010b2325/"
    target="_blank"
    rel="noreferrer"
    className="profile-card"
  >
    <div className="profile-card-icon linkedin-icon">
      <img
        src="/linkedin.png"
        alt="LinkedIn"
      />
    </div>

    <div className="profile-card-content">
      <span>LinkedIn</span>
      <strong>Yogesh Maurya</strong>
    </div>

    <span className="profile-arrow">↗</span>
  </a>

</div>
</div>

    

    </section>
  );
}

export default CodingProfile;