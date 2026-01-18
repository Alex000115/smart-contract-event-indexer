export function storeEvent(event) {
  console.log("Indexed Event:");
  console.log("Type:", event.type);
  console.log("Contract:", event.contract);
  console.log("Timestamp:", new Date(event.timestamp).toISOString());
  console.log("----------------------------");
}
