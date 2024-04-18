import * as React from "react";
import Svg, { Circle } from "react-native-svg";

export default function LoaderSVG(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      style={{
        margin: "auto",
        background: "rgba(241, 242, 243, 0)",
        display: "block",
        shapeRendering: "auto",
      }}
      width="52px"
      height="52px"
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid"
      {...props}
    >
      <Circle
        cx={50}
        cy={50}
        fill="none"
        stroke="#0f0f0f"
        strokeWidth={9}
        r={35}
        strokeDasharray="164.93361431346415 56.97787143782138"
      ></Circle>
    </Svg>
  );
}
