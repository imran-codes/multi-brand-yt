export type ButtonProps = {
  type: "button" | "submit" | "reset";
  text: string;
  handleClick?: () => void;
};
