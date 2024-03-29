/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../../common";
import type {
  LibBytesTest,
  LibBytesTestInterface,
} from "../../../../../contracts/test/bytes/LibBytes/LibBytesTest";

const _abi = [
  {
    inputs: [
      {
        internalType: "bytes",
        name: "bytes0_",
        type: "bytes",
      },
      {
        internalType: "bytes",
        name: "bytes1_",
        type: "bytes",
      },
    ],
    name: "unsafeCopyBytesTo",
    outputs: [
      {
        internalType: "StackTop",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610286806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c8063dd8795dd14610030575b600080fd5b61004361003e3660046101ec565b610055565b60405190815260200160405180910390f35b600061005f61008d565b61006e60208301848451610095565b61007661008d565b61008682516100828590565b0190565b9392505050565b6040516000a0565b5b602081106100d35782518252602092830192909101907fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe001610096565b801561010d577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff600882021c808351168119855116178352505b505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600082601f83011261015257600080fd5b813567ffffffffffffffff8082111561016d5761016d610112565b604051601f83017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f011681019082821181831017156101b3576101b3610112565b816040528381528660208588010111156101cc57600080fd5b836020870160208301376000602085830101528094505050505092915050565b600080604083850312156101ff57600080fd5b823567ffffffffffffffff8082111561021757600080fd5b61022386838701610141565b9350602085013591508082111561023957600080fd5b5061024685828601610141565b915050925092905056fea26469706673582212202b55b4b22db8603a57eb7ee723002ccd052742095e607a49144952aa0e23dc9c64736f6c63430008110033";

type LibBytesTestConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: LibBytesTestConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class LibBytesTest__factory extends ContractFactory {
  constructor(...args: LibBytesTestConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<LibBytesTest> {
    return super.deploy(overrides || {}) as Promise<LibBytesTest>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): LibBytesTest {
    return super.attach(address) as LibBytesTest;
  }
  override connect(signer: Signer): LibBytesTest__factory {
    return super.connect(signer) as LibBytesTest__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): LibBytesTestInterface {
    return new utils.Interface(_abi) as LibBytesTestInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): LibBytesTest {
    return new Contract(address, _abi, signerOrProvider) as LibBytesTest;
  }
}
