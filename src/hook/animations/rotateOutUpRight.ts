const transformOrigin = "right bottom";

export default {
  keyframes: [
    { transform: "none", opacity: 1, transformOrigin },
    { transform: "rotate3d(0, 0, 1, 90deg)", opacity: 0, transformOrigin },
  ],
  animationOptions: { duration: 1000, fill: "both" },
};
