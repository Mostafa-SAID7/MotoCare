import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { AlertCircle, ArrowLeft } from "lucide-react";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-md">
          <div className="mb-6">
            <AlertCircle className="w-16 h-16 text-red-500 mx-auto" />
          </div>
          <h1 className="text-4xl font-bold text-slate-900 mb-2">404</h1>
          <p className="text-2xl font-semibold text-slate-700 mb-4">Page Not Found</p>
          <p className="text-lg text-slate-600 mb-8">
            Sorry, the page you're looking for doesn't exist. Let's get you back on track.
          </p>
          <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white text-base py-6 px-8 h-auto rounded-lg font-semibold inline-flex items-center gap-2">
            <a href="/">
              <ArrowLeft className="w-5 h-5" />
              Back to Home
            </a>
          </Button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
