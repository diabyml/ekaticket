// import the hook and options type
"use client";

import useEmblaCarousel, { EmblaOptionsType } from "embla-carousel-react";
import React, { PropsWithChildren, useEffect, useState } from "react";
import Dots from "./Dots";
import Autoplay from "embla-carousel-autoplay";

// Define the props
type Props = PropsWithChildren & EmblaOptionsType;

const Carousel = ({ children, ...options }: Props) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()]);

  // need to selectedIndex to allow this component to re-render in react.
  // Since emblaRef is a ref, it won't re-render even if there are internal changes to its state.
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    function selectHandler() {
      const index = emblaApi?.selectedScrollSnap();
      setSelectedIndex(index || 0);
    }

    emblaApi?.on("select", selectHandler);
    // cleanup
    return () => {
      emblaApi?.off("select", selectHandler);
    };
  }, [emblaApi]);

  const length = React.Children.count(children);
  const canScrollNext = !!emblaApi?.canScrollNext();
  const canScrollPrev = !!emblaApi?.canScrollPrev();
  return (
    <>
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">{children}</div>
      </div>
      <Dots itemsLength={length} selectedIndex={selectedIndex} />
      {/* <CarouselControls
        canScrollNext={canScrollNext}
        canScrollPrev={canScrollPrev}
        onNext={() => emblaApi?.scrollNext()}
        onPrev={() => emblaApi?.scrollPrev()}
      /> */}
    </>
  );
};
export default Carousel;
