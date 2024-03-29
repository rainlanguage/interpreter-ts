/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../../../common";
import type {
  ERC721HolderUpgradeable,
  ERC721HolderUpgradeableInterface,
} from "../../../../../../@openzeppelin/contracts-upgradeable/token/ERC721/utils/ERC721HolderUpgradeable";

const _abi = [
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
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "onERC721Received",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610224806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c8063150b7a0214610030575b600080fd5b61006761003e3660046100f4565b7f150b7a0200000000000000000000000000000000000000000000000000000000949350505050565b6040517fffffffff00000000000000000000000000000000000000000000000000000000909116815260200160405180910390f35b803573ffffffffffffffffffffffffffffffffffffffff811681146100c057600080fd5b919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000806000806080858703121561010a57600080fd5b6101138561009c565b93506101216020860161009c565b925060408501359150606085013567ffffffffffffffff8082111561014557600080fd5b818701915087601f83011261015957600080fd5b81358181111561016b5761016b6100c5565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f011681019083821181831017156101b1576101b16100c5565b816040528281528a60208487010111156101ca57600080fd5b8260208601602083013760006020848301015280955050505050509295919450925056fea26469706673582212208f8036c3f274e144931ff5fd040dc07c527ebef840cffd9eaf066ffbd39525da64736f6c63430008110033";

type ERC721HolderUpgradeableConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ERC721HolderUpgradeableConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ERC721HolderUpgradeable__factory extends ContractFactory {
  constructor(...args: ERC721HolderUpgradeableConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ERC721HolderUpgradeable> {
    return super.deploy(overrides || {}) as Promise<ERC721HolderUpgradeable>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): ERC721HolderUpgradeable {
    return super.attach(address) as ERC721HolderUpgradeable;
  }
  override connect(signer: Signer): ERC721HolderUpgradeable__factory {
    return super.connect(signer) as ERC721HolderUpgradeable__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC721HolderUpgradeableInterface {
    return new utils.Interface(_abi) as ERC721HolderUpgradeableInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC721HolderUpgradeable {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as ERC721HolderUpgradeable;
  }
}
