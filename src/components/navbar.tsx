"use client";

import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface MenuItem {
  title: string;
  url: string;
  description?: string;
  items?: MenuItem[];
}

interface NavbarProps {
  logo?: {
    url: string;
    src: string;
    alt: string;
    title: string;
  };
  menu?: MenuItem[];
  cta?: {
    adopt: {
      title: string;
      url: string;
    };
  };
}

export const Navbar = ({
  logo = {
    url: "/",
    src: "/logo.png",
    alt: "logo",
    title: "Canadian Chinchilla Rescue",
  },
  menu = [
    {
      title: "Adopt",
      url: "/adopt",
      items: [
        {
          title: "Browse Chinchillas",
          description: "Find your perfect companion",
          url: "/adopt",
        },
        {
          title: "Apply to Adopt",
          description: "Start your adoption journey",
          url: "/apply",
        },
        {
          title: "Care Guide",
          description: "Learn proper chinchilla care",
          url: "/care",
        },
      ],
    },
    {
      title: "Get Involved",
      url: "/volunteer",
      items: [
        {
          title: "Volunteer",
          description: "Join our team",
          url: "/volunteer",
        },
        {
          title: "Foster",
          description: "Provide temporary care",
          url: "/foster",
        },
        {
          title: "Donate",
          description: "Support our mission",
          url: "/donate",
        },
      ],
    },
    {
      title: "Blog",
      url: "/blog",
    },
    {
      title: "About",
      url: "/about",
    },
    {
      title: "Contact",
      url: "/contact",
    },
  ],
  cta = {
    adopt: { title: "Adopt", url: "/adopt" },
  },
}: NavbarProps) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/98 backdrop-blur-xl supports-[backdrop-filter]:bg-background/80 shadow-sm">
      <nav className="container mx-auto flex h-20 items-center px-6 lg:px-8 relative">
        {/* Logo */}
        <div className="flex-1">
          <Link href={logo.url} className="flex items-center gap-3 group w-fit">
            <img
              src={logo.src}
              className="h-11 w-auto dark:invert transition-opacity duration-150 group-hover:opacity-80"
              alt={logo.alt}
            />
            <span
              className="hidden md:inline-block text-base font-semibold tracking-tight transition-colors duration-150 group-hover:text-primary"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {logo.title}
            </span>
          </Link>
        </div>

        {/* Desktop Navigation - Centered */}
        <div className="hidden lg:flex items-center gap-8 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          {menu.map((item) => (
            <div
              key={item.title}
              className="relative group/nav"
              onMouseEnter={() => item.items && setActiveDropdown(item.title)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              {item.items ? (
                <>
                  <button className="flex items-center gap-1.5 text-sm font-semibold text-foreground/70 hover:text-foreground transition-colors duration-150 py-2 relative group/button">
                    <span>{item.title}</span>
                    <ChevronDown className={`h-4 w-4 transition-transform duration-150 ${activeDropdown === item.title ? 'rotate-180' : ''}`} />
                  </button>
                  {activeDropdown === item.title && (
                    <div className="absolute left-0 top-full pt-3 z-50 animate-in fade-in-0 duration-150">
                      <div className="bg-background/98 backdrop-blur-xl border border-border/60 rounded-xl shadow-2xl shadow-black/[0.08] p-3 min-w-[300px] ring-1 ring-black/[0.03]">
                        {item.items.map((subItem) => (
                          <Link
                            key={subItem.title}
                            href={subItem.url}
                            className="block px-4 py-3.5 rounded-lg hover:bg-accent/50 transition-all duration-200 group/item"
                          >
                            <div className="font-semibold text-sm text-foreground group-hover/item:text-primary transition-colors duration-200">
                              {subItem.title}
                            </div>
                            {subItem.description && (
                              <div className="text-xs text-muted-foreground mt-1 leading-relaxed">
                                {subItem.description}
                              </div>
                            )}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </>
              ) : (
                <Link
                  href={item.url}
                  className="text-sm font-semibold text-foreground/70 hover:text-foreground transition-colors duration-150 py-2"
                >
                  {item.title}
                </Link>
              )}
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden lg:flex items-center gap-4 flex-1 justify-end">
          <Button asChild size="default" className="font-semibold shadow-sm hover:shadow-md transition-shadow duration-150">
            <Link href={cta.adopt.url}>{cta.adopt.title}</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-2.5 -mr-2.5 text-foreground hover:text-primary hover:bg-accent/50 rounded-lg transition-all duration-300"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>

        {/* Mobile Navigation */}
        {mobileOpen && (
          <div className="absolute top-20 left-0 right-0 bg-background/98 backdrop-blur-xl border-b border-border shadow-2xl lg:hidden animate-in fade-in-0 duration-150">
            <div className="container mx-auto px-6 py-8 space-y-6">
              {menu.map((item) => (
                <div key={item.title} className="space-y-3">
                  {item.items ? (
                    <>
                      <div
                        className="font-semibold text-foreground text-base"
                        style={{ fontFamily: "var(--font-display)" }}
                      >
                        {item.title}
                      </div>
                      <div className="pl-4 space-y-1 border-l-2 border-border">
                        {item.items.map((subItem) => (
                          <Link
                            key={subItem.title}
                            href={subItem.url}
                            onClick={() => setMobileOpen(false)}
                            className="block py-2.5 px-3 text-sm text-muted-foreground hover:text-foreground hover:bg-accent/50 rounded-lg transition-all duration-200"
                          >
                            {subItem.title}
                          </Link>
                        ))}
                      </div>
                    </>
                  ) : (
                    <Link
                      href={item.url}
                      onClick={() => setMobileOpen(false)}
                      className="block font-semibold text-foreground text-base hover:text-primary py-2 px-3 hover:bg-accent/50 rounded-lg transition-all duration-200 -ml-3"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {item.title}
                    </Link>
                  )}
                </div>
              ))}
              <div className="pt-4">
                <Button asChild className="w-full font-semibold shadow-sm">
                  <Link href={cta.adopt.url} onClick={() => setMobileOpen(false)}>
                    {cta.adopt.title}
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
