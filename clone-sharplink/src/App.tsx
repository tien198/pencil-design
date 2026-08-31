import { useState } from "react";
import "./App.css";
import { CompoundBanner } from "./components/CompoundBanner";
import { CookieBanner } from "./components/CookieBanner";
import { DashboardSnapshot } from "./components/DashboardSnapshot";
import { FaqSection } from "./components/FaqSection";
import { HeroSection } from "./components/HeroSection";
import { NewsSection } from "./components/NewsSection";
import { OpportunitySection } from "./components/OpportunitySection";
import { ProductivitySection } from "./components/ProductivitySection";
import { PropositionsSection } from "./components/PropositionsSection";
import { SiteFooter } from "./components/SiteFooter";
import { SiteHeader } from "./components/SiteHeader";

function App() {
  const [cookieVisible, setCookieVisible] = useState(true);

  return (
    <>
      {cookieVisible && <CookieBanner onClose={() => setCookieVisible(false)} />}
      <SiteHeader hasCookieBanner={cookieVisible} />
      <main>
        <HeroSection />
        <DashboardSnapshot />
        <ProductivitySection />
        <PropositionsSection />
        <CompoundBanner />
        <OpportunitySection />
        <NewsSection />
        <FaqSection />
      </main>
      <SiteFooter />
    </>
  );
}

export default App;
