import React, { useEffect, useState } from "react";
import axios from "axios";

interface ContributionDay {
  date: string;
  contributionCount: number;
  color: string;
}

interface ContributionWeek {
  contributionDays: ContributionDay[];
}

const ContributionStats: React.FC = () => {
  const [contributions, setContributions] = useState<ContributionWeek[]>([]);
  const [totalContributions, setTotalContributions] = useState<number>(0);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const fetchContributions = async () => {
      const query = `
        query {
          user(login: "kingsleyibe") {
            contributionsCollection {
              contributionCalendar {
                totalContributions
                weeks {
                  contributionDays {
                    date
                    contributionCount
                    color
                  }
                }
              }
            }
          }
        }
      `;

      try {
        const response = await axios.post(
          "https://api.github.com/graphql",
          { query },
          {
            headers: {
              Authorization: `Bearer ${process.env.REACT_APP_GITHUB_TOKEN}`,
            },
          }
        );

        const data = response.data.data.user.contributionsCollection.contributionCalendar;
        setContributions(data.weeks);
        setTotalContributions(data.totalContributions);
      } catch (err) {
        setError("Failed to fetch contributions. Please try again later.");
      }
    };

    fetchContributions();
  }, []);

  const getMonthLabels = () => {
    const months: { index: number; label: string }[] = [];
    contributions.forEach((week, weekIndex) => {
      week.contributionDays.forEach((day) => {
        const date = new Date(day.date);
        const month = date.toLocaleString("default", { month: "short" });
        if (!months.some((m) => m.label === month)) {
          months.push({ index: weekIndex, label: month });
        }
      });
    });
    return months;
  };

  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  if (error) return <div>{error}</div>;

  return (
    <div className="contribution-stats">
      <h1 className="text-[25px] opacity-[0.8]">GitHub Contributions</h1>
      <p>{totalContributions} contributions within the last year</p>
      <div
        className="calendar"
        style={{
          display: "grid",
          gridTemplateColumns: `40px repeat(${contributions.length}, 12px)`,
          gap: "2px",
        }}
      >
        {/* Month Labels */}
        <div></div>
        {contributions.map((_, weekIndex) => {
          const monthLabel = getMonthLabels().find((m) => m.index === weekIndex)?.label;
          return (
            <div key={weekIndex} style={{ textAlign: "center", fontSize: "12px" }}>
              {monthLabel || ""}
            </div>
          );
        })}

        {/* Days of the Week (Vertical) */}
        {daysOfWeek.map((day, index) => (
          <div key={index} style={{ textAlign: "right", fontSize: "12px", paddingRight: "5px" }}>
            {day}
          </div>
        ))}

        {/* Contribution Grid */}
        {daysOfWeek.map((_, dayIndex) =>
          contributions.map((week, weekIndex) => {
            const day = week.contributionDays[dayIndex];
            return (
              <div
                key={`${weekIndex}-${dayIndex}`}
                className="day"
                title={day ? `Date: ${day.date}, Contributions: ${day.contributionCount}` : ""}
                style={{
                  backgroundColor: day ? day.color : "transparent",
                  width: "12px",
                  height: "12px",
                  margin: "2px",
                }}
              ></div>
            );
          })
        )}
      </div>
      <div style={{ display: "flex", justifyContent: "end", gap: "10px", marginTop: "10px", fontSize: "12px" }}>
        <span>Less</span>
        <div style={{ display: "flex", gap: "4px" }}>
          <div style={{ width: "12px", height: "12px", backgroundColor: "#eee" }}></div>
          <div style={{ width: "12px", height: "12px", backgroundColor: "#9be9a8" }}></div>
          <div style={{ width: "12px", height: "12px", backgroundColor: "#40c463" }}></div>
          <div style={{ width: "12px", height: "12px", backgroundColor: "#30a14e" }}></div>
          <div style={{ width: "12px", height: "12px", backgroundColor: "#216e39" }}></div>
        </div>
        <span>More</span>
      </div>
    </div>
  );
};

export default ContributionStats;
