import logo from "./logo.svg";
import styles from "./App.module.css";
import { Chat } from "./components/Chat/Chat";
import { RobotHead } from "./components/RobotHead";
import { ChatContainer } from "./components/Chat/ChatContainer/ChatContainer";

function App() {
  return (
    <div className={styles.wrapper}>
      <ChatContainer />
    </div>
  );
}

export default App;
