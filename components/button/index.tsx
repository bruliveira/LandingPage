import Style from "./button.module.scss";

const Button = ({ title, kind }: any) => {
  const genarationClassByKin = () => {
    if (kind === "secundary") return Style.secundary;
    return Style.primary;
  };
  return (
    <button className={`${Style.button} ${genarationClassByKin()}`}>
      {title}
    </button>
  );
};
export default Button;
