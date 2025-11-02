import NavigationHeader from "@/components/NavigationHeader";
import Footer from "@/components/Footer";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import Link from "next/link";

export const metadata = {
  title: "x402 on FastAPI (Python) - Coming Soon - Originary",
  robots: { index: false, follow: true },
};

export default function Page(){
  return (
    <>
      <NavigationHeader />
      <main className="max-w-3xl mx-auto px-4 py-10">
        <Breadcrumbs trail={[
          {href:"/", label:"Home"},
          {href:"/integrations/x402/", label:"x402"},
          {href:"/integrations/x402/python-fastapi/", label:"FastAPI"}
        ]}/>

        <h1 className="text-3xl font-bold mb-4">x402 on FastAPI (Python)</h1>

        <div className="p-6 bg-amber-50 border border-amber-200 rounded-lg mb-6">
          <p className="text-amber-900 font-medium">Coming soon</p>
          <p className="text-amber-800 mt-2">
            We&rsquo;re preparing a minimal <code className="bg-amber-100 px-1.5 py-0.5 rounded">@app.get(&quot;/priced&quot;)</code> implementation that returns 402 and verifies receipts.
          </p>
        </div>

        <p className="text-gray-700 leading-relaxed mb-6">
          While we finalize the FastAPI guide, you can explore the pattern with other stacks:
        </p>

        <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mb-8">
          <li><Link href="/integrations/x402/express-node/" className="text-blue-600 hover:underline font-medium">Express (Node)</Link></li>
          <li><Link href="/integrations/x402/nextjs/" className="text-blue-600 hover:underline font-medium">Next.js / Edge runtime</Link></li>
          <li><Link href="/integrations/x402/cloudflare-workers/" className="text-blue-600 hover:underline font-medium">Cloudflare Workers</Link></li>
        </ul>

        <div className="p-6 bg-gray-50 rounded-lg border">
          <h3 className="text-xl font-semibold mb-3">Return to x402 guide</h3>
          <Link href="/integrations/x402/" className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium">
            x402 Pillar Guide
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
