import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/Shadcn/carousel";
import Image from "next/image";

export function BannerCarousel() {
  return (
    <Carousel className="w-full max-w-screen-xl">
      <CarouselContent className="w-full rounded-xl">
        <CarouselItem className="w-full h-96 relative">
          {/* TODO: Change object cover when have the real images on nice resolutions */}
          <Image
            className="absolute top-0 left-0 w-full h-full object-fill rounded-xl"
            src={"/banner-image.jpg"}
            alt="Imagem do banner"
            width={800}
            height={400}
          />
        </CarouselItem>

        <CarouselItem>...</CarouselItem>
        <CarouselItem>...</CarouselItem>
      </CarouselContent>

      <CarouselPrevious className="hidden xl:flex p-0 w-24 h-24 rounded-full border-2 border-blue-500 bg-blue-100 cursor-pointer disabled:opacity-90 disabled:cursor-not-allowed" />
      <CarouselNext className="hidden xl:flex p-0 w-24 h-24 rounded-full border-2 border-blue-500 bg-blue-100 cursor-pointer disabled:opacity-90 disabled:cursor-not-allowed" />
    </Carousel>
  );
}
