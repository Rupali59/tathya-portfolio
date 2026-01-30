"use client";

import dynamic from "next/dynamic";

const ConfigurationBay = dynamic(
  () => import("@/components/sections/ConfigurationBay"),
  {
    ssr: false,
    loading: () => (
      <div className="py-20 bg-black relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#121212] p-8 rounded-lg border border-blue-600/20 animate-pulse">
            <div className="h-8 bg-blue-600/10 rounded w-1/3 mb-4"></div>
            <div className="h-4 bg-blue-600/10 rounded w-2/3"></div>
          </div>
        </div>
      </div>
    ),
  },
);

export default function DynamicConfigurationBay() {
  return <ConfigurationBay />;
}
