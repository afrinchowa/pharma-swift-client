import { getFlashSaleProducts } from "@/app/services/FlashSale";
import { Button } from "@/components/ui/button";
import PSContainer from "@/components/ui/core/PSContainer";

import Link from "next/link";
import CountDown from "./CountDown";
import ProductCard from "@/components/ui/core/ProductCard";
import { IProduct } from "@/app/types/product";


const FlashSale = async () => {
  const { data: products } = await getFlashSaleProducts();

  return (
    <div className=" bg-white bg-opacity-50 pt-6 pb-8">
      <PSContainer className="my-16">
        <div className="flex items-center justify-between ">
          <div className="flex items-center gap-8">
            <h2 className="text-3xl font-bold">Flash Sale</h2>
            <CountDown />
          </div>

          <Link href="/products">
            <Button variant="outline" className="rounded-full">
              All Collection
            </Button>
          </Link>
        </div>
        <div className="grid grid-cols-4 gap-4 mt-10">
          {products?.slice(0, 4)?.map((product: IProduct, idx: number) => (
            <ProductCard key={idx} product={product} />
          ))}
        </div>
      </PSContainer>
    </div>
  );
};

export default FlashSale;