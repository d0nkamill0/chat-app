import { Icon } from "./Icon";

const getRobotDimensions = (size: RobotHeadSize) => {
  switch (size) {
    case "small":
      return "39px";
    case "normal":
      return "65px";
    case "large":
      return "120px";
  }
};

type RobotHeadSize = "small" | "normal" | "large";
type RobotProps = {
  size?: RobotHeadSize;
  onClick?: () => void;
  className?: string;
};

export const RobotHead = (props: RobotProps) => {
  const { size = "normal", onClick, className } = props;
  const dimension = getRobotDimensions(size);
  return (
    <Icon
      className={className}
      height={dimension}
      width={dimension}
      name={"robot-head.svg"}
      onClick={onClick || undefined}
      alt="robot-head"
    />
  );
};
