import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Leaf,
  Sprout,
  DollarSign,
  Recycle,
  TreeDeciduous,
  GraduationCap,
  Factory,
  Users,
  BarChart,
} from "lucide-react";
import Image from "next/image";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function OrganicWasteManagement() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-green-50 to-white">
      <Navbar />

      <main className="flex-grow">
        <section className="py-20 bg-green-600 text-white">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
              Organic Waste Management Solutions
            </h1>
            <p className="text-xl mb-8 text-center max-w-3xl mx-auto">
              Empowering Indian farmers with innovative solutions for
              sustainable farming and improved productivity.
            </p>
            <div className="flex justify-center">
              <Button className="bg-white text-green-600 hover:bg-green-50">
                Learn More
              </Button>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">
              Understanding Organic Waste Management
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto text-center">
              Organic waste management involves collecting, treating, and
              reusing waste like crop leftovers, animal manure, and food waste.
              The aim is to turn this waste into valuable resources like compost
              or biofertilizers, which enhance soil fertility and support
              sustainable farming.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-gray-800 flex items-center">
                    <Recycle className="h-6 w-6 text-green-500 mr-2" />
                    Collect
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Gather organic waste from various sources on the farm.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-gray-800 flex items-center">
                    <Factory className="h-6 w-6 text-green-500 mr-2" />
                    Treat
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Process the collected waste using advanced composting
                    techniques.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-gray-800 flex items-center">
                    <Sprout className="h-6 w-6 text-green-500 mr-2" />
                    Reuse
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Apply the resulting compost or biofertilizers to enrich soil
                    and crops.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-b from-green-50 to-white">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-6 text-center text-green-800">
              How Our Solutions Help Indian Farmers
            </h2>
            <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
              Discover the multifaceted benefits of our organic waste management
              solutions for Indian agriculture.
            </p>
            <Tabs defaultValue="soil" className="max-w-4xl mx-auto">
              <TabsList className="grid w-full h-16 grid-cols-2 md:grid-cols-5 bg-green-100 p-1 rounded-lg">
                {[
                  { value: "soil", label: "Soil Health", icon: Leaf },
                  {
                    value: "dependency",
                    label: "Reduce Dependency",
                    icon: Recycle,
                  },
                  { value: "costs", label: "Lower Costs", icon: DollarSign },
                  {
                    value: "sustainability",
                    label: "Sustainability",
                    icon: Sprout,
                  },
                  { value: "revenue", label: "New Revenue", icon: BarChart },
                ].map(({ value, label, icon: Icon }) => (
                  <TabsTrigger
                    key={value}
                    value={value}
                    className="flex items-center justify-center py-3 px-4 rounded-md transition-all duration-200 data-[state=active]:bg-white data-[state=active]:text-green-700 data-[state=active]:shadow-md"
                  >
                    <Icon className="w-5 h-5 mr-2" />
                    <span className="hidden md:inline">{label}</span>
                  </TabsTrigger>
                ))}
              </TabsList>
              {[
                {
                  value: "soil",
                  title: "Enhancing Soil Health",
                  content:
                    "Treated organic waste becomes rich compost or biofertilizer, increasing soil's organic matter, improving its structure, and enhancing water retention. This leads to healthier plants with better resistance to pests and diseases.",
                  icon: Leaf,
                },
                {
                  value: "dependency",
                  title: "Reducing Dependency on Chemical Fertilizers",
                  content:
                    "Our solutions help farmers rely less on chemical fertilizers. Organic fertilizers release nutrients slowly, providing a steady nutrient supply without the risk of over-fertilization and nutrient loss.",
                  icon: Recycle,
                },
                {
                  value: "costs",
                  title: "Lowering Farming Costs",
                  content:
                    "By producing their own compost and biofertilizers from farm waste, farmers can significantly reduce costs. This promotes self-sufficient and sustainable farming, allowing for reinvestment into the farm.",
                  icon: DollarSign,
                },
                {
                  value: "sustainability",
                  title: "Promoting Environmental Sustainability",
                  content:
                    "Effective organic waste management reduces greenhouse gas emissions, prevents pollution, and keeps waste out of landfills. It ensures agriculture thrives without depleting resources or harming the environment.",
                  icon: Sprout,
                },
                {
                  value: "revenue",
                  title: "Creating Additional Revenue Streams",
                  content:
                    "High-quality compost and biofertilizers can be sold to other farmers or gardeners, providing extra income. We help farmers with training and support to produce and market these products effectively.",
                  icon: BarChart,
                },
              ].map(({ value, title, content, icon: Icon }) => (
                <TabsContent key={value} value={value}>
                  <Card className="mt-6 border-2 border-green-200 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <CardHeader className="bg-green-50">
                      <CardTitle className="flex items-center text-2xl text-green-800">
                        <Icon className="w-8 h-8 mr-3 text-green-600" />
                        {title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-6">
                      <p className="text-gray-700 leading-relaxed">{content}</p>
                      <div className="mt-6">
                        <Button className="bg-green-600 hover:bg-green-700 text-white">
                          Learn More
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">
              Our Approach to Organic Waste Management
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-gray-800 flex items-center">
                    <GraduationCap className="h-6 w-6 text-green-500 mr-2" />
                    Education and Training
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    We run comprehensive training programmes to educate farmers
                    about organic waste management techniques and best
                    practices.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-gray-800 flex items-center">
                    <Recycle className="h-6 w-6 text-green-500 mr-2" />
                    Advanced Composting Solutions
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    We provide efficient and easy-to-use composting solutions,
                    including compost bins and aerobic composting systems.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-gray-800 flex items-center">
                    <Sprout className="h-6 w-6 text-green-500 mr-2" />
                    Biofertilizer Production
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    We offer solutions for producing biofertilizers from organic
                    waste, enhancing soil fertility and promoting plant growth.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-gray-800 flex items-center">
                    <Users className="h-6 w-6 text-green-500 mr-2" />
                    Community Engagement
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    We work closely with farming communities, organizing
                    workshops and demonstrations to share knowledge and best
                    practices.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-16 bg-green-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8">
              Join the Sustainable Farming Revolution
            </h2>
            <p className="text-xl mb-12 max-w-3xl mx-auto">
              We are committed to empowering farmers and driving positive change
              through innovative organic waste management solutions. Be part of
              the movement towards a brighter and more resilient future for
              Indian agriculture.
            </p>
            <Button className="bg-white text-green-600 hover:bg-green-50">
              Contact Us Today
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
