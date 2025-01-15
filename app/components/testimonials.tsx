import * as React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { testimonials } from "@/db/testimonial-data";

export function Testimonials() {
  return (
    <Carousel className="w-full">
      <CarouselContent className="-ml-1">
        {testimonials.map((testimonial, index) => (
          <CarouselItem
            key={index}
            className="pl-1 sm:basis-full md:basis-1/2 lg:basis-1/3"
          >
            <div className="p-1 flex flex-col h-full">
              <Card className="bg-white p-4 rounded-lg flex flex-col h-full">
                <CardHeader>
                  <CardTitle className="italic text-gray-600">
                    &quot;{testimonial.text}&quot;
                  </CardTitle>
                </CardHeader>

                <CardContent className="flex-grow flex items-center gap-4">
                  {/* Replace with your SVG */}
                  <svg
                    className="w-10 h-10 text-gray-600 rounded-full"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="7" r="4" />
                    <path d="M5 21c0-4 4-5 7-5s7 1 7 5" />
                  </svg>

                  {/* Name and Role */}
                  <div>
                    <p className="font-bold">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
