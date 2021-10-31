import Container from '../molecules/container/Container';
import Messages from '../molecules/message/Messages';
import Weather from '../molecules/weather/Weather';
import styles from './dashboard.module.css';
import ToDo from '../molecules/toDo/ToDo';

const Dashboard = () => {
  return (
    <div className={styles.dashboard}>
      <Container>
        <Weather />
      </Container>
      <Container css={{ backgroundColor: 'lightcoral' }}>
        <Messages />
      </Container>
      <Container>
        <ToDo />
      </Container>
    </div>
  );
};

export default Dashboard;
