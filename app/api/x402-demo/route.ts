export const runtime = "edge";

export async function GET() {
  const payload = {
    detail: "Payment required to access this resource.",
    payment: {
      protocol: "x402",
      amount: "0.10",
      currency: "USDC",
      reference: "demo-402-abc123",
      instructions: "Pay using your client wallet and present a receipt in the follow-up request."
    }
  };

  return new Response(JSON.stringify(payload), {
    status: 402,
    headers: {
      "content-type": "application/json; charset=utf-8",
      "cache-control": "no-store",
      "x-robots-tag": "noindex, nofollow, noarchive"
    }
  });
}
