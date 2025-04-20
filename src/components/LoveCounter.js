import dayjs from "../plugins/dayjs";

import React, { useEffect, useState } from "react";
import CounterRow from "./CounterRow";

const LOVE_DATE = new dayjs("2024-06-29");

const LoveCounter = () => {
  const [now, setNow] = useState(new dayjs());

  useEffect(() => {
    setTimeout(() => {
      setNow(new dayjs());
    }, 10);
  }, [now]);

  const days = now.diff(LOVE_DATE, "day");
  const months = now.diff(LOVE_DATE, "month");
  const years = now.diff(LOVE_DATE, "year");

  [days, months, years].map((item) => <CounterRow count={days} unit="days" />);
  return (
    <div style={styles.container}>
      <div style={styles.section}>
        <CounterRow count={days} unit="days" />
        <CounterRow count={months} unit="months" />
        <CounterRow count={years} unit="years" />
      </div>
      <div></div>
      <div style={{ ...styles.section, ...styles.bottomSection }}>
        <span style={styles.fullDateText}>
          {LOVE_DATE.format("DD/MM/YYYY")}
        </span>
        <span style={styles.quote}>
          {"Since the first day we met".toUpperCase()}
        </span>
      </div>
    </div>
  );
};

const styles = {
  container: {
    width: "100%",
    height: "100%",
    display: "flex",
    flex: 1,
    alignItems: "stretch",
    justifyContent: "space-evenly",
    flexDirection: "column",
    backgroundColor: "#BE5985",
    margin: 0,
    padding: 0,
  },
  section: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#BE5985",
    margin: 0,
    padding: 0,
  },
  bottomSection: {
    position: "absolute",
    bottom: "10%",
    left: 0,
    right: 0,
  },
  fullDateText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
  },
  quote: {
    marginTop: 10,
    color: "white",
  },
};

export default LoveCounter;
