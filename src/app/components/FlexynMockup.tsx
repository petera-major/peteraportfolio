"use client";

import { useState } from "react";

type TabId = "workouts" | "progress" | "ai";

const WORKOUTS = [
  {
    id: 1,
    name: "Hip Thrust",
    meta: "4 sets · 185 lbs",
    icon: "ti-barbell",
    iconColor: "#C8FF00",
    iconBg: "#C8FF0015",
    badge: "Done",
    badgeStyle: { background: "#1a3300", color: "#66CC00" },
    sets: [
      { label: "Set 1", value: "12 reps · 185 lb", done: true },
      { label: "Set 2", value: "10 reps · 185 lb", done: true },
      { label: "Set 3", value: "10 reps · 185 lb", done: true },
      { label: "Set 4", value: "8 reps · 195 lb", done: true },
    ],
  },
  {
    id: 2,
    name: "Romanian Deadlift",
    meta: "3 sets · 135 lbs",
    icon: "ti-arrow-down",
    iconColor: "#4488FF",
    iconBg: "#4488FF15",
    badge: "Active",
    badgeStyle: { background: "#C8FF0020", color: "#C8FF00" },
    sets: [
      { label: "Set 1", value: "12 reps · 135 lb", done: true },
      { label: "Set 2", value: "— reps · 135 lb", done: false },
      { label: "Set 3", value: "— reps · 135 lb", done: false },
    ],
  },
  {
    id: 3,
    name: "Leg Press",
    meta: "4 sets · 200 lbs",
    icon: "ti-trending-up",
    iconColor: "#FF6B35",
    iconBg: "#FF6B3515",
    badge: "Up next",
    badgeStyle: { background: "#333", color: "#888" },
    sets: [],
  },
  {
    id: 4,
    name: "StairMaster",
    meta: "20 min · Level 8",
    icon: "ti-walk",
    iconColor: "#AA44FF",
    iconBg: "#AA44FF15",
    badge: "Cardio",
    badgeStyle: { background: "#333", color: "#888" },
    sets: [],
  },
];

export default function FlexynMockup() {
  const [activeTab, setActiveTab] = useState<TabId>("workouts");
  const [expandedCards, setExpandedCards] = useState<Set<number>>(new Set([1]));

  const toggleCard = (id: number) => {
    setExpandedCards((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        padding: "2rem 0 1rem",
      }}
    >
      {/* Phone shell */}
      <div
        style={{
          width: "300px",
          background: "#0f0f0f",
          borderRadius: "36px",
          border: "2px solid #2a2a2a",
          overflow: "hidden",
          fontFamily: "system-ui, -apple-system, sans-serif",
          userSelect: "none",
        }}
      >
        {/* Status bar */}
        <div style={{ background: "#0f0f0f", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 20px 4px" }}>
          <span style={{ color: "#fff", fontSize: "13px", fontWeight: 600 }}>9:41</span>
          <div style={{ display: "flex", gap: "5px", alignItems: "center" }}>
            <i className="ti ti-wifi" style={{ fontSize: "13px", color: "#fff" }} aria-hidden="true" />
            <i className="ti ti-battery" style={{ fontSize: "13px", color: "#fff" }} aria-hidden="true" />
          </div>
        </div>

        {/* Screen */}
        <div style={{ background: "#111" }}>
          {/* Header */}
          <div style={{ padding: "14px 20px 8px" }}>
            <div style={{ color: "#555", fontSize: "11px", fontWeight: 600, letterSpacing: "0.5px", marginBottom: "2px" }}>
              GOOD MORNING, TERA
            </div>
            <div style={{ color: "#fff", fontSize: "20px", fontWeight: 700 }}>
              Today&apos;s <span style={{ color: "#C8FF00" }}>Split</span>
            </div>
          </div>

          {/* Tabs */}
          <div style={{ display: "flex", gap: 0, padding: "8px 20px 0" }}>
            {(["workouts", "progress", "ai"] as TabId[]).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                style={{
                  fontSize: "12px",
                  fontWeight: 600,
                  padding: "5px 12px",
                  borderRadius: "20px",
                  cursor: "pointer",
                  border: "none",
                  fontFamily: "inherit",
                  textTransform: "capitalize",
                  background: activeTab === tab ? "#C8FF00" : "transparent",
                  color: activeTab === tab ? "#0f0f0f" : "#555",
                  transition: "all 0.15s",
                }}
              >
                {tab === "ai" ? "AI Coach" : tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>

          {/* WORKOUTS TAB */}
          {activeTab === "workouts" && (
            <>
              {/* Day strip */}
              <div style={{ display: "flex", gap: "5px", padding: "10px 16px", overflowX: "auto" }}>
                {[
                  { d: "MON", n: "9", done: true },
                  { d: "TUE", n: "10", done: true },
                  { d: "WED", n: "11", today: true },
                  { d: "THU", n: "12" },
                  { d: "FRI", n: "13" },
                  { d: "SAT", n: "14" },
                ].map((day) => (
                  <div
                    key={day.d}
                    style={{
                      flexShrink: 0,
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      gap: "2px",
                      padding: "7px 9px",
                      borderRadius: "10px",
                      background: day.today ? "#C8FF00" : "transparent",
                      cursor: "pointer",
                    }}
                  >
                    <span style={{ fontSize: "10px", fontWeight: 500, color: day.today ? "#0f0f0f" : "#555" }}>{day.d}</span>
                    <span style={{ fontSize: "14px", fontWeight: 700, color: day.today ? "#0f0f0f" : day.done ? "#C8FF00" : "#666" }}>{day.n}</span>
                  </div>
                ))}
              </div>

              <div style={{ padding: "2px 16px 8px", color: "#444", fontSize: "10px", fontWeight: 600, letterSpacing: "1px" }}>
                GLUTES &amp; LEGS DAY
              </div>

              {/* Workout cards */}
              <div style={{ padding: "0 10px 8px", display: "flex", flexDirection: "column", gap: "6px" }}>
                {WORKOUTS.map((w) => (
                  <div
                    key={w.id}
                    onClick={() => w.sets.length > 0 && toggleCard(w.id)}
                    style={{
                      background: "#1a1a1a",
                      borderRadius: "14px",
                      padding: "12px 14px",
                      cursor: w.sets.length > 0 ? "pointer" : "default",
                      border: expandedCards.has(w.id) ? "1px solid #C8FF0022" : "1px solid transparent",
                      transition: "border-color 0.15s",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                      <div style={{ width: "38px", height: "38px", borderRadius: "11px", background: w.iconBg, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                        <i className={`ti ${w.icon}`} style={{ fontSize: "18px", color: w.iconColor }} aria-hidden="true" />
                      </div>
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <div style={{ color: "#fff", fontSize: "13px", fontWeight: 600, marginBottom: "2px" }}>{w.name}</div>
                        <div style={{ color: "#555", fontSize: "11px" }}>{w.meta}</div>
                      </div>
                      <span style={{ fontSize: "11px", fontWeight: 600, padding: "3px 9px", borderRadius: "20px", whiteSpace: "nowrap", ...w.badgeStyle }}>
                        {w.badge}
                      </span>
                    </div>

                    {/* Expanded sets */}
                    {expandedCards.has(w.id) && w.sets.length > 0 && (
                      <div style={{ marginTop: "10px", paddingTop: "10px", borderTop: "1px solid #2a2a2a" }}>
                        {w.sets.map((set) => (
                          <div key={set.label} style={{ display: "flex", justifyContent: "space-between", padding: "5px 0", borderBottom: "1px solid #1f1f1f" }}>
                            <span style={{ color: "#555", fontSize: "11px" }}>{set.label}</span>
                            <span style={{ fontSize: "11px", fontWeight: 600, color: set.done ? "#C8FF00" : "#444" }}>{set.value}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <button
                style={{ margin: "4px 10px 8px", background: "#C8FF00", color: "#0f0f0f", border: "none", borderRadius: "13px", padding: "13px", fontSize: "13px", fontWeight: 700, fontFamily: "inherit", width: "calc(100% - 20px)", cursor: "pointer", letterSpacing: "0.3px" }}
              >
                Continue workout
              </button>
            </>
          )}

          {/* PROGRESS TAB */}
          {activeTab === "progress" && (
            <div style={{ padding: "16px 12px" }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px", marginBottom: "12px" }}>
                {[
                  { label: "THIS WEEK", value: "4", sub: "workouts", highlight: true },
                  { label: "STREAK", value: "12", sub: "days", highlight: true },
                  { label: "HIP THRUST PR", value: "195 lb", sub: "+10 lb this month", subColor: "#C8FF00" },
                  { label: "VOLUME", value: "18k lb", sub: "this week" },
                ].map((stat) => (
                  <div key={stat.label} style={{ background: "#1a1a1a", borderRadius: "12px", padding: "12px" }}>
                    <div style={{ color: "#555", fontSize: "10px", fontWeight: 600, marginBottom: "4px" }}>{stat.label}</div>
                    <div style={{ color: stat.highlight ? "#C8FF00" : "#fff", fontSize: "20px", fontWeight: 700 }}>{stat.value}</div>
                    <div style={{ color: stat.subColor ?? "#444", fontSize: "10px", marginTop: "2px" }}>{stat.sub}</div>
                  </div>
                ))}
              </div>
              <div style={{ color: "#333", fontSize: "11px", textAlign: "center", padding: "8px 0" }}>
                Charts &amp; body measurements coming soon
              </div>
            </div>
          )}

          {/* AI COACH TAB */}
          {activeTab === "ai" && (
            <div style={{ padding: "14px 10px" }}>
              <div style={{ background: "#1a1a1a", borderRadius: "14px", padding: "14px", marginBottom: "8px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "10px" }}>
                  <div style={{ width: "26px", height: "26px", background: "#C8FF0015", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <i className="ti ti-brain" style={{ fontSize: "14px", color: "#C8FF00" }} aria-hidden="true" />
                  </div>
                  <span style={{ color: "#C8FF00", fontSize: "11px", fontWeight: 700, letterSpacing: "0.5px" }}>ADAPTIVEFIT AI</span>
                </div>
                <p style={{ color: "#777", fontSize: "12px", lineHeight: 1.6, margin: 0 }}>
                  Based on your last 4 weeks, I&apos;m bumping hip thrust to{" "}
                  <span style={{ color: "#C8FF00", fontWeight: 600 }}>195 lb</span>{" "}
                  for all sets today. Your RDL data suggests a deload next week.
                </p>
              </div>
              <div style={{ background: "#1a1a1a", borderRadius: "14px", padding: "12px", marginBottom: "8px" }}>
                <div style={{ color: "#444", fontSize: "10px", fontWeight: 600, marginBottom: "8px" }}>ASK YOUR COACH</div>
                <div style={{ background: "#111", borderRadius: "10px", padding: "9px 12px", display: "flex", alignItems: "center", gap: "8px" }}>
                  <span style={{ color: "#333", fontSize: "12px", flex: 1 }}>How do I grow my glutes faster?</span>
                  <i className="ti ti-send" style={{ fontSize: "14px", color: "#C8FF00" }} aria-hidden="true" />
                </div>
              </div>
              <div style={{ color: "#2a2a2a", fontSize: "10px", textAlign: "center", padding: "4px 0" }}>
                Powered by FastAPI + LangChain
              </div>
            </div>
          )}

          {/* Bottom nav */}
          <div style={{ background: "#111", display: "flex", justifyContent: "space-around", padding: "10px 0 14px", borderTop: "1px solid #1f1f1f" }}>
            {[
              { icon: "ti-home", label: "Home", active: true },
              { icon: "ti-barbell", label: "Workouts" },
              { icon: "ti-apple", label: "Nutrition" },
              { icon: "ti-user", label: "Profile" },
            ].map((item) => (
              <button
                key={item.label}
                aria-label={item.label}
                style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "2px", cursor: "pointer", border: "none", background: "transparent", padding: "0 10px" }}
              >
                <i className={`ti ${item.icon}`} style={{ fontSize: "18px", color: item.active ? "#C8FF00" : "#333" }} aria-hidden="true" />
                <span style={{ fontSize: "9px", color: item.active ? "#C8FF00" : "#333", fontFamily: "inherit" }}>{item.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
