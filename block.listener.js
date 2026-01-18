import { indexEvents } from "./event.indexer.js";

export function startBlockListener(provider) {
  provider.on("block", async (blockNumber) => {
    console.log("New Block:", blockNumber);
    try {
      const block = await provider.getBlock(blockNumber, true);
      if (block && block.transactions) {
        indexEvents(block.transactions);
      }
    } catch (err) {
      console.error("Block error:", err.message);
    }
  });
}
