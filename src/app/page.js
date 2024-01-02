"use client";

export default function Home() {
  const testPrinter = async () => {
    window.print();
  };

  return (
    <div>
      <div id="printableArea" style={{ width: "80mm" }}>
        <h1
          style={{
            textAlign: "center",
            fontSize: "1.5em",
            fontWeight: "bold",
            margin: "0",
          }}
        >
          Print me
        </h1>
        <p
          style={{
            textAlign: "center",
            fontSize: "1.2em",
            fontWeight: "bold",
            margin: "0",
          }}
        >
          Welcome to the print test. This is a test to see if the printer works
        </p>
      </div>
      <button onClick={async () => await testPrinter()}>Print Test</button>
    </div>
  );
}
