import { getAllCategories } from "@/app/services/Category";
import ManageCategories from "@/components/modules/shop/category";


const ProductCategoryPage = async () => {
  const { data, } = await getAllCategories();
  return (
    <div>
      <ManageCategories categories={data} />
    </div>
  );
};

export default ProductCategoryPage;