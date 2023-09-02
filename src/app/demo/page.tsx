import React from "react";
import styles from "./page.module.css";

export default function Home() {
    return (
        <main className={styles.main}>
            <div className={styles.fullScreenImage}>
                <img src="/demo.png" alt="demoflowchart" />
            </div>
        </main>
    );
}
