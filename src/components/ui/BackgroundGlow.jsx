export default function BackgroundGlow() {
  return (
    <>
      <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-blue-600/20 blur-3xl" />

      <div className="absolute top-40 right-0 h-80 w-80 rounded-full bg-cyan-500/20 blur-3xl" />

      <div className="absolute bottom-0 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-indigo-500/10 blur-3xl" />
    </>
  );
}