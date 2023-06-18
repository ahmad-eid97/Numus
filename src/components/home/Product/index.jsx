//== Logic
import { useLogic } from './logic';
// STYLES
import cls from './product.module.scss';

const Product = ({ product }) => {
  const { addNewProduct } = useLogic();

  return (
    <div className={cls.product}>
      <div className={cls.plus} onClick={() => addNewProduct(product)}>
        <i className="fa-regular fa-plus"></i>
      </div>
      <img src={product.image} alt="product" />
      <h4>{product.title}</h4>
      <span>${product.price}.00</span>
    </div>
  )
}

export default Product
