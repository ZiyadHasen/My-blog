import { Check } from "lucide-react";

const topics = [
  "Web Development",
  "Programming",
  "Cloud Computing (AWS and others)",
  "Career Advice",
  "Telegrams Bots Development",
  "Open Source Contribution",
];

export default function AboutTopics() {
  return (
    <div className="w-full  p-6 ">
      <header className="mb-6">
        <h1 className="text-3xl font-bold">What do I write about?</h1>
      </header>
      <div className="space-y-6">
        <p className="text-lg text-muted-foreground">
          I am a backend-heavy developer, so I write about backend technologies.
          I also write about some frontend technologies, but not as much as I
          write about backend technologies. I also write about other
          tech-related topics.
        </p>
        <ul className="space-y-4">
          {topics.map((topic, index) => (
            <li key={index} className="flex items-start gap-2">
              <Check className="h-5 w-5 mt-1 flex-shrink-0 text-green-500" />
              <span className="text-lg">{topic}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
