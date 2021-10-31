import Container from "../molecules/container/Container";
import ToDo from "../molecules/toDo/ToDo";
import Weather from "../molecules/weather/Weather";
import styles from "./dashboard.module.css";

const Dashboard = () => {
  return (
    <div className={styles.dashboard}>
      <Container>
        <Weather />
      </Container>
      <Container>
        <ToDo />
      </Container>
    </div>
  );
};

export default Dashboard;
