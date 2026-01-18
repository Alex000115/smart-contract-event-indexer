export function decodeERC721(log) {
  if (!log || !log.topics) return null;

  return {
    type: "ERC721",
    contract: log.address,
    data: log.data,
    timestamp: Date.now()
  };
}
