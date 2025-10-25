import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Canadian Chinchilla Rescue";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #ffffff 0%, #fef2f2 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "80px",
          position: "relative",
        }}
      >
        {/* Background Pattern */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            opacity: 0.05,
            backgroundImage:
              "radial-gradient(circle at 2px 2px, #000 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
        />

        {/* Content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            zIndex: 1,
          }}
        >
          <h1
            style={{
              fontSize: "80px",
              fontWeight: 700,
              lineHeight: 1.1,
              color: "#0a0a0a",
              marginBottom: "24px",
              letterSpacing: "-0.02em",
            }}
          >
            Canadian Chinchilla Rescue
          </h1>
          <p
            style={{
              fontSize: "32px",
              fontWeight: 500,
              color: "#737373",
              marginTop: 0,
              marginBottom: "40px",
              lineHeight: 1.4,
            }}
          >
            Every Chinchilla Deserves a Home
          </p>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
              padding: "20px 40px",
              background: "linear-gradient(135deg, #dc2626 0%, #ef4444 100%)",
              borderRadius: "12px",
              color: "white",
              fontSize: "28px",
              fontWeight: 600,
            }}
          >
            Find Your New Companion
          </div>
        </div>

        {/* Bottom Brand */}
        <div
          style={{
            position: "absolute",
            bottom: "60px",
            display: "flex",
            alignItems: "center",
            gap: "12px",
            fontSize: "24px",
            fontWeight: 600,
            color: "#737373",
          }}
        >
          🐭 canadianchinchilla.ca
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
