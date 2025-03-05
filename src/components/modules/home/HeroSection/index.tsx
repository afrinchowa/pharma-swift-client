import { Button } from "@/components/ui/button";
import styles from "./HeroSection.module.css";
import PSContainer from "@/components/ui/core/PSContainer";
// import Image from "next/image";

const HeroSection = () => {
  return (
  <PSContainer>
     <div className="pl-4 pr-4">
     <div
      className={`${styles.banner} container mx-auto border-2 border-white rounded-3xl mt-5`}
    >
      <div className="grid grid-cols-2 gap-4 items-center ">
        <div className="pl-12 pt-18">
          <h1 className="text-4xl font-bold leading-normal">
            Don&apos;t Miss Out on <br /> These Unbeatable Black <br /> Friday
            Deals!
          </h1>
          <p className="my-3">
            Save big this Black Friday with unbeatable deals on tech, home
            essentials, fashion, and more! Limited stock.
          </p>

          <Button className="rounded-full mr-2">Buy Now</Button>
          <Button className="rounded-full" variant="outline">
            All Products
          </Button>
        </div>
        <div className="flex items-center justify-center">
          {/* <Image src={cupImage} alt="cup image" /> */}
        </div>
      </div>
    </div>
   </div>
  </PSContainer>
  );
};

export default HeroSection;
