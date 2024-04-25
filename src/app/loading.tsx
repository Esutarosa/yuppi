import type { FC } from "react";

import style from "./index.module.scss";

const Loading: FC = () => {
  return (
    <div className={style.container}>
      <div className={style.loader}></div>
    </div>
  );
};

export default Loading;
