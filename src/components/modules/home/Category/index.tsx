import { getAllCategories } from "@/app/services/Category";
import { ICategory } from "@/app/types/category";
import { Button } from "@/components/ui/button";
import CategoryCard from "@/components/ui/core/CategoryCard";

import Link from "next/link";

const Category = async () => {
  const { data: categories } = await getAllCategories();
  return (
    <div className="pl-4 pr-4">
        <div className="container mx-auto my-20">
      <div className="flex items-center justify-between">
        <h2 className="font-bold text-2xl">Category</h2>
        <Link href="/products">
          <Button variant="outline" className="rounded-full">
            View All
          </Button>
        </Link>
      </div>
      <div className="grid grid-cols-5 gap-8 my-5">
        {Array(10)
          .fill(categories?.[0])
          .map((category: ICategory, idx: number) => (
            <CategoryCard key={idx} category={category} />
          ))}
      </div>
    </div>
    </div>
  );
};

export default Category;