import { ImageResponse } from "next/og";
import { business } from "@/lib/business";

export const alt = "SS Cleaning LLC: house, office and post-construction cleaning in Northeast Ohio";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#102746",
          padding: 56,
          gap: 48,
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", flex: 1, color: "#f4f6f8" }}>
          <div style={{ fontSize: 30, fontWeight: 800, letterSpacing: 2, color: "#b9c8de" }}>SS CLEANING LLC</div>
          <div style={{ fontSize: 68, fontWeight: 900, lineHeight: 0.95, textTransform: "uppercase" }}>
            Clean homes, offices &amp; job sites across Northeast Ohio
          </div>
          <div
            style={{
              display: "flex",
              alignSelf: "flex-start",
              background: "#f6e37c",
              color: "#102746",
              fontSize: 40,
              fontWeight: 800,
              padding: "10px 22px",
            }}
          >
            {business.phoneDisplay}
          </div>
        </div>
        <div style={{ display: "flex", position: "relative", width: 360 }}>
          <div style={{ position: "absolute", top: 30, left: 24, width: 340, height: 500, background: "#f3c3cf" }} />
          <div style={{ position: "absolute", top: 15, left: 12, width: 340, height: 500, background: "#f6e37c" }} />
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: 340,
              height: 500,
              background: "#f4f6f8",
              display: "flex",
              flexDirection: "column",
              padding: 28,
              color: "#16305a",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", borderBottom: "4px solid #16305a", paddingBottom: 14 }}>
              <div style={{ fontSize: 26, fontWeight: 900 }}>WORK ORDER</div>
              <div style={{ fontSize: 28, fontWeight: 700, color: "#bf3228" }}>0504</div>
            </div>
            {["Residential", "Commercial / Office", "Post-construction"].map((s) => (
              <div key={s} style={{ display: "flex", alignItems: "center", gap: 14, marginTop: 26, fontSize: 24, fontWeight: 700 }}>
                <div style={{ width: 26, height: 26, border: "3px solid #16305a", display: "flex" }} />
                {s}
              </div>
            ))}
            <div style={{ marginTop: "auto", fontSize: 18, color: "#4a5d7c" }}>
              Insured · Workers&apos; comp · BBB A+ · 5.0 on Google
            </div>
          </div>
        </div>
      </div>
    ),
    size,
  );
}
