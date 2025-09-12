import { SiteHeader } from "@/components/SiteHeader";
import { UnifiedLayout } from "@/components/UnifiedLayout";
import { SmoothScrollProvider } from "@/components/SmoothScrollProvider";

export default function Home() {
  return (
    <SmoothScrollProvider>
      <div className="min-h-[400vh] bg-white">
        <SiteHeader />
        <main className="h-screen sticky top-0">
          <UnifiedLayout />
        </main>
      </div>
    </SmoothScrollProvider>
  );
}
