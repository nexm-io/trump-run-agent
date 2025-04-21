import React, { useEffect, useMemo, useState } from "react";

export default function LoadingPage({ progress = 0.1 }) {
  // const [progressBarItems, setProgressBarItems] = useState(0);

  return (
    <div
      style={{
        backgroundImage: `url("/images/loading-background.png")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "100vh",
        width: "100%",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "end",
          minHeight: "100vh",
        }}
      >
        <div
          style={{
            textAlign: "center",
            fontSize: "20px",
            color: "white",
          }}
        >
          Loading {(progress * 100).toFixed(0)}%
        </div>
        <div style={{ marginTop: "12px", position: "relative" }}>
          <img src="/images/progress-bar.png" alt="progressBar" style={{ width: "100%", height: "30px" }} />
          <img
            src="/images/progress.png"
            alt="progress"
            style={{
              position: "absolute",
              width: `${progress * 100}%`,
              height: "100%",
              zIndex: 1,
              top: 0,
            }}
          />
        </div>
      </div>
    </div>
  );
}
