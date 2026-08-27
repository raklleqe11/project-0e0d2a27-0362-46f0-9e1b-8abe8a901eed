import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";

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

function LandingPage() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-background px-6 text-center">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 h-[42rem] w-[42rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand/5 blur-3xl" />
      </div>

      <div className="mx-auto max-w-sm">
        <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand text-brand-foreground text-xl font-semibold shadow-sm">
          H
        </div>
        <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          Hap
        </h1>
        <p className="mt-3 text-base text-muted-foreground">
          Digital menus for restaurants. Manage dishes, promotions, QR codes,
          and analytics in one simple place.
        </p>

        <div className="mt-8 flex flex-col items-center gap-3">
          <Button asChild size="lg" className="w-full rounded-full shadow-sm">
            <Link to="/admin">Sign in</Link>
          </Button>
          <Button
            asChild
            variant="ghost"
            size="sm"
            className="text-muted-foreground hover:text-foreground"
          >
            <Link to="/preview">Preview menu</Link>
          </Button>
        </div>
      </div>

      <footer className="absolute bottom-6 text-xs text-muted-foreground">
        © {new Date().getFullYear()} Hap
      </footer>
    </main>
  );
}
