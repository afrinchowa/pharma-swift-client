import { getAllProducts } from "@/app/services/Product";
import ManageProducts from "@/components/modules/shop/product";


const ManageProductsPage = async () => {
  const { data } = await getAllProducts();
  return (
    <div>
      <ManageProducts products={data} />
    </div>
  );
};

export default ManageProductsPage;