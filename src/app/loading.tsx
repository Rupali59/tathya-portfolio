export default function Loading() {
  return (
    <div className="min-h-screen bg-bg-primary flex items-center justify-center">
      <div className="text-center">
        <div className="ripple-spinner mb-4">
          <div></div>
          <div></div>
          <div></div>
        </div>
        <p className="text-text-secondary">Loading...</p>
      </div>
    </div>
  );
}
