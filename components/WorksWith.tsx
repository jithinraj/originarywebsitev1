export default function WorksWith() {
  const items = ["MCP", "A2A", "x402", "Stripe", "Circle", "Cloudflare", "Vercel"];

  return (
    <div aria-label="Works with" className="flex flex-wrap gap-4 items-center opacity-80">
      <span className="text-sm">Works with</span>
      {items.map(item => (
        <span key={item} className="text-sm">{item}</span>
      ))}
    </div>
  );
}