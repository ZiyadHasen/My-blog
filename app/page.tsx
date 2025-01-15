import Link from "next/link";
import { Navbar } from "./components/nav-bar";
import { Footer } from "./components/footer";
import { Testimonials } from "./components/testimonials";
import { Button } from "@/components/ui/button";
import Container from "@/app/components/container";
import AboutTopics from "./components/about-topics";
import image from "@/public/Image/image.svg";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <Container>
        <main className="flex-grow pt-16">
          <section className="mb-12 text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Welcome to My Blog
            </h1>
            <p className="mb-6 text-lg sm:text-xl md:text-2xl">
              Exploring the world of technology, one post at a time.
            </p>
            <Button asChild>
              <Link href="/dashboard">Read Blog</Link>
            </Button>
          </section>
          <section className="flex justify-center items-center my-8">
            <div className="w-full max-w-xs sm:max-w-sm md:max-w-xs lg:max-w-sm xl:max-w-md">
              <Image
                src={image}
                alt="Blog illustration"
                layout="responsive"
                // width={300}
                // height={150}
              />
            </div>
          </section>

          <section className="mb-12">
            <AboutTopics />
          </section>

          <section>
            <h2 className="text-2xl text-center sm:text-2xl md:text-4xl font-bold my-14">
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
