//== Components
import { Sidebar, AllItems, Actions } from "@/components"
//== Styles
import cls from './home.module.scss';

const Home = () => {
  return (
    <main>
      <Sidebar />
      <div className={cls.body}>
        <div className={cls.top}>
          <AllItems />
        </div>
        <div className={cls.bottom}>
          <Actions />
        </div>
      </div>
    </main>
  )
}

export default Home