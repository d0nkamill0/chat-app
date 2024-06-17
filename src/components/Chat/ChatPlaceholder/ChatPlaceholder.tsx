import styles from "./ChatPlaceholder.module.css";
import { Icon } from "../../Icon";
import { RobotHead } from "../../RobotHead";
import { ChatHeader } from "../ChatHeader/ChatHeader";
import i18n from "../../../helpers/i18n.helper";

type ChatPlaceholderProps = {
  onClick?: () => void;
};

export const ChatPlaceholder = (props: ChatPlaceholderProps) => {
  const { onClick } = props;
  return (
    <div onClick={onClick} className={styles.wrapper}>
      <ChatHeader>
        <RobotHead size="large" className={styles["robot-head"]} />
      </ChatHeader>
      <div className={styles.content}>
        <div className={styles["text-wrapper"]}>
          <header className={styles.header}>{i18n("greeting")}</header>
          <p className={styles.desc}>{i18n("desc")}</p>
        </div>
        <div className={styles.input}>
          <div className={styles["input-text"]}>{i18n("inputPlaceholder")}</div>
          <Icon name="send-icon.svg" />
        </div>
      </div>
    </div>
  );
};
