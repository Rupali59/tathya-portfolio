"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, Server, Database, Settings } from "lucide-react";
import Logo from "../common/Logo";
import { useTactileEvents } from "@/providers/TactileProvider";

const navigation = [
  { name: "OVERVIEW", href: "/dashboard", icon: LayoutDashboard },
  { name: "MY_BLADES", href: "/dashboard/blades", icon: Server },
  { name: "THE_VAULT", href: "/dashboard/vault", icon: Database },
  { name: "SETTINGS", href: "/dashboard/settings", icon: Settings },
];

export default function DashboardSidebar() {
  const pathname = usePathname();
  const { onPointerDown } = useTactileEvents("soft");

  return (
    <div className="fixed inset-y-0 left-0 z-50 w-64 border-r border-blue-900/30 bg-black/50 backdrop-blur-xl flex flex-col">
      <div className="p-6 flex items-center gap-4">
        <Logo size="sm" />
        <span className="font-mono text-xs font-bold tracking-widest text-foreground">
          COCKPIT
        </span>
      </div>

      <nav className="flex-1 px-4 py-8 space-y-2">
        {navigation.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.name}
              href={item.href}
              onPointerDown={onPointerDown}
              className={`group flex items-center gap-3 px-4 py-3 text-xs font-mono font-bold tracking-wider rounded-lg transition-all ${
                isActive
                  ? "bg-blue-500/10 text-blue-400 border border-blue-500/20 shadow-[0_0_10px_rgba(59,130,246,0.2)]"
                  : "text-muted-foreground hover:text-foreground hover:bg-white/5"
              }`}
            >
              <item.icon
                className={`w-4 h-4 ${
                  isActive
                    ? "text-blue-400"
                    : "text-muted-foreground group-hover:text-foreground"
                }`}
              />
              {item.name}
            </Link>
          );
        })}
      </nav>

      <div className="p-6 border-t border-white/5">
        <div className="flex items-center gap-3 text-muted-foreground/50">
          <div className="w-2 h-2 rounded-full bg-emerald-900" />
          <span className="text-[10px] font-mono tracking-widest">
            SECURE_LINK
          </span>
        </div>
      </div>
    </div>
  );
}
