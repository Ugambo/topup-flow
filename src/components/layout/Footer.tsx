import { Smartphone, Github, Twitter, Facebook } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-slate-50">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4 lg:grid-cols-5">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="flex h-8 w-8 items-center justify-center rounded bg-primary text-primary-foreground">
                <Smartphone className="h-5 w-5" />
              </div>
              <span className="text-xl font-bold tracking-tight">VTU<span className="text-primary">Pay</span></span>
            </div>
            <p className="max-w-xs text-sm text-muted-foreground leading-relaxed">
              Your reliable partner for instant mobile top-ups, data bundles, and bill payments. Experience fast, secure, and convenient virtual transactions anytime, anywhere.
            </p>
            <div className="mt-6 flex gap-4 text-muted-foreground">
              <a href="#" className="hover:text-primary transition-colors"><Twitter className="h-5 w-5" /></a>
              <a href="#" className="hover:text-primary transition-colors"><Facebook className="h-5 w-5" /></a>
              <a href="#" className="hover:text-primary transition-colors"><Github className="h-5 w-5" /></a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">Services</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Airtime Recharge</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Data Bundles</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Cable TV Subscription</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Electricity Bill</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">Support</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">API Documentation</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">Account</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Dashboard</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Transaction History</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Settings</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Refer & Earn</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            &copy; {currentYear} VTUPay Solutions. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Security</a>
          </div>
        </div>
      </div>
    </footer>
  );
}