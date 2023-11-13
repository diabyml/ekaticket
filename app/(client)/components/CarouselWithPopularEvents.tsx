import Carousel from "@/components/carousel/Carousel";
import Image from "next/image";
import React from "react";

function CarouselWithPopularEvents({ images }: { images: string[] }) {
  return (
    <div className="max-w-5xl mx-auto">
      <Carousel loop>
        {images.map((src, i) => {
          return (
            // 👇 style each individual slide.
            // relative - needed since we use the fill prop from next/image component
            // h-64 - arbitrary height
            // flex[0_0_100%]
            //   - shorthand for flex-grow:0; flex-shrink:0; flex-basis:100%
            //   - we want this slide to not be able to grow or shrink and take up 100% width of the viewport.
            <div className="relative h-72 md:h-[450px] flex-[0_0_100%]" key={i}>
              {/* use object-cover + fill since we don't know the height and width of the parent */}
              <Image src={src} fill className="object-cover" alt="alt" />
            </div>
          );
        })}
      </Carousel>
    </div>
  );
}

export default CarouselWithPopularEvents;
