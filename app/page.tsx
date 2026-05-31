export default function Page() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block bg-[#58a6ff]/10 text-[#58a6ff] text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-6">
          Etsy SEO Tool
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-6">
          Track Etsy Listing Rankings<br />
          <span className="text-[#58a6ff]">for Any Keyword</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-10">
          Monitor where your products appear in Etsy search, spy on competitors, and get data-driven SEO tips — all in one dashboard.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold text-lg px-8 py-4 rounded-xl transition-colors duration-200"
        >
          Start Tracking — $12/mo
        </a>
        <p className="mt-4 text-sm text-[#8b949e]">Cancel anytime. No contracts.</p>
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          {[
            { icon: "📈", title: "Rank Monitoring", desc: "Automated daily checks of your listing positions for target keywords." },
            { icon: "🔍", title: "Competitor Insights", desc: "See who outranks you and what they're doing differently." },
            { icon: "💡", title: "SEO Recommendations", desc: "Actionable tips to improve titles, tags, and descriptions." }
          ].map((f) => (
            <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="text-2xl mb-3">{f.icon}</div>
              <h3 className="text-white font-semibold mb-1">{f.title}</h3>
              <p className="text-sm text-[#8b949e]">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border-2 border-[#58a6ff] rounded-2xl p-8 text-center">
          <p className="text-[#58a6ff] font-semibold uppercase tracking-widest text-xs mb-2">Pro Plan</p>
          <div className="text-5xl font-extrabold text-white mb-1">$12<span className="text-xl font-normal text-[#8b949e]">/mo</span></div>
          <p className="text-[#8b949e] text-sm mb-6">Everything you need to dominate Etsy search</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Track up to 50 keywords",
              "Daily automated rank checks",
              "Competitor position tracking",
              "Historical ranking charts",
              "SEO optimization suggestions",
              "Email alerts for rank changes"
            ].map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-xl transition-colors duration-200"
          >
            Get Started Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: "How does the rank tracking work?",
              a: "We run automated searches on Etsy for your target keywords and record where your listings appear. Results are updated daily and stored so you can see trends over time."
            },
            {
              q: "Can I track my competitors too?",
              a: "Yes. Add any Etsy shop or listing URL and we'll track their positions alongside yours, giving you a clear competitive picture."
            },
            {
              q: "What if I want to cancel?",
              a: "You can cancel anytime from your billing portal. No questions asked, no lock-in contracts."
            }
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <h3 className="text-white font-semibold mb-2">{item.q}</h3>
              <p className="text-sm text-[#8b949e]">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-xs text-[#8b949e] pb-8">
        © {new Date().getFullYear()} Etsy SEO Rank Tracker. All rights reserved.
      </footer>
    </main>
  );
}
