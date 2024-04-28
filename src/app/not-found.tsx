import type { FC } from "react"
import style from "@/styles/not-found/index.module.scss"

const NotFound: FC = () => {
  return (
    <div className={style.notfound}>
      <div className={style.notfound__container}>
        <div className={style.notfound__img}>
          <div className={style.notfound__elements}>
            <span className={style.notfound__circleelement}></span>
            <span className={style.notfound__circleelement}></span>
            <span className={style.notfound__circleelement}></span>
          </div>
          <div className={style.notfound__animation}>
            &#123;
            <div className={style.notfound__number}>4</div>
            <div className={style.notfound__number}>0</div>
            <div className={style.notfound__number}>4</div>
            &#125;
          </div>
        </div>
        <div className={style.notfound__info}>
          <h1 className={style.notfound__title}>Page Not Found</h1>
          <p className={style.notfound__text}>Sorry, but we can&apos;t find the page you are looking for...</p>
        </div>
      </div>
    </div>
  )
}

export default NotFound