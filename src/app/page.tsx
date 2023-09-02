"use client";
// Import Next.js and standard modules
import Image from "next/image";
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import styles from "./page.module.css";
import Spline from "./spline";

export default function Home() {

    // 定义一个函数用于处理点击事件
    const handleStartClick = async () => {
        // 向某个网站发送一次GET请求
        console.log("sending request");
        await fetch("https://visrx.zeabur.app/demo/prepare")
            .then((response) => response.json())
            .then((data) => {
                console.log("Data received:", data);
            })
            .catch((error) => {
                console.log("Error:", error);
            }); 
        // jump to /demo
        window.location.href = "/demo";
    };

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

                <div className={styles.grid}>
                    <a
                        onClick={handleStartClick} // 绑定点击事件
                        className={styles.card}
                        // href="/demo"
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
