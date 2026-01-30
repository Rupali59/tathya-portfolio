import { Suspense } from "react";
import DashboardNavigation from "@/components/layout/DashboardNavigation";

// Dashboard layout for admin and protected routes
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background-primary">
      <DashboardNavigation />
      <main className="pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Suspense fallback={<div>Loading dashboard...</div>}>
            {children}
          </Suspense>
        </div>
      </main>
    </div>
  );
}
