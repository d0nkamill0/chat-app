type IconProps = {
  name: string;
};
export const Icon = (
  props: IconProps & React.ImgHTMLAttributes<HTMLImageElement>
) => {
  const { name, ...rest } = props;
  return (
    <img
      height="24px"
      width="24px"
      src={`${process.env.PUBLIC_URL}/svg/${name}`}
      alt="robot-head"
      {...rest}
    />
  );
};
