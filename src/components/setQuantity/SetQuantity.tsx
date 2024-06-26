import { useFastFood } from "@/hooks/useFastFood";
import { FastFoodItem } from "@/utils/fastFood";
import { useCallback } from "react";

const btnStyles = "border-[1.2px] border-slate-300 px-2 rounded";
interface SetQtyProps {
  Order: FastFoodItem;
}
const SetQuantity: React.FC<SetQtyProps> = ({ Order }) => {
  const { handelCartQtyIncrease, handelCartQtyDecrease } = useFastFood();

  const handleDecrease = useCallback(() => {
    handelCartQtyDecrease(Order);
  }, [handelCartQtyDecrease, Order]);

  const handleIncrease = useCallback(() => {
    handelCartQtyIncrease(Order);
  }, [handelCartQtyIncrease, Order]);

  return (
    <div className=" flex gap-8 items-center">
      <div className=" flex gap-4 items-center text-base">
        <button onClick={handleDecrease} className={btnStyles}>
          -
        </button>
        <div>{Order.quantity}</div>
        <button onClick={handleIncrease} className={btnStyles}>
          +
        </button>
      </div>
    </div>
  );
};

export default SetQuantity;
