import { RobotHead } from "../../RobotHead";
import styles from "./ChatMessage.module.css";

type ChatMessageProps = {
  isBot?: boolean;
};

export const ChatMessage = (props: ChatMessageProps) => {
  const { isBot } = props;

  return (
    <div>
      {isBot ? (
        <RobotHead size="small" className={styles["robot-head"]} />
      ) : null}
    </div>
  );
};
