// lib/mui.js

"use client";
import "./Spline.css";
// export {default as Spline} from "@splinetool/react-spline";
import Spline from "@splinetool/react-spline";

export default function splineBG() {
    return (
        <div className="splineBackground">
            <Spline scene="https://prod.spline.design/SBHApfN7KKa-Imfk/scene.splinecode" />
        </div>
    );
}
