import { EVMWallet } from "@catalogfi/wallets";
import { JsonRpcProvider, Wallet } from "ethers";

const provider = new JsonRpcProvider("https://rpc.ankr.com/eth");
const privateKey = "0x44a43637f59c5E3DaCF1bC343e814956708a3Fa7";
const wallet = new Wallet(privateKey, provider);

const evmWallet = new EVMWallet(wallet);