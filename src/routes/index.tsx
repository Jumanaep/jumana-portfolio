import { createFileRoute } from "@tanstack/react-router";
import { AuroraBackdrop, CursorGlow } from "@/components/site/primitives";
import { Loader } from "@/components/site/Loader";
import { Navbar, ScrollProgress } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Skills } from "@/components/site/Skills";
import { Experience } from "@/components/site/Experience";
import { LiveProjects } from "@/components/site/LiveProjects";
import { Projects } from "@/components/site/Projects";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Jumana Fathima EP — Software QA Engineer Portfolio" },
      {
        name: "description",
        content:
          "Portfolio of Jumana Fathima EP, Software QA Engineer skilled in manual and automation testing with Selenium, Playwright, Postman and Jira.",
      },
      { property: "og:title", content: "Jumana Fathima EP — Software QA Engineer" },
      {
        property: "og:description",
        content:
          "Manual and automation QA engineer: Selenium WebDriver, Playwright, API testing, 500+ bugs reported across 4 live client products.",
      },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Loader />
      <AuroraBackdrop />
      <CursorGlow />
      <ScrollProgress />
      <Navbar />
      <main className="relative">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <LiveProjects />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
