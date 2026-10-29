import FooterMinimal from '@/components/sections/footer/FooterMinimal';
import NavbarInline from '@/components/ui/NavbarInline';
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";
import SiteBackgroundSlot from "@/components/ui/SiteBackgroundSlot";
import { Mail, Phone } from "lucide-react";
import { Outlet } from 'react-router-dom';
import { StyleProvider } from "@/components/ui/StyleProvider";

export default function Layout() {
  const navItems = [
  {
    "name": "Services",
    "href": "#services"
  },
  {
    "name": "Our Work",
    "href": "#gallery"
  },
  {
    "name": "About",
    "href": "#about"
  },
  {
    "name": "Contact",
    "href": "#contact"
  },
  {
    "name": "Hero",
    "href": "#hero"
  },
  {
    "name": "Getting Started",
    "href": "#getting-started"
  }
];

  return (
    <StyleProvider buttonVariant="bubble" siteBackground="noise" heroBackground="cornerGlow">
      <SiteBackgroundSlot />
      <SectionErrorBoundary name="navbar">
        <NavbarInline
      logo="At_UR_Service"
      ctaButton={{
        text: "Call Now",
        href: "tel:+12094966164",
      }}
     navItems={navItems} />
      </SectionErrorBoundary>
      <main className="flex-grow">
        <Outlet />
      </main>
      <SectionErrorBoundary name="footer">
        <FooterMinimal
      brand="At_UR_Service — Website concept preview — not the official business website."
      copyright="© 2024 At_UR_Service. All rights reserved."
      socialLinks={[
        {
          icon: Phone,
          href: "tel:+12094966164",
        },
        {
          icon: Mail,
          href: "mailto:Esequielhr06@gmail.com",
        },
      ]}
    />
      </SectionErrorBoundary>
    </StyleProvider>
  );
}
