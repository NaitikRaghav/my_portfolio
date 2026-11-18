
import { ImageResponse } from "next/og";

export const size = {
  width: 180,
  height: 180,
};

export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #21143F, #08051C)",
          borderRadius: "38px",
          border: "4px solid #8055C9",
          color: "#E9D5FF",
          fontSize: 76,
          fontWeight: 800,
          letterSpacing: "-7px",
          fontFamily: "Arial",
        }}
      >
        NR
      </div>
    ),
    {
      ...size,
    }
  );
}
