import { ImageResponse } from "next/og";
import { readFile } from "fs/promises";
import path from "path";

export const runtime = "nodejs";
export const alt = "ROTEM BARUCH dance tutorials";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

const getImageDataUrl = async () => {
  const filePath = path.join(process.cwd(), "app/assert/IMG_5712.svg");
  const svg = await readFile(filePath, "utf8");
  return `data:image/svg+xml;base64,${Buffer.from(svg).toString("base64")}`;
};

export default async function OpenGraphImage() {
  const imageSrc = await getImageDataUrl();

  return new ImageResponse(
    <div
      style={{
        display: "flex",
        width: "100%",
        height: "100%",
        background: "#f8f7f4",
      }}
    >
      <img
        src={imageSrc}
        alt="ROTEM BARUCH dance tutorials"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />
    </div>,
    size,
  );
}
