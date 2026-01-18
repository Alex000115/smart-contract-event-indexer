export function simulateEvent(type, contract) {
  return {
    type,
    contract,
    data: "0xSIMULATED",
    timestamp: Date.now(),
    status: "reference"
  };
}
