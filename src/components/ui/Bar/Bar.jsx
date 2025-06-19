import Colors from "../Colors/Colors";

const Bar = ({ length, color, width }) => {
  const barHeight = Math.min(length * 3, 900); // Max height 300px

  const barStyle = {
    height: `${barHeight}px`,
    backgroundColor: Colors[color],
    width: `${Math.max(width, 4)}px`,
    borderRadius: `${Math.min(width / 2, 6)}px ${Math.min(width / 2, 6)}px 2px 2px`,
    margin: `0 ${width > 10 ? "1px" : "0.5px"}`,
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "center",
    position: "relative",
    boxShadow: "0 2px 4px rgba(0,0,0,0.3)",
    border: "1px solid rgba(255,255,255,0.1)",
  };

  const numberStyle = {
    position: "absolute",
    bottom: "2px",
    left: "50%",
    transform: "translateX(-50%)",
    fontWeight: "bold",
    fontSize: width >= 20 ? "12px" : width >= 15 ? "10px" : "8px",
    color: "#fff",
    textShadow: "1px 1px 2px rgba(0,0,0,0.8)",
  };

  return (
    <div style={barStyle}>
      {width >= 12 && <div style={numberStyle}>{length}</div>}
    </div>
  );
};

export default Bar;
