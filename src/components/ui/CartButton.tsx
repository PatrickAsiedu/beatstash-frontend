import { MdOutlineShoppingCart } from "react-icons/md";

const CartButton = () => {
  return (
    <button className="hidden md:flex bg-primary rounded-md px-4 py-1 items-center space-x-2">
      <MdOutlineShoppingCart fontSize={"1rem"}></MdOutlineShoppingCart>
      <span className="text-sm ">$29.8</span>
    </button>
  );
};
export default CartButton;
