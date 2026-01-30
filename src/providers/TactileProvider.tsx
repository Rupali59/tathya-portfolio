"use client";

import type React from "react";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
} from "react";

type TactileEffect = "soft" | "heavy" | "snap";

interface TactileContextType {
  trigger: (effect: TactileEffect) => void;
}

const TactileContext = createContext<TactileContextType | null>(null);

const HAPTIC_PATTERNS = {
  soft: 10,
  heavy: [20, 40],
  snap: [15, 30, 15],
};

export function TactileProvider({ children }: { children: React.ReactNode }) {
  const sounds = useRef<{ [key: string]: HTMLAudioElement }>({});

  useEffect(() => {
    // EAGER LOADING: Load all audio files into memory ONCE
    if (typeof window !== "undefined") {
      sounds.current = {
        soft: new Audio("/audio/soft-click.mp3"),
        heavy: new Audio("/audio/heavy-click.mp3"),
        snap: new Audio("/audio/snap.mp3"),
      };

      // Warm up the audio context & set preload
      Object.values(sounds.current).forEach((audio) => {
        audio.preload = "auto";
        audio.volume = 0.15;
        audio.load();
      });
    }
  }, []);

  const trigger = useCallback((type: TactileEffect) => {
    const sound = sounds.current[type];

    // LATENCY KILLER: Reset time and play immediately
    if (sound) {
      sound.currentTime = 0;
      sound.play().catch(() => {
        // Ignore autoplay restrictions
      });

      // SYNC HAPTICS
      if (typeof navigator !== "undefined" && navigator.vibrate) {
        try {
          navigator.vibrate(HAPTIC_PATTERNS[type]);
        } catch (_e) {
          // Ignore vibration errors (e.g. user hasn't interacted with page)
        }
      }

      // Dev logging
      if (process.env.NODE_ENV === "development") {
        console.log(`[Tactile] ${type} triggered`);
      }
    }
  }, []);

  return (
    <TactileContext.Provider value={{ trigger }}>
      {children}
    </TactileContext.Provider>
  );
}

export function useTactile() {
  const context = useContext(TactileContext);
  if (!context) {
    throw new Error("useTactile must be used within a TactileProvider");
  }
  return context;
}

/**
 * Higher Order Hook for attaching tactile events
 * LATENCY KILLER: Uses onPointerDown instead of onClick
 */
export function useTactileEvents(effect: TactileEffect = "soft") {
  const { trigger } = useTactile();

  const onPointerDown = useCallback(
    (e: React.PointerEvent) => {
      // Only trigger for primary button
      if (e.button === 0) {
        trigger(effect);
      }
    },
    [effect, trigger],
  );

  return { onPointerDown };
}
