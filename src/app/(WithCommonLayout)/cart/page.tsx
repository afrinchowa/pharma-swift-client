

import CartProducts from "@/components/modules/cart/CartProducts";
import Coupon from "@/components/modules/cart/Coupon";
import ProductBanner from "@/components/modules/products/banner";
import PSContainer from "@/components/ui/core/PSContainer";


const CartPage = () => {
  return (
    <PSContainer>
      <ProductBanner title="Cart Page" path="Home - Cart" />
      <div className="grid grid-cols-12 gap-8 my-5">
        <CartProducts />
        <Coupon />
      </div>
    </PSContainer>
  );
};

export default CartPage;