import styles from './container.module.css'
import Draggable from 'react-draggable'
import { CSSProperties, useRef } from 'react'

interface ContainerProps {
  children: React.ReactNode
  css?: CSSProperties
}

const Container = ({ children, css }: ContainerProps) => {
  const containerRef = useRef<HTMLDivElement>(null!)
  return (
    <Draggable handle={'.handle'} nodeRef={containerRef}>
      <div className={styles.container} ref={containerRef} style={css}>
        <div className='handle'>☰</div>
        {children}
      </div>
    </Draggable>
  )
}

export default Container
