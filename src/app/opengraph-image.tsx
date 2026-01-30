/* eslint-disable no-restricted-syntax */
import { ImageResponse } from "next/og";

// Route segment config
export const runtime = "edge";

// Image metadata
export const alt = "Tathya - Digital Industrial Infrastructure";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

// Image generation
export default async function Image() {
  return new ImageResponse(
    // ImageResponse JSX element
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#030712", // zinc-950
        color: "white",
        fontFamily: "monospace",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background Grid */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "radial-gradient(circle at 2px 2px, rgba(37,99,235,0.15) 1px, transparent 0)",
          backgroundSize: "40px 40px",
          zIndex: 0,
        }}
      />

      {/* Decorative Industrial Border */}
      <div
        style={{
          position: "absolute",
          inset: "20px",
          border: "1px solid rgba(37,99,235,0.3)",
          display: "flex",
          zIndex: 1,
        }}
      >
        {/* Corner accents */}
        <div
          style={{
            position: "absolute",
            top: "-1px",
            left: "-1px",
            width: "20px",
            height: "20px",
            borderTop: "4px solid #2563eb",
            borderLeft: "4px solid #2563eb",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-1px",
            right: "-1px",
            width: "20px",
            height: "20px",
            borderBottom: "4px solid #2563eb",
            borderRight: "4px solid #2563eb",
          }}
        />
      </div>

      {/* Center Content */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          zIndex: 10,
          gap: "20px",
        }}
      >
        <div
          style={{
            padding: "10px 20px",
            backgroundColor: "rgba(37,99,235,0.1)",
            border: "1px solid #2563eb",
            color: "#3b82f6",
            fontSize: 20,
            letterSpacing: "4px",
            textTransform: "uppercase",
            borderRadius: "4px",
          }}
        >
          System_Manifest_v5.0
        </div>
        <div
          style={{
            fontSize: 90,
            fontWeight: 900,
            background: "linear-gradient(to bottom right, #fff, #94a3b8)",
            backgroundClip: "text",
            color: "transparent",
            letterSpacing: "-4px",
            lineHeight: 1,
          }}
        >
          TATHYA.DEV
        </div>
        <div
          style={{
            fontSize: 30,
            color: "#94a3b8",
            letterSpacing: "2px",
            textTransform: "uppercase",
          }}
        >
          Industrial Prestige Architecture
        </div>
      </div>

      {/* Bottom Status Bar */}
      <div
        style={{
          position: "absolute",
          bottom: "40px",
          display: "flex",
          gap: "40px",
          fontSize: 16,
          color: "#64748b",
          zIndex: 10,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <div
            style={{
              width: "10px",
              height: "10px",
              borderRadius: "50%",
              backgroundColor: "#10b981",
            }}
          />
          SYSTEM_OPERATIONAL
        </div>
        <div>latency: 12ms</div>
        <div>uptime: 99.99%</div>
      </div>
    </div>,
    // ImageResponse options
    {
      ...size,
    },
  );
}
