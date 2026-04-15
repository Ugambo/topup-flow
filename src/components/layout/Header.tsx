import { useState } from "react";
import { Menu, X, Smartphone, Wallet, LogIn } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <Smartphone className="h-6 w-6" />
            </div>
            <span className="text-xl font-bold tracking-tight">VTU<span className="text-primary">Pay</span></span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium transition-colors hover:text-primary"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <Button variant="ghost" size="sm" className="gap-2">
              <Wallet className="h-4 w-4" />
              Check Balance
            </Button>
            <Button size="sm" className="gap-2">
              <LogIn className="h-4 w-4" />
              Sign In
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Overlay */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-16 z-50 bg-background border-b animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col gap-4 p-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-lg font-medium transition-colors hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <hr className="my-2" />
            <div className="flex flex-col gap-3">
              <Button variant="outline" className="w-full justify-start gap-2">
                <Wallet className="h-4 w-4" />
                Check Balance
              </Button>
              <Button className="w-full justify-start gap-2">
                <LogIn className="h-4 w-4" />
                Sign In
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}