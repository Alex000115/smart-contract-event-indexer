import { getAddress } from "ethers";
import { CONTRACT_ADDRESS } from "./network.config.js";

export function isTargetContract(address) {
  if (!address) return false;
  try {
    return (
      getAddress(address).toLowerCase() ===
      getAddress(CONTRACT_ADDRESS).toLowerCase()
    );
  } catch {
    return false;
  }
}
