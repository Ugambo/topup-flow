import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";
import { ServiceCard } from "./components/vtu/ServiceCard";
import { RechargeForm } from "./components/vtu/RechargeForm";
import { Button } from "./components/ui/button";
import { Smartphone, ShieldCheck, Zap, History, ChevronRight } from "lucide-react";
import { Toaster } from "./components/ui/sonner";

function App() {
  const services = [
    {
      title: "Airtime Top-up",
      description: "Instantly recharge airtime for any mobile network.",
      iconUrl: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/8b0c3b9c-c5b4-49e5-941c-ce2f8e0bab47/airtime-icon-a2f77fef-1776181695996.webp",
    },
    {
      title: "Data Bundles",
      description: "Cheap and fast data plans for all your devices.",
      iconUrl: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/8b0c3b9c-c5b4-49e5-941c-ce2f8e0bab47/data-icon-abd2af34-1776181695746.webp",
    },
    {
      title: "Bill Payments",
      description: "Pay electricity and utility bills with ease.",
      iconUrl: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/8b0c3b9c-c5b4-49e5-941c-ce2f8e0bab47/bills-icon-d9c10b58-1776181695453.webp",
    },
    {
      title: "Cable TV",
      description: "Renew your GOtv, DStv, or StarTimes sub instantly.",
      iconUrl: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/8b0c3b9c-c5b4-49e5-941c-ce2f8e0bab47/internet-icon-397374e2-1776181696079.webp",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-slate-900 py-20 text-white lg:py-32">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557683316-973673baf926?q=80&w=2029&auto=format&fit=crop')] bg-cover bg-center opacity-20"></div>
          <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
              <div className="max-w-xl">
                <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                  Recharge with <span className="text-primary text-blue-400">Ease & Speed</span>
                </h1>
                <p className="mt-6 text-lg text-slate-300 leading-relaxed">
                  Join over 1 million Nigerians using VTUPay for instant airtime, data, and bill payments. Secure, reliable, and available 24/7.
                </p>
                <div className="mt-10 flex flex-wrap gap-4">
                  <Button size="lg" className="h-12 px-8 text-base">
                    Get Started
                  </Button>
                  <Button variant="outline" size="lg" className="h-12 px-8 text-base bg-white/10 border-white/20 hover:bg-white/20">
                    Learn More
                  </Button>
                </div>
                
                <div className="mt-12 flex items-center gap-8 grayscale opacity-70">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="h-5 w-5" />
                    <span className="text-xs font-semibold uppercase tracking-wider">Secure</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Zap className="h-5 w-5" />
                    <span className="text-xs font-semibold uppercase tracking-wider">Instant</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <History className="h-5 w-5" />
                    <span className="text-xs font-semibold uppercase tracking-wider">Reliable</span>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-center lg:justify-end">
                <RechargeForm />
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-24 bg-slate-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-16 text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Our Services</h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                Everything you need to stay connected and powered up, all in one place.
              </p>
            </div>
            
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {services.map((service, index) => (
                <ServiceCard
                  key={index}
                  title={service.title}
                  description={service.description}
                  iconUrl={service.iconUrl}
                  onClick={() => console.log(`Selected ${service.title}`)}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-24 border-y bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 items-center">
              <div className="relative">
                <div className="absolute -inset-4 rounded-3xl bg-blue-500/10 blur-3xl"></div>
                <img 
                  src="https://images.unsplash.com/photo-1556742049-13da7366b939?q=80&w=2070&auto=format&fit=crop" 
                  alt="Secure Transactions" 
                  className="relative rounded-2xl shadow-2xl"
                />
              </div>
              
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Why Choose VTUPay?</h2>
                  <p className="text-lg text-muted-foreground">
                    We've built a platform that prioritizes your convenience and security above all else.
                  </p>
                </div>
                
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
                      <ShieldCheck className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold">Bank-Level Security</h4>
                      <p className="mt-1 text-muted-foreground">Your data and transactions are protected by industry-standard encryption protocols.</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-green-100 text-green-600">
                      <Zap className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold">Lightning Fast Delivery</h4>
                      <p className="mt-1 text-muted-foreground">Receive your airtime or data value within seconds of completing your payment.</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-purple-100 text-purple-600">
                      <Smartphone className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold">User-Friendly Interface</h4>
                      <p className="mt-1 text-muted-foreground">Our intuitive design makes it easy for anyone to recharge in less than 30 seconds.</p>
                    </div>
                  </div>
                </div>

                <div className="pt-4">
                  <Button variant="link" className="px-0 text-blue-600 font-bold flex items-center gap-2 group">
                    Learn about our security protocols <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl bg-primary px-6 py-16 text-center text-primary-foreground sm:px-12 sm:py-24">
              <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl">
                Ready to experience seamless transactions?
              </h2>
              <p className="mx-auto mt-6 max-w-xl text-lg opacity-90">
                Join thousands of satisfied users today and never worry about running out of airtime or data again.
              </p>
              <div className="mt-10 flex justify-center gap-4">
                <Button variant="secondary" size="lg" className="h-12 px-8 text-base">
                  Create Free Account
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <Toaster position="top-center" richColors />
    </div>
  );
}

export default App;