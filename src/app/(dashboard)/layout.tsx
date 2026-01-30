import { Suspense } from "react";
import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import DashboardHeader from "@/components/dashboard/DashboardHeader";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // Forced Dark Mode container for the dashboard
    <div className="min-h-screen bg-[#000000] text-foreground dark">
      <DashboardSidebar />
      <DashboardHeader />
      <main className="pl-64 pt-16">
        <div className="max-w-7xl mx-auto px-8 py-8">
          <Suspense
            fallback={
              <div className="font-mono text-xs text-blue-500">
                INITIALIZING_VIEWPORT...
              </div>
            }
          >
            {children}
          </Suspense>
        </div>
      </main>
    </div>
  );
}
