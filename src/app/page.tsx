// Import Next.js and standard modules
import Image from "next/image";
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import styles from "./page.module.css";
import Spline from "./spline";

export default function Home() {
    return (
        <div style={{ position: "relative", backgroundColor: "F1F2F3" }}>
            <Spline />
            <main className={styles.main} style={{ position: "relative" }}>
                <div className={styles.description}>
                    <p>
                        药忆演示&nbsp;
                        <code className={styles.code}>v0.02</code>
                    </p>
                </div>
                {/* <span className={styles.centerAtBottom}></span> */}
                
                <div className={styles.grid}>


                    <a
                        href="/demo"
                        className={styles.card}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <h2>
                            开始 <span>-&gt;</span>
                        </h2>
                        <p>以老人身份开始体验</p>
                    </a>
                </div>
                
            </main>
        </div>
    );
}
