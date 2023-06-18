// COMPONENTS
import Product from '../Product';
// STYLES
import cls from './allItems.module.scss';

const AllItems = () => {
  const items = [
    {
      image: '/images/products/burger.png',
      title: 'Cheeseburger',
      price: 4
    },
    {
      image: '/images/products/icecream.png',
      title: 'Icecream',
      price: 2
    },
    {
      image: '/images/products/coconut.png',
      title: 'Coconut',
      price: 8
    },
    {
      image: '/images/products/hotdog.png',
      title: 'Hot dog',
      price: 5
    },
    {
      image: '/images/products/burger.png',
      title: 'Cheeseburger',
      price: 4
    },
    {
      image: '/images/products/icecream.png',
      title: 'Icecream',
      price: 2
    },
    {
      image: '/images/products/coconut.png',
      title: 'Coconut',
      price: 8
    },
    {
      image: '/images/products/hotdog.png',
      title: 'Hot dog',
      price: 5
    },
    {
      image: '/images/products/burger.png',
      title: 'Cheeseburger',
      price: 4
    },
    {
      image: '/images/products/icecream.png',
      title: 'Icecream',
      price: 2
    },
    {
      image: '/images/products/coconut.png',
      title: 'Coconut',
      price: 8
    },
    {
      image: '/images/products/hotdog.png',
      title: 'Hot dog',
      price: 5
    },
  ]

  return (
    <div className={cls.allItems}>
      {items.map((item, idx) => (
        <Product key={idx} product={item} />
      ))}
    </div>
  )
}

export default AllItems
