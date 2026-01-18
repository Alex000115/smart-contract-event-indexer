import { decodeERC20 } from "./erc20.decoder.js";
import { decodeERC721 } from "./erc721.decoder.js";
import { storeEvent } from "./event.store.js";

export function indexEvents(transactions) {
  transactions.forEach((tx) => {
    if (!tx.logs) return;

    tx.logs.forEach((log) => {
      const erc20 = decodeERC20(log);
      const erc721 = decodeERC721(log);

      if (erc20) storeEvent(erc20);
      if (erc721) storeEvent(erc721);
    });
  });
}
