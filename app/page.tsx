import Link from "next/link";
import { Navbar } from "./components/nav-bar";
import { Footer } from "./components/footer";
import { Testimonials } from "./components/testimonials";
import { Button } from "@/components/ui/button";
import Container from "@/app/components/container";
import AboutTopics from "./components/about-topics";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <Container>
        <main className="flex-grow pt-16">
          <section className="mb-12 text-center">
            <h1 className="text-4xl font-bold mb-4">Welcome to My Blog</h1>
            <p className="mb-6">
              Exploring the world of technology, one post at a time.
            </p>
            <Button asChild>
              <Link href="/dashboard">Read Blog</Link>
            </Button>
          </section>

          <section className="mb-12">
            <AboutTopics />
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">
              What Developers Say About Me
            </h2>
            <Testimonials />
          </section>
        </main>
      </Container>
      <Footer />
    </div>
  );
}
