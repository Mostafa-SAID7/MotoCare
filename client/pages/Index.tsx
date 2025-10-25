import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  Wrench,
  Droplets,
  Zap,
  Shield,
  CheckCircle,
  Users,
  Clock,
  Award,
  ArrowRight,
  Star,
} from "lucide-react";

export default function Index() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-slate-50">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              Professional Car Maintenance You Can Trust
            </h1>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Keep your vehicle running smoothly with our expert maintenance services. From routine oil changes to comprehensive inspections, we've got you covered.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white text-base py-6 px-8 h-auto rounded-lg font-semibold flex items-center gap-2">
                Book Your Service
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 text-base py-6 px-8 h-auto rounded-lg font-semibold">
                Learn More
              </Button>
            </div>
            <div className="mt-8 flex gap-8 pt-8 border-t border-slate-200">
              <div>
                <div className="text-2xl font-bold text-blue-600">500+</div>
                <p className="text-slate-600 text-sm">Vehicles Serviced</p>
              </div>
              <div>
                <div className="text-2xl font-bold text-blue-600">15+</div>
                <p className="text-slate-600 text-sm">Years Experience</p>
              </div>
              <div>
                <div className="text-2xl font-bold text-blue-600">98%</div>
                <p className="text-slate-600 text-sm">Customer Satisfied</p>
              </div>
            </div>
          </div>

          <div className="relative h-96 md:h-full">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl opacity-10 blur-2xl"></div>
            <div className="relative bg-gradient-to-br from-blue-100 to-blue-50 rounded-2xl h-96 md:h-full flex items-center justify-center border border-blue-200">
              <div className="text-center">
                <Wrench className="w-24 h-24 text-blue-600 mx-auto mb-4" />
                <p className="text-slate-600 font-medium">Expert Car Maintenance</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Our Services
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Comprehensive maintenance and repair services for all types of vehicles
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Droplets,
                title: "Oil Changes",
                description: "Regular oil changes keep your engine healthy and running efficiently",
              },
              {
                icon: Shield,
                title: "Brake Service",
                description: "Complete brake inspection and maintenance for your safety",
              },
              {
                icon: Zap,
                title: "Battery Check",
                description: "Battery testing and replacement to prevent breakdowns",
              },
              {
                icon: Wrench,
                title: "General Repairs",
                description: "Expert repair services for all mechanical issues",
              },
            ].map((service, idx) => {
              const Icon = service.icon;
              return (
                <div
                  key={idx}
                  className="bg-white border border-slate-200 rounded-xl p-8 hover:shadow-lg hover:border-blue-300 transition duration-300"
                >
                  <div className="bg-blue-100 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-7 h-7 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-slate-600">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-us" className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">
                Why Choose AutoCare?
              </h2>

              <div className="space-y-6">
                {[
                  {
                    icon: Users,
                    title: "Expert Technicians",
                    description:
                      "Certified professionals with years of experience",
                  },
                  {
                    icon: Clock,
                    title: "Quick Turnaround",
                    description: "Fast service without compromising on quality",
                  },
                  {
                    icon: Award,
                    title: "Quality Guaranteed",
                    description:
                      "All work backed by our satisfaction guarantee",
                  },
                  {
                    icon: Shield,
                    title: "Transparent Pricing",
                    description:
                      "No hidden fees, clear pricing upfront",
                  },
                ].map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div key={idx} className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
                          <Icon className="h-6 w-6 text-white" />
                        </div>
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-900 mb-1">
                          {item.title}
                        </h3>
                        <p className="text-slate-600">{item.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-100 to-blue-50 rounded-2xl h-96 md:h-full flex items-center justify-center border border-blue-200">
              <div className="text-center">
                <Star className="w-24 h-24 text-blue-600 mx-auto mb-4" />
                <p className="text-slate-600 font-medium">Trusted by Hundreds</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              What Our Customers Say
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Join hundreds of satisfied customers who trust us with their vehicles
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "Car Owner",
                content:
                  "Best service I've ever had! The team was professional and my car runs perfectly now.",
              },
              {
                name: "Michael Chen",
                role: "Business Owner",
                content:
                  "We trust AutoCare with our entire fleet. Reliable, honest, and affordable.",
              },
              {
                name: "Emma Wilson",
                role: "Regular Customer",
                content:
                  "Great prices and excellent service. I always recommend them to my friends.",
              },
            ].map((testimonial, idx) => (
              <div
                key={idx}
                className="bg-slate-50 rounded-xl p-8 border border-slate-200"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-blue-600 text-blue-600"
                    />
                  ))}
                </div>
                <p className="text-slate-600 mb-6">{testimonial.content}</p>
                <div>
                  <p className="font-semibold text-slate-900">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-slate-500">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Keep Your Car Running Smoothly?
          </h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Schedule your maintenance appointment today and get peace of mind knowing your vehicle is in expert hands.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-blue-600 hover:bg-slate-50 text-base py-6 px-8 h-auto rounded-lg font-semibold flex items-center justify-center gap-2">
              Book Now
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button className="border-2 border-white text-white hover:bg-blue-700 text-base py-6 px-8 h-auto rounded-lg font-semibold">
              Call: (123) 456-7890
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
