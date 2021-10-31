import styles from './weather.module.css'
import weatherIcon from '../../assets/weather-placeholder.png'

const Weather = () => {
  return (
    <div className={styles.weather}>
      <img src={weatherIcon} alt='weather icon' />
      <span>
        Hey peeps! <strong>♥</strong>
      </span>
    </div>
  )
}

export default Weather
