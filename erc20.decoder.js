export function decodeERC20(log) {
  if (!log || !log.topics) return null;

  return {
    type: "ERC20",
    contract: log.address,
    data: log.data,
    timestamp: Date.now()
  };
}
