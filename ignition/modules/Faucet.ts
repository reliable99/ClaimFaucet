import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const ClaimFaucet = buildModule("ClaimFuacetModule", (m) => {
  const name = "DltToken";
  const symbol= "DLT";
  const claimfaucet = m.contract("ClaimFaucet", [name, symbol]);

  return { claimfaucet };
});

export default ClaimFaucet;