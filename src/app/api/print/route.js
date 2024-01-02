import { PrinterTypes, ThermalPrinter } from "node-thermal-printer";

export async function POST(res) {
  let printer = new ThermalPrinter({
    type: PrinterTypes.EPSON,
    interface: "tcp://192.168.1.100",
    options: {
      timeout: 5000,
    },
  });

  printer.println("Test Printer");

  try {
    let isConnected = await printer.isPrinterConnected();
    console.log("Printer connected:", isConnected);

    let execute = printer.execute();
    console.log("Print success:", execute);

    res.status(200).json({ message: "Print successful" });
  } catch (error) {
    console.error("Print failed:", error);
    res.status(500).json({ message: "Print failed", error });
  }
}
