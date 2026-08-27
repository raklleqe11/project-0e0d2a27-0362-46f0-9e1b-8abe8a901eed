import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Utensils,
  Sparkles,
  QrCode,
  BarChart3,
  Palette,
  Users,
  ArrowRight,
  Check,
} from "lucide-react";
import heroImg from "@/assets/landing-hero.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Hap — Digital Menus for Restaurants" },
      {
        name: "description",
        content:
          "Hap is the digital menu platform for restaurants: manage your menu, promotions, QR codes, analytics and billing from one app.",
      },
      { property: "og:title", content: "Hap — Digital Menus for Restaurants" },
      {
        property: "og:description",
        content:
          "Manage your menu, promotions, QR codes, analytics and billing from one app, and preview exactly what guests see.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: LandingPage,
});

const features = [
  {
    icon: Utensils,
    title: "Menu management",
    description:
      "Add dishes, organize categories, set prices, mark sold-out items, and update everything in real time.",
  },
  {
    icon: Sparkles,
    title: "Promotions",
    description:
      "Highlight specials, run timed offers, show was-prices and terms, and push featured categories to guests.",
  },
  {
    icon: QrCode,
    title: "QR codes",
    description:
      "Generate table-specific QR codes so guests open your menu instantly on their phones.",
  },
  {
    icon: BarChart3,
    title: "Analytics",
    description:
      "See what guests view most, track promotion performance, and make menu decisions with data.",
  },
  {
    icon: Palette,
    title: "Design & branding",
    description:
      "Customize colors, fonts, layout, and item styles so the menu feels like your restaurant.",
  },
  {
    icon: Users,
    title: "Team & staff",
    description:
      "Invite team members, manage roles, and keep everyone aligned from one admin workspace.",
  },
];

const capabilities = [
  "Update prices and availability without reprinting menus",
  "Run happy-hour or weekend promotions with start and end times",
  "Preview exactly what guests see before going live",
  "Export QR codes for tables, windows, and social posts",
  "Control branding, staff access, and billing from one place",
];

function LandingPage() {
  return (
    <div className="relative flex min-h-screen flex-col bg-background">
      {/* Header */}
      <header className="sticky top-0 z-20 w-full border-b border-border/60 bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <Link to="/" className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand text-brand-foreground text-lg font-semibold shadow-sm">
              H
            </div>
            <span className="text-lg font-semibold tracking-tight text-foreground">
              Hap
            </span>
          </Link>

          <div className="flex items-center gap-3">
            <Button asChild variant="ghost" size="sm" className="hidden sm:inline-flex">
              <Link to="/preview">Preview menu</Link>
            </Button>
            <Button asChild size="sm" className="rounded-full px-5">
              <Link to="/admin">Sign in</Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden px-6 pt-16 pb-20 sm:pt-24 sm:pb-28">
          <div className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute left-1/2 top-0 h-[50rem] w-[50rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand/[0.04] blur-3xl" />
            <div className="absolute bottom-0 right-0 h-[32rem] w-[32rem] translate-x-1/3 translate-y-1/3 rounded-full bg-brand-subtle/40 blur-3xl" />
          </div>

          <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="max-w-xl">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground shadow-sm">
                <Sparkles className="h-3.5 w-3.5 text-brand" />
                <span>Digital menus made simple</span>
              </div>
              <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                Your menu, everywhere guests look.
              </h1>
              <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
                Hap gives restaurants one place to manage dishes, run
                promotions, share QR codes, and understand what guests love — then
                shows them a beautiful menu on any phone.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg" className="rounded-full px-7 shadow-sm">
                  <Link to="/admin">
                    Sign in to admin
                    <ArrowRight className="ml-1.5 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="rounded-full px-7"
                >
                  <Link to="/preview">Preview menu</Link>
                </Button>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                {["No setup fees", "Works on any phone", "Real-time updates"].map(
                  (item) => (
                    <span key={item} className="flex items-center gap-1.5">
                      <Check className="h-4 w-4 text-brand" />
                      {item}
                    </span>
                  )
                )}
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-brand/10 via-brand-subtle/30 to-transparent blur-2xl" />
              <img
                src={heroImg}
                alt="Hap admin dashboard on a tablet and guest menu on a phone"
                width={1280}
                height={720}
                className="relative rounded-2xl border border-border bg-card shadow-card"
                loading="eager"
                decoding="async"
              />
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="px-6 py-20 sm:py-28">
          <div className="mx-auto max-w-6xl">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Everything in the admin
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                From daily menu changes to long-term branding, Hap puts the tools
                you need in one clean workspace.
              </p>
            </div>

            <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((feature) => (
                <Card
                  key={feature.title}
                  className="group border-border/70 bg-card/60 backdrop-blur-sm transition-colors hover:bg-card"
                >
                  <CardHeader>
                    <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-brand-subtle text-brand">
                      <feature.icon className="h-5 w-5" />
                    </div>
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                    <CardDescription className="leading-relaxed">
                      {feature.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Capabilities */}
        <section className="border-y border-border bg-card/40 px-6 py-20 sm:py-28">
          <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                What you can do with Hap
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Built for busy restaurant teams who want a menu that keeps up
                with the kitchen, the floor, and the brand.
              </p>

              <ul className="mt-8 space-y-4">
                {capabilities.map((capability) => (
                  <li
                    key={capability}
                    className="flex items-start gap-3 text-foreground"
                  >
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand/10 text-brand">
                      <Check className="h-3 w-3" />
                    </span>
                    <span className="leading-relaxed">{capability}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-10">
                <Button asChild size="lg" className="rounded-full px-7 shadow-sm">
                  <Link to="/admin">
                    Open the admin
                    <ArrowRight className="ml-1.5 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <StatCard label="Menu items" value="Unlimited" />
              <StatCard label="Promotion styles" value="5+" />
              <StatCard label="QR code tables" value="Any amount" />
              <StatCard label="Guest preview" value="Live" />
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-6 py-20 sm:py-28">
          <div className="mx-auto max-w-4xl rounded-3xl bg-brand px-6 py-16 text-center text-brand-foreground sm:px-12 sm:py-20">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Ready to modernize your menu?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-brand-foreground/80">
              Sign in to explore the admin, or preview the guest menu to see what
              your restaurant could look like.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="rounded-full bg-brand-foreground text-brand hover:bg-brand-foreground/90"
              >
                <Link to="/admin">Sign in</Link>
              </Button>
              <Button
                asChild
                size="lg"
                className="rounded-full bg-brand-foreground text-brand hover:bg-brand-foreground/90"
              >
                <Link to="/preview">Preview menu</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border px-6 py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="flex items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand text-brand-foreground text-base font-semibold">
              H
            </div>
            <span className="font-semibold text-foreground">Hap</span>
          </div>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Hap. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <Card className="border-border/70 bg-card/60 text-center">
      <CardContent className="flex flex-col items-center justify-center py-8">
        <span className="text-3xl font-semibold text-brand">{value}</span>
        <span className="mt-1 text-sm text-muted-foreground">{label}</span>
      </CardContent>
    </Card>
  );
}
