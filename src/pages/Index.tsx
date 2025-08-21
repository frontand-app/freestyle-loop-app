
import { Button } from "@/components/ui/button";

import { Link } from "react-router-dom";
import { 
  ArrowRight
} from "lucide-react";

const Index = () => {

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="w-full max-w-4xl mx-auto px-6 py-8 text-center">
        <div className="mb-6">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-secondary rounded-full px-4 py-2 mb-6">
            <div className="w-4 h-4 bg-primary rounded-sm flex items-center justify-center">
              <div className="w-2 h-2 bg-white rounded-full"></div>
            </div>
            <span className="text-sm font-medium text-foreground">
              Universal Cloud App Frontend
            </span>
          </div>
          
          {/* Main Headline */}
          <h1 className="text-6xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
            FREESTYLE LOOP.
            <br />
            <span className="inline-flex items-center gap-2">
              <span className="text-6xl md:text-7xl">∞</span>
              DATA ROWS.
            </span>
          </h1>
          
          {/* Subheadline */}
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            PROCESS ANY CSV DATA WITH CUSTOM AI PROMPTS
            <br />
            AND REUSABLE TEMPLATES.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4">
            <Link to="/workflow/loop-over-rows">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 py-6 text-sm font-medium">
                START DATA PROCESSING
              </Button>
            </Link>
            <Button 
              variant="outline" 
              className="border-2 border-foreground text-foreground hover:bg-foreground hover:text-background rounded-full px-8 py-6 text-sm font-medium"
              asChild
            >
              <Link to="/workflow/loop-over-rows">
                TRY FOR FREE
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Main Feature Section */}
      <section className="w-full max-w-4xl mx-auto px-6 py-8">
        <div className="bg-card rounded-3xl border border-border p-8 shadow-lg text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            AI-Powered CSV Processing
          </h2>
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            Upload your CSV files and process them with custom AI prompts. Perfect for lead scoring, content analysis, data enrichment, and more.
          </p>
          <Link to="/workflow/loop-over-rows">
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 py-4 text-lg font-medium">
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>



      {/* How It Works */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-2xl lg:text-3xl font-semibold text-foreground mb-3">
              How it works
            </h2>
            <p className="text-base text-muted-foreground">
              Three simple steps to connect your data to any cloud app
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center text-muted-foreground text-sm font-medium mx-auto mb-4">
                1
              </div>
              <h3 className="text-base font-medium text-foreground mb-2">Choose workflow</h3>
              <p className="text-sm text-muted-foreground">
                Select from our library of AI-powered workflows
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center text-muted-foreground text-sm font-medium mx-auto mb-4">
                2
              </div>
              <h3 className="text-base font-medium text-foreground mb-2">Add your data</h3>
              <p className="text-sm text-muted-foreground">
                Upload CSV files or connect your data sources
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center text-muted-foreground text-sm font-medium mx-auto mb-4">
                3
              </div>
              <h3 className="text-base font-medium text-foreground mb-2">AI processes</h3>
              <p className="text-sm text-muted-foreground">
                Watch AI analyze and route your data intelligently
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <h2 className="text-2xl lg:text-3xl font-semibold text-foreground mb-4">
            Ready to get started?
          </h2>
          <p className="text-base text-muted-foreground mb-8">
            Try our first workflow and see how AI can transform your data processing.
          </p>
            <Button 
              size="lg" 
            className="bg-foreground hover:bg-foreground/90 text-background px-8 py-3"
              asChild
            >
              <Link to="/search/loop-over-rows">
              <PlayCircle className="mr-2 w-4 h-4" />
              Start with Loop Over Rows
              <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
