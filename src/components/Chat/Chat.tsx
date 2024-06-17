import React from "react";
import i18n from "../../helpers/i18n.helper";
import styles from "./Chat.module.css";
import { ChatHeader } from "./ChatHeader/ChatHeader";
type ChatProps = {
  isPlaceholder?: boolean;
};

export const Chat = (props: ChatProps) => {
  return (
    <div className={styles.wrapper}>
      <ChatHeader>
        <div>{i18n("botName")}</div>
      </ChatHeader>
    </div>
  );
};
