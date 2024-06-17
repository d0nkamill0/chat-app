import styles from "./ChatHeader.module.css";
import { Icon } from "../../Icon";
import { RobotHead } from "../../RobotHead";

type ChatHeaderProps = {
  onClose?: () => void;
  children?: JSX.Element;
};

export const ChatHeader = (props: ChatHeaderProps) => {
  const { onClose, children } = props;
  return (
    <div className={styles.wrapper}>
      <Icon
        className={styles["burger-icon"]}
        height="24px"
        width="24px"
        name="burger-icon.svg"
        alt="robot-head"
      />
      {children}
      <Icon
        className={styles["close-icon"]}
        height="14px"
        width="14px"
        name="close-icon.svg"
        onClick={onClose}
        alt="close-icon"
      />
    </div>
  );
};
