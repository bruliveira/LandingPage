import Button from "../button";
import Style from "./welcome.module.scss";

const Welcome = () => {
  return (
    <div className={Style.container}>
      <div className={Style.text}>
        <h1>Melhor agência de marketing do bairro</h1>
        <p>
          Somos uma agência de performance digital, aceleramos vendas e
          aquisição de leads para grandes marcas.
        </p>
        <Button title="Aumentar vendas" kind="secundary" />
      </div>
      <div className={Style.image}></div>
    </div>
  );
};
export default Welcome;
