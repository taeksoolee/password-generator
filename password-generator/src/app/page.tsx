// import Image from "next/image";
import Card from "./components/Card";
import { TestComp } from "./components/StyleModule";
// import styles from "./page.module.css";

export default function Home() {
  const cardProps = {
    title: 'Title', body: 'Content', href: 'https://www.naver.com',
  };
  return (
    <main>
      <h1>Password Generator</h1>
      <div></div>
      <Card {...cardProps} /> 
      <form>
        <input />
        <input />

        <button></button>
      </form>
    </main>
  );
}
