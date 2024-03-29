/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../../common";
import type {
  TierV2Test,
  TierV2TestInterface,
} from "../../../../../contracts/test/tier/TierV2/TierV2Test";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint8",
        name: "version",
        type: "uint8",
      },
    ],
    name: "Initialized",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
    ],
    name: "report",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
    ],
    name: "reportTimeForTier",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId_",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5061001961001e565b6100de565b600054610100900460ff161561008a5760405162461bcd60e51b815260206004820152602760248201527f496e697469616c697a61626c653a20636f6e747261637420697320696e697469604482015266616c697a696e6760c81b606482015260840160405180910390fd5b60005460ff90811610156100dc576000805460ff191660ff9081179091556040519081527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15b565b6103b1806100ed6000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c806301ffc9a71461004657806388d686041461006e578063caa0eb3b146100b1575b600080fd5b610059610054366004610161565b6100c8565b60405190151581526020015b60405180910390f35b6100a361007c366004610202565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff92915050565b604051908152602001610065565b6100a36100bf3660046102f1565b42949350505050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082167f42766d3f00000000000000000000000000000000000000000000000000000000148061015b57507f01ffc9a7000000000000000000000000000000000000000000000000000000007fffffffff000000000000000000000000000000000000000000000000000000008316145b92915050565b60006020828403121561017357600080fd5b81357fffffffff00000000000000000000000000000000000000000000000000000000811681146101a357600080fd5b9392505050565b803573ffffffffffffffffffffffffffffffffffffffff811681146101ce57600080fd5b919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000806040838503121561021557600080fd5b61021e836101aa565b915060208084013567ffffffffffffffff8082111561023c57600080fd5b818601915086601f83011261025057600080fd5b813581811115610262576102626101d3565b8060051b6040517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0603f830116810181811085821117156102a5576102a56101d3565b6040529182528482019250838101850191898311156102c357600080fd5b938501935b828510156102e1578435845293850193928501926102c8565b8096505050505050509250929050565b6000806000806060858703121561030757600080fd5b610310856101aa565b935060208501359250604085013567ffffffffffffffff8082111561033457600080fd5b818701915087601f83011261034857600080fd5b81358181111561035757600080fd5b8860208260051b850101111561036c57600080fd5b9598949750506020019450505056fea26469706673582212206388dd357366f04d354d76772ae14dfd292f6201fdb0499006974a2d2768e91164736f6c63430008110033";

type TierV2TestConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TierV2TestConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TierV2Test__factory extends ContractFactory {
  constructor(...args: TierV2TestConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<TierV2Test> {
    return super.deploy(overrides || {}) as Promise<TierV2Test>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): TierV2Test {
    return super.attach(address) as TierV2Test;
  }
  override connect(signer: Signer): TierV2Test__factory {
    return super.connect(signer) as TierV2Test__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TierV2TestInterface {
    return new utils.Interface(_abi) as TierV2TestInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TierV2Test {
    return new Contract(address, _abi, signerOrProvider) as TierV2Test;
  }
}
