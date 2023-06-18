// Components
import Item from './Item';
//== Redux
import { useSelector } from 'react-redux';
//== Styles
import cls from './items.module.scss';

const Items = () => {
  const { products } = useSelector((state) => state.products)

  return (
    <div className={cls.items}>
      {products.map((item, idx) => (
        <Item data={item} key={idx} />
      ))}

      {!products.length &&
        <h4>No Products added</h4>
      }
    </div>
  )
}

export default Items;