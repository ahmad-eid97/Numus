//== Redux
import { useSelector } from 'react-redux';
//== Styles
import cls from './totalData.module.scss';

const TotalData = () => {
  const { products } = useSelector((state) => state.products);

  return (
    <div className={cls.totalData}>
      <p>
        <span>total</span>
        <span>{products.reduce((total, item) => total += (item.price * item.quantity), 0)}$</span>
      </p>
      <p>
        <span>Discount</span>
        <span>00.00$</span>
      </p>
      <p>
        <span>Tax 20%</span>
        <span>3.20$</span>
      </p>

      <h3>
        Total
        <br />
        <span>{products.reduce((total, item) => total += (item.price * item.quantity), 0)}$</span>
      </h3>
    </div>
  )
}

export default TotalData
