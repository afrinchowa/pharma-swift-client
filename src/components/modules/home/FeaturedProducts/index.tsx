import { getAllProducts } from "@/app/services/Product";
import { IProduct } from "@/app/types/product";
import { Button } from "@/components/ui/button";
import ProductCard from "@/components/ui/core/ProductCard";
import PSContainer from "@/components/ui/core/PSContainer";

import Link from "next/link";

const FeaturedProducts = async () => {
  const { data: products } = await getAllProducts();

  return (
  <PSContainer>
      <div className="bg-white bg-opacity-50 px-4 py-10">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <h2 className="font-bold text-2xl">Featured Products</h2>
          <Link href="/products">
            <Button variant="outline" className="rounded-full">
              All Collection
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-5 gap-8 my-5">
          {Array(5)
            .fill(products?.[0])
            .map((product: IProduct, idx: number) => (
              <ProductCard key={idx} product={product} />
            ))}
        </div>
      </div>
    </div>
  </PSContainer>
  );
};

export default FeaturedProducts;