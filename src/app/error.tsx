"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}): JSX.Element {
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#000",
        color: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div style={{ textAlign: "center" }}>
        <h1
          style={{ fontSize: "4rem", fontWeight: "bold", marginBottom: "1rem" }}
        >
          500
        </h1>
        <h2 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>
          Something went wrong!
        </h2>
        <p style={{ color: "#9ca3af", marginBottom: "2rem" }}>
          We&apos;re sorry, but something unexpected happened.
        </p>
        <button
          onClick={reset}
          style={{
            backgroundColor: "#10b981",
            color: "#fff",
            padding: "0.75rem 1.5rem",
            borderRadius: "0.5rem",
            border: "none",
            cursor: "pointer",
          }}
        >
          Try again
        </button>
      </div>
    </div>
  );
}
