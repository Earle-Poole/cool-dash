import styles from './container.module.css'
import Draggable from 'react-draggable'
import { useRef } from 'react'

interface ContainerProps {
  children: React.ReactNode
}

const Container = ({ children }: ContainerProps) => {
  const containerRef = useRef<HTMLDivElement>(null!)
  return (
    <Draggable handle={'.handle'} nodeRef={containerRef}>
      <div className={styles.container} ref={containerRef}>
        <div className={'.handle'}>☰</div>
        {children}
      </div>
    </Draggable>
  )
}

export default Container
