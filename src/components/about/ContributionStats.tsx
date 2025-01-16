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
  const [loading, setLoading] = useState<boolean>(true); // Loading state added

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
      } finally {
        setLoading(false); // Stop loading after fetching data
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

  if (loading) return <div>Loading contributions...</div>; // Show loading message

  if (error) return <div>{error}</div>;

  return (
    <div className="contribution-stats">
      <h1 className="text-[25px] opacity-[0.8]">GitHub Contributions</h1>
      <p>{totalContributions} contributions within the last year</p>
      <div className="flex items-start opacity-[0.6]">
        <div className="mt-8 mr-2">
          {daysOfWeek.map((day, index) => (
            <div key={index} className="flex flex-col gap-5 text-right text-[12px]">
              {day}
            </div>
          ))}
        </div>

        <div
          className="calendar"
          style={{
            display: "grid",
            gridTemplateColumns: `repeat(${contributions.length}, 12px)`,
            gap: "5px",
          }}
        >
          {contributions.map((_, weekIndex) => {
            const monthLabel = getMonthLabels().find((m) => m.index === weekIndex)?.label;
            return (
              <div
                key={weekIndex}
                style={{
                  textAlign: "center",
                  fontSize: "12px",
                  height: "14px",
                }}
              >
                {monthLabel || ""}
              </div>
            );
          })}

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
                  }}
                ></div>
              );
            })
          )}
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "end",
          gap: "10px",
          marginTop: "10px",
          fontSize: "12px",
        }}
      >
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
