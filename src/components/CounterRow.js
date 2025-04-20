import React from "react";

const CounterRow = ({ count, unit }) => {
  return (
    <div style={styles.counterRow}>
      <span style={styles.countText}>{count}</span>
      <span style={styles.unitText}>{unit}</span>
    </div>
  );
};

const styles = {
  counterRow: {
    display: "flex",
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
  },
  countText: {
    fontSize: 64,
    fontWeight: "bold",
    flexBasis: "50%",
    textAlign: "right",
    color: "#FFEDFA",
    paddingRight: "40px",
  },
  unitText: {
    marginLeft: 10,
    width: "50%",
    position: "absolute",
    left: "50%",
    color: "#FFEDFA",
  },
};

export default CounterRow;
