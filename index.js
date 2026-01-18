import { connectRPC } from "./rpc.client.js";
import { startBlockListener } from "./block.listener.js";
import { NETWORK, CONTRACT_ADDRESS } from "./network.config.js";

console.log("Smart Contract Event Indexer");
console.log("Network:", NETWORK);
console.log("Contract:", CONTRACT_ADDRESS);

const provider = connectRPC();
startBlockListener(provider);
