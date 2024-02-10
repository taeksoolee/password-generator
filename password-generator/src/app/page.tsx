import Image from "next/image";
// import styles from "./page.module.css";

import * as stylex from '@stylexjs/stylex';

const styles = stylex.create({
  text: {
    color: 'rgba(255,0,0,1)',
  },
  button: {
    backgroundColor: {
      default: 'lightblue',
      ':hover': 'blue',
      ':active': 'darkblue',
    },
  },
});

export default function Home() {
  return (
    <main>
      <div {...stylex.props(styles.button)}>AAA</div>
    </main>
  );
}
