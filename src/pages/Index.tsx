
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ToolCard } from "@/components/tool-card";
import { tools } from "@/data/tools";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-12 md:py-20 bg-gradient-to-b from-secondary to-background">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                  All Your PDF Tools in One Place
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Powerful, easy-to-use PDF and image tools to make your work more efficient.
                </p>
              </div>
              <div className="space-x-4">
                <Button className="bg-gradient-to-r from-brand-600 to-brand-800 hover:from-brand-700 hover:to-brand-900 text-white">
                  Get Started
                </Button>
                <Button variant="outline">Learn More</Button>
              </div>
            </div>
          </div>
        </section>

        {/* Tools Grid */}
        <section className="py-12 md:py-16">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                Our PDF Tools
              </h2>
              <p className="max-w-[600px] text-muted-foreground md:text-lg">
                Choose from our comprehensive suite of tools to manage your PDF and image files.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {tools.map((tool) => (
                <ToolCard
                  key={tool.id}
                  title={tool.title}
                  description={tool.description}
                  icon={tool.icon}
                  href={tool.href}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-12 md:py-16 bg-secondary">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                Why Choose Our Tools
              </h2>
              <p className="max-w-[600px] text-muted-foreground md:text-lg">
                Fast, reliable, and secure PDF tools for all your document needs.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center space-y-2 border p-6 rounded-lg bg-background">
                <div className="p-3 rounded-full bg-brand-100 text-brand-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                  >
                    <path d="M12 2v4" />
                    <path d="m6.34 6.34-2.83-2.83" />
                    <path d="M2 12h4" />
                    <path d="m6.34 17.66-2.83 2.83" />
                    <path d="M12 22v-4" />
                    <path d="m17.66 17.66 2.83 2.83" />
                    <path d="M22 12h-4" />
                    <path d="m17.66 6.34 2.83-2.83" />
                    <path d="M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12Z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Lightning Fast</h3>
                <p className="text-muted-foreground text-center">
                  Process your files in seconds with our optimized tools.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border p-6 rounded-lg bg-background">
                <div className="p-3 rounded-full bg-brand-100 text-brand-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                  >
                    <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">100% Secure</h3>
                <p className="text-muted-foreground text-center">
                  Your files are processed securely and deleted after completion.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border p-6 rounded-lg bg-background">
                <div className="p-3 rounded-full bg-brand-100 text-brand-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                  >
                    <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
                    <path d="M12 12h.01" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Easy to Use</h3>
                <p className="text-muted-foreground text-center">
                  No technical knowledge required. Simple interface for everyone.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
