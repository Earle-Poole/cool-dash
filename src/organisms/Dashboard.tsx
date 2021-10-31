import Container from '../molecules/container/Container';
import Messages from '../molecules/message/Messages';
import Weather from '../molecules/weather/Weather';
import styles from './dashboard.module.css';

const Dashboard = () => {
  return (
    <div className={styles.dashboard}>
      <Container>
        <Weather />
      </Container>
      <Container css={{backgroundColor: "lightcoral"}}>
        <Messages />
      </Container>
    </div>
  );
};

export default Dashboard;
