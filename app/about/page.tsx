import { Badge } from "@/components/ui/badge";
import Container from "../components/container";
import { Footer } from "../components/footer";
import Image from "next/image";
import image from "@/public/Image/Image.png";

const page = () => {
  return (
    <div className="flex flex-col h-screen">
      <Container>
        {" "}
        <div className="flex flex-col items-center space-y-8 py-12">
          <h1 className="text-4xl font-bold">About Me</h1>
          <Image
            src={image}
            alt="Your Name"
            width={450}
            height={450}
            className="rounded-full"
          />
          <h2 className="text-2xl font-semibold">Your Name</h2>
          <p className="text-center text-muted-foreground max-w-2xl">
            Welcome to my blog! I&apos;m a passionate writer and tech
            enthusiast. Here, I share my thoughts on various topics including
            technology, travel, and personal development. My goal is to inspire
            and inform through my writing, drawing from my experiences and
            insights.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            <Badge variant="secondary">Web Development</Badge>
            <Badge variant="secondary">Writing</Badge>
            <Badge variant="secondary">Photography</Badge>
            <Badge variant="secondary">Travel</Badge>
          </div>
          <p className="text-sm text-center text-muted-foreground max-w-2xl">
            I believe in continuous learning and personal growth. Through this
            blog, I hope to connect with like-minded individuals and create a
            community of curious learners. Feel free to explore my articles and
            don&apos;t hesitate to reach out if you have any questions or just
            want to chat!
          </p>
        </div>
      </Container>
      <Footer />
    </div>
  );
};

export default page;
