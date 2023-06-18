"use client"
// COMPONENTS
import TotalData from './TotalData';
import Items from './Items';
// STYLES
import cls from './sidebar.module.scss';

const Sidebar = () => {

  return (
    <div className={cls.sidebar}>
      <div className={cls.top}>
        <div className={cls.logo}>
          <img src="/images/logo/logo.png" alt="logo" />
        </div>
        <div className={cls.head}>
          <h4>Employee: Rahaf Hamada</h4>
        </div>
        <Items />
      </div>

      <TotalData />
    </div>
  )
}

export default Sidebar
