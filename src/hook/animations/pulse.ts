export default {
  keyframes: [
    { transform: "scale3d(1, 1, 1)", offset: 0 },
    { transform: "scale3d(1.05, 1.05, 1.05)", offset: 0.5 },
    { transform: "scale3d(1, 1, 1)", offset: 1 },
  ],
  animationOptions: { duration: 1000, fill: "both", easing: "ease-in-out" },
};
