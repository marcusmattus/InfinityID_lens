import { ConnectButton } from "@rainbow-me/rainbowkit";
import styles from "../styles/Home.module.css";

export default function Wallet() {
  return (
    <div styles={styles.buttonContainer}>
        <ConnectButton />
    </div>
  );
}