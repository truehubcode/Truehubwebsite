import { ImageResponse } from "next/og";
import { site } from "@/data/site";

export const alt = site.name;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(135deg, #0b1a33 0%, #14305a 60%, #1b3f73 100%)",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", fontSize: 96, fontWeight: 800, letterSpacing: -3, lineHeight: 1 }}>
          <span>TRUE</span>
          <span style={{ color: "#c9962b" }}>HUB</span>
        </div>
        <div style={{ display: "flex", fontSize: 32, letterSpacing: 14, color: "#c4c7cc", marginTop: 14 }}>
          TECH &amp; SYSTEMS
        </div>
        <div style={{ display: "flex", fontSize: 30, marginTop: 56, color: "#e3eaf5", maxWidth: 900, lineHeight: 1.4 }}>
          Genuine industrial automation products, engineering services and pan-India support.
        </div>
        <div style={{ display: "flex", gap: 36, marginTop: 44, fontSize: 22, color: "#e0b24a", fontWeight: 700, letterSpacing: 3 }}>
          {site.pillars.map((p) => (
            <span key={p}>{p.toUpperCase()}</span>
          ))}
        </div>
      </div>
    ),
    { ...size },
  );
}
