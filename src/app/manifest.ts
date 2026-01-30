import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Tathya | Industrial Prestige",
    short_name: "Tathya",
    description: "Premium Digital Growth Infrastructure & CRM Solutions",
    start_url: "/",
    display: "standalone",
    background_color: "#000000",
    theme_color: "#0f172a",
    icons: [
      {
        src: "/icon.png",
        sizes: "any",
        type: "image/png",
      },
    ],
  };
}
