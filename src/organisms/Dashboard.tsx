import Container from '../molecules/container/Container'
import Weather from '../molecules/weather/Weather'
import styles from './dashboard.module.css'

const Dashboard = () => {
  return (
    <div className={styles.dashboard}>
      <Container>
        <Weather />
      </Container>
    </div>
  )
}

export default Dashboard
