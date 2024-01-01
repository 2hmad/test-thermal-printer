"use client";

export const dynamic = "force-dynamic";
export default function Home() {
  const testPrinter = async () => {
    const res = await fetch("/api/print", {
      method: "POST",
    });
    console.log(res);
  };

  return <button onClick={async () => await testPrinter()}>Print Test</button>;
}
