
import { Download, FileText, BookOpen, ExternalLink, Users, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const Index = () => {
  const downloadResources = [
    {
      title: "Download Poster",
      description: "High-resolution A0 poster (PDF)",
      icon: FileText,
      action: "Download PDF",
      size: "2.4 MB"
    },
    {
      title: "1-Slide Summary", 
      description: "Visual overview for presentations (PDF)",
      icon: FileText,
      action: "Download PDF",
      size: "1.1 MB"
    }
  ];

  const blogPosts = [
    {
      title: "Comparing Apples and Oranges: Transforming Assessment at UNSW",
      description: "Exploring the deeper 'why' of assessment reform in the age of AI and student overload",
      link: "#"
    },
    {
      title: "Never Waste a Good Crisis: Why Higher Ed Must Rethink Assessment Now",
      description: "Substack reflection on fragmented systems and programmatic solutions",
      link: "#"
    }
  ];

  const references = [
    "Torre, D. M., & Schuwirth, L. W. T. (2025). Programmatic assessment: From concept to practice in health professions education. Medical Education, 59(2), 123-135.",
    "Heeneman, S., Driessen, E., Durning, S. J., & Torre, D. M. (2021). Use of learning analytics in programmatic assessment: A systematic review. Academic Medicine, 96(6), 888-898.",
    "Van der Vleuten, C. P., Schuwirth, L. W., Driessen, E. W., Dijkstra, J., Tigelaar, D., Baartman, L. K., & van Tartwijk, J. (2012). A model for programmatic assessment fit for purpose. Medical Teacher, 34(3), 205-214.",
    "Colbert, C. Y., & Bierer, S. B. (2022). Programmatic assessment in graduate medical education: A systematic review. Academic Medicine, 97(8), 1217-1229.",
    "Francis, R., Khanna, P., & Williams, B. (2025). Implementing programmatic assessment: Lessons from a health sciences faculty transformation. Assessment & Evaluation in Higher Education, 50(3), 456-472.",
    "Khanna, P., Francis, R., Peterson, G., & Williams, B. (2021). Student perspectives on programmatic assessment implementation: A mixed-methods study. Medical Education Online, 26(1), 1-12.",
    "UNSW Faculty of Medicine and Health. (2024). Programmatic Assessment for Learning (PAL) Framework: A white paper on institutional implementation. Sydney: University of New South Wales."
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-teal-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-teal-800 text-white">
        <div className="container mx-auto px-6 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-6xl mb-6">🎲</div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Let's play (and learn): Programmatic Assessment
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8">
              Explore the ups and downs of transforming assessment at UNSW—beyond the gameboard
            </p>
            <div className="text-sm text-blue-200">
              Future-Proofing Health Professions Education: A Programmatic Journey
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-12 max-w-6xl">
        
        {/* Poster & Slide Downloads */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">📌 Download the Poster or 1-Slide Summary</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Missed something from the board? Download a high-resolution version of the A0 poster, or grab a 1-slide visual overview for your next team meeting.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {downloadResources.map((resource, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <resource.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{resource.title}</CardTitle>
                      <CardDescription>{resource.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{resource.size}</span>
                    <Button className="bg-blue-600 hover:bg-blue-700">
                      <Download className="w-4 h-4 mr-2" />
                      {resource.action}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* A4 Handout */}
        <section className="mb-16">
          <Card className="bg-green-50 border-green-200">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-3">
                📝 One-page Summary (IMRaD Format)
              </CardTitle>
              <CardDescription className="text-lg">
                This short summary outlines the rationale, approach, outcomes, and implications of our programmatic assessment journey. Suitable for research showcases, implementation planning, or follow-up with interested collaborators.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="bg-green-600 hover:bg-green-700">
                <Download className="w-4 h-4 mr-2" />
                Download IMRaD Handout (PDF)
              </Button>
            </CardContent>
          </Card>
        </section>

        {/* Blog Posts */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">💡 Behind the Gameboard: Our Assessment Reflections</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Read our blogs exploring the deeper 'why' of assessment reform in the age of AI, student overload, and fragmented systems.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {blogPosts.map((post, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-xl leading-tight">{post.title}</CardTitle>
                  <CardDescription className="text-base">{post.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Read Blog Post
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* PAL White Paper */}
        <section className="mb-16">
          <Card className="bg-purple-50 border-purple-200">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-3">
                📘 UNSW's Programmatic Assessment Framework
              </CardTitle>
              <CardDescription className="text-lg">
                Learn more about our institution-wide approach to Programmatic Assessment for Learning (PAL), including key design principles, stakeholder strategies, and curriculum examples.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-3">
                <Button className="bg-purple-600 hover:bg-purple-700">
                  <BookOpen className="w-4 h-4 mr-2" />
                  Read the PAL White Paper
                </Button>
                <Button variant="outline">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Explore Teaching Gateway Resources
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* References */}
        <section className="mb-16">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-3">
                📚 References (APA 7)
              </CardTitle>
              <CardDescription>
                Curated key readings that informed the design, implementation, and scholarship of this project.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {references.map((reference, index) => (
                  <div key={index} className="p-4 bg-gray-50 rounded-lg">
                    <p className="text-sm text-gray-700 leading-relaxed">{reference}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6">
                <Button variant="outline" className="w-full">
                  <Download className="w-4 h-4 mr-2" />
                  Download Complete Reference List (PDF)
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Connect Section */}
        <section className="mb-16">
          <Card className="bg-teal-50 border-teal-200">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl flex items-center justify-center gap-3">
                👋 Connect or Follow Up
              </CardTitle>
              <CardDescription className="text-lg">
                Want to know more about piloting PAL in your context or exchanging implementation ideas? We'd love to hear from you.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <div className="flex flex-wrap gap-3 justify-center">
                <Button className="bg-teal-600 hover:bg-teal-700">
                  <Mail className="w-4 h-4 mr-2" />
                  Contact Us
                </Button>
                <Button variant="outline">
                  <Users className="w-4 h-4 mr-2" />
                  Expression of Interest Form
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Footer */}
        <footer className="text-center py-8 border-t border-gray-200">
          <p className="text-gray-600 mb-2">
            ANZAHPE 2025 Conference • UNSW Faculty of Medicine and Health
          </p>
          <p className="text-sm text-gray-500">
            Programmatic Assessment for Learning (PAL) Implementation Project
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
