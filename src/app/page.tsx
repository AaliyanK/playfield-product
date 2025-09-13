import { SiteHeader } from "@/components/SiteHeader";
import { UnifiedLayout } from "@/components/UnifiedLayout";
import { SmoothScrollProvider } from "@/components/SmoothScrollProvider";

export default function Home() {
  return (
    <SmoothScrollProvider>
      <div className="bg-white">
        <SiteHeader />
        <main>
          <UnifiedLayout />
        </main>
      </div>
    </SmoothScrollProvider>
  );
}
