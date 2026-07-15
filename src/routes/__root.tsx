import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Outlet, Link, createRootRouteWithContext, useRouter } from "@tanstack/react-router";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full bg-navy px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-gold hover:text-navy"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-navy px-4 text-white">
      <div className="max-w-xl text-center">
        <h1 className="text-2xl font-bold tracking-tight text-white font-display">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-white/70">
          Something went wrong. Try refreshing or head back home.
        </p>
        {error?.message && (
          <div className="mt-4 p-4 bg-red-950/40 border border-red-500/30 rounded-xl text-left overflow-auto max-h-48">
            <p className="text-xs font-mono text-red-400 font-bold">
              {error.name}: {error.message}
            </p>
            {error.stack && (
              <pre className="mt-2 text-[11px] font-mono text-red-300/80 whitespace-pre-wrap">
                {error.stack}
              </pre>
            )}
          </div>
        )}
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-full bg-gold px-6 py-2.5 text-sm font-bold text-navy transition-colors hover:bg-white"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-6 py-2.5 text-sm font-bold text-white transition-colors hover:border-gold hover:text-gold"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

import { Navbar, Footer, ScrollToTop, ToastHost } from "@/components/site";

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <div className="bg-haze">
        <Navbar />
        <main className="min-h-screen">
          <Outlet />
        </main>
        <Footer />
        <ScrollToTop />
        <ToastHost />
      </div>
    </QueryClientProvider>
  );
}
