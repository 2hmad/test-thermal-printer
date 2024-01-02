"use client";

export default function Home() {
  const testPrinter = async () => {
    const res = await fetch(
      "https://test-pos-printer-backend.vercel.app/api/print",
      {
        method: "POST",
      }
    );
    console.log(res);
  };

  return <button onClick={async () => await testPrinter()}>Print Test</button>;
}
