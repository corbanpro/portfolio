function App() {
  return (
    <div style={styles.page}>
      <h1>Portfolio</h1>
      <a target="_blank" rel="noreferrer" href="https://intercontinentle.corbanpro.net">
        Intercontinentle
      </a>
      <a target="_blank" rel="noreferrer" href="https://www.strategyUnlocked.com">
        Strategy Unlocked
      </a>
    </div>
  );
}

const styles = {
  page: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    width: "100vw",
    backgroundColor: "black",
    color: "white",
  },
} as const;

export default App;
