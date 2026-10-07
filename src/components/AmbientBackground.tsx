export default function AmbientBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden>
      <div className="absolute inset-0 grid-fade opacity-60" />
      <div className="absolute -left-24 top-[-10%] h-[42rem] w-[42rem] rounded-full bg-[hsl(var(--glow)/0.12)] blur-[120px]" />
      <div className="absolute right-[-12%] top-[18%] h-[32rem] w-[32rem] rounded-full bg-sky-500/10 blur-[110px]" />
      <div className="absolute bottom-[-20%] left-[20%] h-[28rem] w-[40rem] rounded-full bg-fuchsia-500/8 blur-[120px]" />
    </div>
  );
}
