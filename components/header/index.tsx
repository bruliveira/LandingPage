import Image from "next/image";
import logo from "/public/images/logo.svg";
import Link from "next/link";
import Style from "./header.module.scss";
import Button from "../button";

const Header = () => {
  return (
    <>
      <div className={Style.container}>
        <div className={Style.logotipo}></div>
        <Image src={logo} alt="logotipo" />
        <div className={Style.menu}>
          <Link href="/">Home</Link>
          <Link href="/">O que fazemos?</Link>
          <Link href="/">Cases</Link>
        </div>
        <div className={Style.action}>
          <Button title="Fale Conosco" />
        </div>
      </div>
    </>
  );
};

export default Header;
