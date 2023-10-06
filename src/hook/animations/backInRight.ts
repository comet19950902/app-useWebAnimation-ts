/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
export default {
  keyframes: [
    { transform: "translateX(2000px) scale(0.7)", opacity: 0.7, offset: 0 },
    { transform: "translateX(0px) scale(0.7)", opacity: 0.7, offset: 0.8 },
    { transform: "scale(1)", opacity: 1, offset: 1 },
  ],
  animationOptions: { duration: 1000, fill: "both" },
};
