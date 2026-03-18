"use client";

import { useMemo, useState } from "react";
import {
  BarChart3,
  ChevronDown,
  CreditCard,
  Download,
  Gauge,
  Globe,
  HelpCircle,
  KeyRound,
  LayoutDashboard,
  Mail,
  Settings,
  Trash2
} from "lucide-react";

type TabId = "overview" | "api" | "billing" | "settings" | "help";

const navItems: Array<{ id: TabId; label: string; icon: React.ElementType }> = [
  { id: "overview", label: "Overview", icon: LayoutDashboard },
  { id: "api", label: "API Keys", icon: KeyRound },
  { id: "billing", label: "Billing", icon: CreditCard },
  { id: "settings", label: "Account Settings", icon: Settings },
  { id: "help", label: "Help & FAQ", icon: HelpCircle }
];

const trafficByCountry = [
  { country: "United States", share: 45 },
  { country: "United Kingdom", share: 20 },
  { country: "Germany", share: 13 },
  { country: "Canada", share: 12 },
  { country: "Australia", share: 10 }
];

const topPromptRankings = [
  {
    prompt: "Best WP plugin for GEO",
    rank: "#1",
    intent: "Commercial Investigation",
    visits: "3,412"
  },
  {
    prompt: "How to optimize WordPress for ChatGPT",
    rank: "#1",
    intent: "Informational",
    visits: "2,987"
  },
  {
    prompt: "Top schema strategy for AI search visibility",
    rank: "#1",
    intent: "Informational",
    visits: "2,542"
  },
  {
    prompt: "GEO checklist for SaaS landing pages",
    rank: "#1",
    intent: "Transactional",
    visits: "2,118"
  },
  {
    prompt: "How to rank in AI chat recommendations",
    rank: "#1",
    intent: "Informational",
    visits: "1,946"
  }
];

const apiKeys = [
  {
    key: "pref_live_********8f9a",
    createdAt: "2026-01-12",
    lastUsed: "2026-03-17"
  },
  {
    key: "pref_live_********2ac1",
    createdAt: "2025-12-06",
    lastUsed: "2026-03-16"
  },
  {
    key: "pref_live_********9de4",
    createdAt: "2025-10-21",
    lastUsed: "2026-03-11"
  }
];

const invoices = [
  { id: "INV-2026-0301", date: "2026-03-01", amount: "$49.00", status: "Paid" },
  { id: "INV-2026-0201", date: "2026-02-01", amount: "$49.00", status: "Paid" },
  { id: "INV-2026-0101", date: "2026-01-01", amount: "$49.00", status: "Paid" }
];

const faqItems = [
  {
    question: "How long does it take for AI engines to index my site updates?",
    answer:
      "Most LLM-based discovery pipelines refresh high-authority pages within 3 to 14 days. Structured data, consistent internal linking, and fresh topical updates typically speed up inclusion."
  },
  {
    question: "Where do I paste my API key?",
    answer:
      "Open your CMS integration panel, navigate to Prefold AI settings, and paste the key into the GEO API token field. Save and trigger a sync to verify events are flowing."
  },
  {
    question: "What is the difference between SEO and GEO tracking?",
    answer:
      "SEO focuses on SERP rankings and clicks, while GEO measures citation frequency, answer inclusion, and prompt-level visibility in AI responses like ChatGPT and other assistants."
  },
  {
    question: "How can I improve ranking for transactional prompts?",
    answer:
      "Pair clear product benefits with evidence blocks, FAQ schema, and use-case pages. Prompt-match headings and concise answer-first copy improve LLM retrieval quality."
  }
];

function cn(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState<TabId>("overview");
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const activeTitle = useMemo(
    () => navItems.find((item) => item.id === activeTab)?.label ?? "Dashboard",
    [activeTab]
  );

  return (
    <div className="min-h-screen bg-prefold-dark text-prefold-light">
      <aside className="fixed inset-y-0 left-0 hidden w-72 border-r border-prefold-accent/20 bg-prefold-surface/90 p-6 backdrop-blur md:block">
        <div className="flex items-center gap-3 pb-8">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-prefold-light text-prefold-dark">
            <Gauge className="h-5 w-5" />
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-prefold-accent">Prefold AI</p>
            <p className="text-sm font-semibold text-prefold-light">GEO Control Center</p>
          </div>
        </div>

        <nav className="space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;

            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={cn(
                  "flex w-full items-center gap-3 rounded-xl border px-4 py-3 text-left text-sm transition",
                  isActive
                    ? "border-prefold-accent bg-prefold-accent/10 text-prefold-light"
                    : "border-transparent text-prefold-accent hover:border-prefold-accent/40 hover:bg-prefold-dark/50"
                )}
              >
                <Icon className="h-4 w-4" />
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>
      </aside>

      <div className="md:pl-72">
        <header className="sticky top-0 z-20 border-b border-prefold-accent/20 bg-prefold-dark/85 backdrop-blur">
          <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 md:px-8">
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-prefold-accent">Dashboard</p>
              <h1 className="text-xl font-semibold text-prefold-light md:text-2xl">{activeTitle}</h1>
            </div>
            <button className="rounded-xl border border-prefold-accent/30 px-4 py-2 text-sm text-prefold-light transition hover:border-prefold-accent hover:bg-prefold-surface">
              Export Report
            </button>
          </div>

          <div className="px-4 pb-4 md:hidden">
            <div className="flex gap-2 overflow-x-auto rounded-xl border border-prefold-accent/20 bg-prefold-surface/80 p-2">
              {navItems.map((item) => {
                const isActive = activeTab === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={cn(
                      "shrink-0 rounded-lg px-3 py-2 text-xs font-medium transition",
                      isActive
                        ? "bg-prefold-light text-prefold-dark"
                        : "text-prefold-accent hover:bg-prefold-dark/60"
                    )}
                  >
                    {item.label}
                  </button>
                );
              })}
            </div>
          </div>
        </header>

        <main className="mx-auto max-w-7xl px-4 py-6 md:px-8 md:py-8">
          {activeTab === "overview" && (
            <div className="space-y-6">
              <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                <MetricCard
                  title="Average LLM Ranking"
                  value="#1.2"
                  helper="Across 58 tracked prompts"
                  icon={BarChart3}
                />
                <MetricCard
                  title="Total Visitors from AI"
                  value="45,231"
                  helper="+12.4% month over month"
                  icon={Globe}
                />
                <MetricCard
                  title="Conversion Rate"
                  value="4.8%"
                  helper="From AI-referred sessions"
                  icon={Gauge}
                />
              </section>

              <section className="grid gap-6 xl:grid-cols-5">
                <div className="rounded-2xl border border-prefold-accent/20 bg-prefold-surface p-5 xl:col-span-2">
                  <h2 className="text-lg font-semibold text-prefold-light">Traffic by Country</h2>
                  <p className="mt-1 text-sm text-prefold-accent">AI referral distribution in the last 30 days</p>
                  <div className="mt-6 space-y-4">
                    {trafficByCountry.map((item) => (
                      <div key={item.country}>
                        <div className="mb-1 flex items-center justify-between text-sm">
                          <span className="text-prefold-light">{item.country}</span>
                          <span className="text-prefold-accent">{item.share}%</span>
                        </div>
                        <div className="h-2 rounded-full bg-prefold-dark/80">
                          <div
                            className="h-2 rounded-full bg-prefold-light"
                            style={{ width: `${item.share}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-2xl border border-prefold-accent/20 bg-prefold-surface p-5 xl:col-span-3">
                  <h2 className="text-lg font-semibold text-prefold-light">Top 5 Prompt Rankings</h2>
                  <p className="mt-1 text-sm text-prefold-accent">Prompts where your brand is consistently cited as #1</p>
                  <div className="mt-5 overflow-x-auto">
                    <table className="min-w-full text-left text-sm">
                      <thead className="border-b border-prefold-accent/20 text-prefold-accent">
                        <tr>
                          <th className="pb-3 pr-4 font-medium">Prompt</th>
                          <th className="pb-3 pr-4 font-medium">Rank</th>
                          <th className="pb-3 pr-4 font-medium">Intent</th>
                          <th className="pb-3 font-medium">AI Visits</th>
                        </tr>
                      </thead>
                      <tbody>
                        {topPromptRankings.map((item) => (
                          <tr key={item.prompt} className="border-b border-prefold-accent/10">
                            <td className="py-3 pr-4 text-prefold-light">{item.prompt}</td>
                            <td className="py-3 pr-4 text-prefold-light">{item.rank}</td>
                            <td className="py-3 pr-4 text-prefold-accent">{item.intent}</td>
                            <td className="py-3 text-prefold-light">{item.visits}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </section>
            </div>
          )}

          {activeTab === "api" && (
            <section className="rounded-2xl border border-prefold-accent/20 bg-prefold-surface p-5 md:p-6">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <h2 className="text-lg font-semibold text-prefold-light">Active API Keys</h2>
                  <p className="text-sm text-prefold-accent">Use keys to connect plugins and ingestion pipelines</p>
                </div>
                <button className="rounded-xl bg-prefold-light px-4 py-2 text-sm font-semibold text-prefold-dark transition hover:opacity-90">
                  Generate New API Key
                </button>
              </div>

              <div className="mt-5 overflow-x-auto">
                <table className="min-w-full text-left text-sm">
                  <thead className="border-b border-prefold-accent/20 text-prefold-accent">
                    <tr>
                      <th className="pb-3 pr-4 font-medium">API Key</th>
                      <th className="pb-3 pr-4 font-medium">Created</th>
                      <th className="pb-3 pr-4 font-medium">Last Used</th>
                      <th className="pb-3 font-medium">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {apiKeys.map((key) => (
                      <tr key={key.key} className="border-b border-prefold-accent/10">
                        <td className="py-3 pr-4 font-mono text-prefold-light">{key.key}</td>
                        <td className="py-3 pr-4 text-prefold-accent">{key.createdAt}</td>
                        <td className="py-3 pr-4 text-prefold-light">{key.lastUsed}</td>
                        <td className="py-3">
                          <button className="inline-flex items-center gap-2 rounded-lg border border-red-500/40 px-3 py-1.5 text-xs text-red-300 transition hover:bg-red-500/10">
                            <Trash2 className="h-3.5 w-3.5" />
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          )}

          {activeTab === "billing" && (
            <div className="space-y-6">
              <section className="grid gap-4 lg:grid-cols-3">
                <Card title="Current Plan" value="Pro GEO Plan - $49/mo" subtitle="Renews on April 1, 2026" />
                <Card
                  title="Payment Method"
                  value="Visa ending in 4242"
                  subtitle="Expires 08/2028"
                />
                <div className="rounded-2xl border border-prefold-accent/20 bg-prefold-surface p-5">
                  <h3 className="text-sm uppercase tracking-widest text-prefold-accent">Billing Actions</h3>
                  <button className="mt-4 w-full rounded-xl bg-prefold-light px-4 py-3 text-sm font-semibold text-prefold-dark transition hover:opacity-90">
                    Update Payment Method
                  </button>
                </div>
              </section>

              <section className="rounded-2xl border border-prefold-accent/20 bg-prefold-surface p-5 md:p-6">
                <h2 className="text-lg font-semibold text-prefold-light">Recent Invoices</h2>
                <div className="mt-5 overflow-x-auto">
                  <table className="min-w-full text-left text-sm">
                    <thead className="border-b border-prefold-accent/20 text-prefold-accent">
                      <tr>
                        <th className="pb-3 pr-4 font-medium">Invoice ID</th>
                        <th className="pb-3 pr-4 font-medium">Date</th>
                        <th className="pb-3 pr-4 font-medium">Amount</th>
                        <th className="pb-3 pr-4 font-medium">Status</th>
                        <th className="pb-3 font-medium">Download</th>
                      </tr>
                    </thead>
                    <tbody>
                      {invoices.map((invoice) => (
                        <tr key={invoice.id} className="border-b border-prefold-accent/10">
                          <td className="py-3 pr-4 text-prefold-light">{invoice.id}</td>
                          <td className="py-3 pr-4 text-prefold-accent">{invoice.date}</td>
                          <td className="py-3 pr-4 text-prefold-light">{invoice.amount}</td>
                          <td className="py-3 pr-4 text-prefold-light">{invoice.status}</td>
                          <td className="py-3">
                            <button className="rounded-lg border border-prefold-accent/30 p-2 text-prefold-accent transition hover:bg-prefold-dark/60">
                              <Download className="h-4 w-4" />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>
            </div>
          )}

          {activeTab === "settings" && (
            <div className="space-y-6">
              <section className="rounded-2xl border border-prefold-accent/20 bg-prefold-surface p-5 md:p-6">
                <h2 className="text-lg font-semibold text-prefold-light">Profile Details</h2>
                <form className="mt-5 grid gap-4 sm:grid-cols-2">
                  <Field label="First Name" placeholder="Tam" />
                  <Field label="Last Name" placeholder="Balinth" />
                  <div className="sm:col-span-2">
                    <Field label="Email" type="email" placeholder="tam.balinth@prefold.ai" />
                  </div>
                  <div className="sm:col-span-2">
                    <button
                      type="button"
                      className="rounded-xl bg-prefold-light px-5 py-2.5 text-sm font-semibold text-prefold-dark transition hover:opacity-90"
                    >
                      Save Changes
                    </button>
                  </div>
                </form>
              </section>

              <section className="rounded-2xl border border-red-500/50 bg-red-950/30 p-5 md:p-6">
                <h3 className="text-lg font-semibold text-red-200">Danger Zone</h3>
                <p className="mt-2 max-w-2xl text-sm text-red-300">
                  Deleting your account will permanently remove your projects, prompt tracking history, and billing
                  records from this workspace.
                </p>
                <button className="mt-4 rounded-xl border border-red-500/50 px-4 py-2 text-sm font-semibold text-red-200 transition hover:bg-red-500/20">
                  Delete Account
                </button>
              </section>
            </div>
          )}

          {activeTab === "help" && (
            <section className="rounded-2xl border border-prefold-accent/20 bg-prefold-surface p-5 md:p-6">
              <h2 className="text-lg font-semibold text-prefold-light">Frequently Asked Questions</h2>
              <p className="mt-1 text-sm text-prefold-accent">Answers to common GEO implementation questions</p>

              <div className="mt-5 space-y-3">
                {faqItems.map((faq, index) => {
                  const isOpen = openFaq === index;
                  return (
                    <div key={faq.question} className="rounded-xl border border-prefold-accent/20 bg-prefold-dark/40">
                      <button
                        className="flex w-full items-center justify-between gap-4 px-4 py-3 text-left"
                        onClick={() => setOpenFaq(isOpen ? null : index)}
                      >
                        <span className="font-medium text-prefold-light">{faq.question}</span>
                        <ChevronDown
                          className={cn("h-4 w-4 text-prefold-accent transition", isOpen && "rotate-180")}
                        />
                      </button>
                      {isOpen && <p className="px-4 pb-4 text-sm text-prefold-accent">{faq.answer}</p>}
                    </div>
                  );
                })}
              </div>

              <div className="mt-8 rounded-xl border border-prefold-accent/20 bg-prefold-dark/40 p-4">
                <p className="text-sm text-prefold-accent">Need direct help?</p>
                <a
                  className="mt-1 inline-flex items-center gap-2 font-medium text-prefold-light underline decoration-prefold-accent/60 underline-offset-4"
                  href="mailto:support@prefold.ai"
                >
                  <Mail className="h-4 w-4 text-prefold-accent" />
                  support@prefold.ai
                </a>
              </div>
            </section>
          )}
        </main>
      </div>
    </div>
  );
}

function MetricCard({
  title,
  value,
  helper,
  icon: Icon
}: {
  title: string;
  value: string;
  helper: string;
  icon: React.ElementType;
}) {
  return (
    <div className="rounded-2xl border border-prefold-accent/20 bg-prefold-surface p-5">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm text-prefold-accent">{title}</p>
          <p className="mt-1 text-2xl font-semibold text-prefold-light">{value}</p>
        </div>
        <div className="rounded-lg border border-prefold-accent/25 p-2 text-prefold-accent">
          <Icon className="h-4 w-4" />
        </div>
      </div>
      <p className="mt-3 text-sm text-prefold-accent">{helper}</p>
    </div>
  );
}

function Card({
  title,
  value,
  subtitle
}: {
  title: string;
  value: string;
  subtitle: string;
}) {
  return (
    <div className="rounded-2xl border border-prefold-accent/20 bg-prefold-surface p-5">
      <h3 className="text-sm uppercase tracking-widest text-prefold-accent">{title}</h3>
      <p className="mt-2 text-lg font-semibold text-prefold-light">{value}</p>
      <p className="mt-1 text-sm text-prefold-accent">{subtitle}</p>
    </div>
  );
}

function Field({
  label,
  placeholder,
  type = "text"
}: {
  label: string;
  placeholder: string;
  type?: string;
}) {
  return (
    <label className="block space-y-2">
      <span className="text-sm text-prefold-accent">{label}</span>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full rounded-xl border border-prefold-accent/25 bg-prefold-dark px-3 py-2.5 text-sm text-prefold-light outline-none ring-0 placeholder:text-prefold-accent/70 focus:border-prefold-accent"
      />
    </label>
  );
}