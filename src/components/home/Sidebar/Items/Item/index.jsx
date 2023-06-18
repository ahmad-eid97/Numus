import cls from './item.module.scss';

const Item = ({ data }) => {
  return (
    <div className={cls.item}>
      <p>{data.title}</p>
      <div className={cls.details}>
        <p><span>{data.quantity}</span> x {data.price}.00$</p>
        <p className={cls.total}>{data.quantity * data.price}.00$</p>
      </div>
    </div>
  )
}

export default Item