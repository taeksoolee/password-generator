// import Image from "next/image";
import { useState } from "react";
import Card from "../src/app/components/Card";
// import { TestComp } from "../components/StyleModule";
// import styles from "./page.module.css";

export default function Home() {
  const [cardProps, setCardProps] = useState({
    title: 'Recommended Password', body: '', href: 'https://github.com/taeksoolee',
  });

  const generatePassword = () => {
    setCardProps((cardProps) => {
      return {
        ...cardProps,
        body: Math.ceil((Math.random() * 100) / 100) + '',
      }
    })
  }

  return (
    <main>
      <h1>Password Generator</h1>
      <form>
        <input />
        <input />

        <button onClick={generatePassword}>Submit</button>
      </form>

      <Card {...cardProps} /> 
    </main>
  );
}
