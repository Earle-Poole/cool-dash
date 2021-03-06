import Container from '../molecules/container/Container';
import Messages from '../molecules/message/Messages';
import Weather from '../molecules/weather/Weather';
import styles from './dashboard.module.css';
import ToDo from '../molecules/toDo/ToDo';
import CountdownTimer from '../molecules/countdown/countdown';

const Dashboard = () => {
  return (
    <div className={styles.dashboard}>
      <Container>
        <Weather />
      </Container>
      <Container css={{ backgroundColor: 'lightcoral' }}>
        <Messages />
      </Container>
      <Container css={{ backgroundColor: 'yellow' }}>
        <ToDo />
      </Container>
      <Container>
        <CountdownTimer />
      </Container>
    </div>
  );
};

export default Dashboard;
