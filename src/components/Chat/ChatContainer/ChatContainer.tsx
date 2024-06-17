import React from "react";
import { RobotHead } from "../../RobotHead";
import styles from "./ChatContainer.module.css";
import { Chat } from "../Chat";
import { ChatPlaceholder } from "../ChatPlaceholder/ChatPlaceholder";

export const ChatContainer = () => {
  const [isChatOpen, setChatOpen] = React.useState(true);
  const [isFirstVisit, setFirstVisit] = React.useState(true);

  React.useEffect(() => {}, []);
  const handleRobotClick = () => setChatOpen((prev) => !prev);
  const handlePlaceholderClick = () => setFirstVisit(false);
  const renderChat = () =>
    isFirstVisit ? (
      <ChatPlaceholder onClick={handlePlaceholderClick} />
    ) : (
      <Chat />
    );

  return (
    <div className={styles.wrapper}>
      {isChatOpen ? renderChat() : null}
      <div className={styles["robot-head-container"]}>
        <RobotHead
          className={styles["robot-head"]}
          onClick={handleRobotClick}
        />
      </div>
    </div>
  );
};
