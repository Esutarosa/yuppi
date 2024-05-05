import type { FC } from 'react'

import styles from './index.module.scss'
import { cn } from '@/lib/utils'

const Footer: FC = () => {
  return (
    <footer className={cn("container ", styles.footer)}>
      <div className={styles.container}>
        <p className={styles.copyright}>Copyright © 2024 Yuppi Quizzes</p>
      </div>
    </footer>
  )
}

export default Footer