
import { Download, FileText, BookOpen, ExternalLink, Users, Mail, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Index = () => {
  const downloadResources = [
    {
      title: "Download Poster",
      description: "High-resolution A0 poster (PDF)",
      icon: FileText,
      action: "Download PDF",
      size: "2.4 MB",
      url: "https://acrobat.adobe.com/id/urn:aaid:sc:AP:73c31b9a-1b67-4c58-8e9b-4ef91d66438c"
    },
    {
      title: "IMRaD One-Page Summary", 
      description: "Explore the full story behind the gameboard (PDF)",
      icon: FileText,
      action: "Download PDF",
      size: "0.8 MB",
      url: "https://acrobat.adobe.com/id/urn:aaid:sc:AP:b2243a26-275b-4143-9646-19a473a8ad7f"
    }
  ];

  const blogPosts = [
    {
      title: "Comparing Apples and Oranges: Transforming Assessment at UNSW",
      description: "Unpacking the deeper 'why' behind programmatic assessment in an era of AI, overload, and misaligned expectations.",
      url: "https://www.education.unsw.edu.au/news-events/news/comparing-apples-and-oranges-programmatic-assessment-learning"
    },
    {
      title: "Never Waste a Good Crisis: Why Higher Ed Must Rethink Assessment Now",
      description: "A call to reimagine assessment by addressing systemic fragmentation through programmatic, purpose-driven reform.",
      url: "https://needednowlt.substack.com/p/never-waste-a-good-crisis-why-higher"
    },
    {
      title: "Programmatic Assessment: Are we there yet?",
      description: "A reality check on progress, pitfalls and promise in embedding programmatic assessment across higher education.",
      url: "https://www.education.unsw.edu.au/news-events/news/programmatic-assessment-are-we-there-yet#:~:text=Programmatic%20assessment%20is%20a%20systematic%20approach%20wherein%20the,progress%20in%20developing%20key%20competency%20domains%20and%20capabilities"
    },
    {
      title: "Programmatic Assessment as a road trip — some advice for the journey!",
      description: "Practical tips and insights for navigating the long and winding road of programmatic assessment implementation.",
      url: "https://www.herdsa.org.au/herdsa-connect/programmatic-assessment-road-trip-some-advice-journey"
    }
  ];

  const references = [
    {
      text: "Colbert, C. Y., & Bierer, S. B. (2022). The importance of professional development in a programmatic assessment system: One medical school's experience. Education Sciences, 12(3), 220.",
      doi: "https://doi.org/10.3390/educsci12030220"
    },
    {
      text: "Francis, N. J., Jones, S., & Smith, D. P. (2025). Generative AI in higher education: Balancing innovation and integrity. British Journal of Biomedical Science, 81, 14048.",
      doi: "https://doi.org/10.3389/bjbs.2024.14048"
    },
    {
      text: "Heeneman, S., de Jong, L. H., Dawson, L. J., Wilkinson, T. J., Ryan, A., Tait, G. R., … van der Vleuten, C. P. M. (2021). Ottawa 2020 consensus statement for programmatic assessment – 1. Agreement on the principles. Medical Teacher, 43(10), 1139–1148.",
      doi: "https://doi.org/10.1080/0142159X.2021.1957088"
    },
    {
      text: "Khanna, P., Roberts, C., & Lane, A. S. (2021). Designing health professional education curricula using systems thinking perspectives. BMC Medical Education, 21(1), Article 20.",
      doi: "https://doi.org/10.1186/s12909-020-02442-5"
    },
    {
      text: "Torre, D., & Schuwirth, L. (2025). Programmatic assessment for learning: A programmatically designed assessment for the purpose of learning: AMEE Guide No. 174. Medical Teacher, 47(6), 918–933.",
      doi: "https://doi.org/10.1080/0142159X.2024.2409936"
    },
    {
      text: "UNSW Programmatic Assessment Working Group. (2024). Programmatic assessment for learning: White paper on institutional implementation. University of New South Wales.",
      doi: "https://acrobat.adobe.com/id/urn:aaid:sc:AP:9b03c053-f4f0-4871-a970-2a6d39f8b583"
    },
    {
      text: "van der Vleuten, C. P. M., Schuwirth, L. W. T., Driessen, E. W., Dijkstra, J., Tigelaar, D., Baartman, L. K. J., & van Tartwijk, J. (2012). A model for programmatic assessment fit for purpose. Medical Teacher, 34(3), 205–214.",
      doi: "https://doi.org/10.3109/0142159X.2012.652239"
    }
  ];

  const teamMembers = [
    {
      name: "A/Prof. Priya Khanna",
      title: "Nexus Fellow, School of Clinical Medicine",
      email: "priya.khanna@unsw.edu.au",
      linkedin: "https://www.linkedin.com/in/drpriyakhanna/"
    },
    {
      name: "Dr Daniela Castro de Jong",
      title: "Nexus Fellow, School of Health Sciences",
      email: "d.castro_de_jong@unsw.edu.au",
      linkedin: null
    },
    {
      name: "Ms Diana Saragi Turnip",
      title: "Nexus Educational Developer",
      email: "d.turnip@unsw.edu.au",
      linkedin: "https://www.linkedin.com/in/diana-turnip-afhea-25969966"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-yellow-400 text-black">
        <div className="container mx-auto px-6 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-6xl mb-6">🎲</div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Let's play (and learn): Programmatic Assessment
            </h1>
            <p className="text-xl md:text-2xl text-gray-800 mb-8">
              Explore the ups and downs of transforming assessment at UNSW—beyond the gameboard
            </p>
            <div className="text-sm text-gray-700">
              Future-Proofing Health Professions Education: A Programmatic Journey
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-12 max-w-6xl">
        
        {/* Poster & IMRaD Downloads */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">📌 Download the Poster or IMRaD Summary</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Missed something from the board? Download a high-resolution version of the A0 poster, or grab the comprehensive IMRaD summary for your research showcase.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {downloadResources.map((resource, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 bg-green-50 border-green-200">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-green-200 rounded-lg">
                      <resource.icon className="w-6 h-6 text-green-800" />
                    </div>
                    <div>
                      <CardTitle className="text-xl text-green-900">{resource.title}</CardTitle>
                      <CardDescription className="text-green-700">{resource.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-green-600">{resource.size}</span>
                    <a
                      href={resource.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white text-sm font-medium px-4 py-2 rounded-md transition"
                    >
                      <Download className="w-4 h-4 mr-2" />
                      {resource.action}
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
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
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 bg-orange-50 border-orange-200">
                <CardHeader>
                  <CardTitle className="text-xl leading-tight text-orange-900">{post.title}</CardTitle>
                  <CardDescription className="text-base text-orange-700">{post.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <a
                    href={post.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-full border border-orange-300 text-orange-800 hover:bg-orange-100 text-sm font-medium px-4 py-2 rounded-md transition"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Read Blog Post
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* PAL White Paper */}
        <section className="mb-16">
          <Card className="bg-blue-50 border-blue-200">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-3 text-blue-900">
                📘 UNSW's Programmatic Assessment Framework
              </CardTitle>
              <CardDescription className="text-lg text-blue-800">
                Learn more about our institution-wide approach to Programmatic Assessment for Learning (PAL), including key design principles, stakeholder strategies, and curriculum examples.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://unsw-my.sharepoint.com/:b:/g/personal/z3541122_ad_unsw_edu_au/Ee3ASBhYh7NOiXsmcEixinwBV6TF83i_8nYvtzsmA4-Zwg?e=4WfPmU"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-2 rounded-md transition"
                >
                  <BookOpen className="w-4 h-4 mr-2" />
                  Read the PAL White Paper
                </a>

                <a
                  href="https://www.teaching.unsw.edu.au/assessment-methods/programmatic-assessment-for-learning"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center border border-blue-300 text-blue-800 hover:bg-blue-100 text-sm font-medium px-4 py-2 rounded-md transition"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Explore Teaching Gateway Resources
                </a>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* References */}
        <section className="mb-16">
          <Card className="bg-white border-gray-200">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-3 text-gray-900">
                📚 References (APA 7)
              </CardTitle>
              <CardDescription className="text-gray-700">
                Curated key readings that informed the design, implementation, and scholarship of this project.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {references.map((reference, index) => (
                  <div key={index} className="p-4 bg-green-50 rounded-lg border border-green-200">
                    <p className="text-sm text-green-800 leading-relaxed">
                      {reference.text}
                      {reference.doi && (
                        <>
                          {" "}
                          <a
                            href={reference.doi}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-green-600 hover:text-green-800 underline"
                          >
                            {reference.doi}
                          </a>
                        </>
                      )}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Contact Section */}
        <section className="mb-16">
          <Card className="bg-yellow-50 border-yellow-300">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl flex items-center justify-center gap-3 text-yellow-900">
                💬 Let's Talk Programmatic Assessment
              </CardTitle>
              <CardDescription className="text-lg text-yellow-800">
                Thinking about your next step? Reach out to continue the conversation.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                {teamMembers.map((member, index) => (
                  <div key={index} className="text-center p-4 bg-yellow-100 rounded-lg">
                    <h3 className="font-semibold text-yellow-900 mb-2">{member.name}</h3>
                    <p className="text-sm text-yellow-700 mb-3">{member.title}</p>
                    <div className="space-y-2">
                      <a
                        href={`mailto:${member.email}`}
                        className="inline-flex items-center text-yellow-800 hover:text-yellow-900 text-sm"
                      >
                        <Mail className="w-4 h-4 mr-1" />
                        {member.email}
                      </a>
                      {member.linkedin && (
                        <div>
                          <a
                            href={member.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center text-yellow-800 hover:text-yellow-900 text-sm"
                          >
                            <Linkedin className="w-4 h-4 mr-1" />
                            LinkedIn
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              <div className="text-center mt-6 pt-4 border-t border-yellow-200">
                <p className="text-yellow-800 font-medium">Faculty of Medicine and Health, UNSW Sydney</p>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default Index;
