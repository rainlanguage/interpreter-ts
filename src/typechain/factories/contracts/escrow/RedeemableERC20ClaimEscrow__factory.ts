/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  RedeemableERC20ClaimEscrow,
  RedeemableERC20ClaimEscrowInterface,
} from "../../../contracts/escrow/RedeemableERC20ClaimEscrow";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "depositor",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "sale",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "redeemable",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "supply",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Deposit",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "sale",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "redeemable",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "PendingDeposit",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "depositor",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "sale",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "redeemable",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Sweep",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "sale",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "redeemable",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "supply",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Undeposit",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "withdrawer",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "sale",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "redeemable",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "supply",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Withdraw",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sale_",
        type: "address",
      },
      {
        internalType: "address",
        name: "token_",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount_",
        type: "uint256",
      },
    ],
    name: "deposit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sale_",
        type: "address",
      },
      {
        internalType: "address",
        name: "token_",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount_",
        type: "uint256",
      },
    ],
    name: "depositPending",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sale_",
        type: "address",
      },
      {
        internalType: "address",
        name: "token_",
        type: "address",
      },
      {
        internalType: "address",
        name: "depositor_",
        type: "address",
      },
    ],
    name: "sweepPending",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sale_",
        type: "address",
      },
      {
        internalType: "address",
        name: "token_",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "supply_",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount_",
        type: "uint256",
      },
    ],
    name: "undeposit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sale_",
        type: "address",
      },
      {
        internalType: "address",
        name: "token_",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "supply_",
        type: "uint256",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50611788806100206000396000f3fe608060405234801561001057600080fd5b50600436106100675760003560e01c80637e56cda8116100505780637e56cda8146100945780638340f549146100a7578063d9caed12146100ba57600080fd5b8063248a85721461006c5780635fc85b7d14610081575b600080fd5b61007f61007a3660046114c3565b6100cd565b005b61007f61008f366004611509565b61035c565b61007f6100a2366004611554565b610426565b61007f6100b5366004611554565b6105fb565b61007f6100c8366004611554565b61062e565b60016100d885610920565b60028111156100e9576100e9611595565b14610155576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600860248201527f4e4f545f4641494c00000000000000000000000000000000000000000000000060448201526064015b60405180910390fd5b600081116101bf576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600b60248201527f5a45524f5f414d4f554e54000000000000000000000000000000000000000000604482015260640161014c565b73ffffffffffffffffffffffffffffffffffffffff808516600090815260056020908152604080832093871683529281528282203383528152828220858352905290812080548392906102139084906115f3565b909155505073ffffffffffffffffffffffffffffffffffffffff80851660009081526006602090815260408083209387168352928152828220858352905290812080548392906102649084906115f3565b909155505073ffffffffffffffffffffffffffffffffffffffff80851660009081526007602090815260408083209387168352928152828220858352905290812080548392906102b59084906115f3565b909155507f6b7ec092a62c7445c02d988d0c1c01a2da7d8778d62a625accdf18de5efca3b6905033856102e781610ac2565b6040805173ffffffffffffffffffffffffffffffffffffffff948516815292841660208401529083169082015290851660608201526080810184905260a0810183905260c00160405180910390a161035673ffffffffffffffffffffffffffffffffffffffff84163383610c3d565b50505050565b73ffffffffffffffffffffffffffffffffffffffff838116600090815260046020908152604080832086851684528252808320938516835292905290812080549190557ff1c3618947be77b086aba11baa9d1e07d2df15de2c0e620f295ffd4ddd550e1f3383866103cc81610ac2565b6040805173ffffffffffffffffffffffffffffffffffffffff958616815293851660208501529184168383015283166060830152918616608082015260a0810184905290519081900360c00190a161035684848484610d11565b60008111610490576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600c60248201527f5a45524f5f4445504f5349540000000000000000000000000000000000000000604482015260640161014c565b600061049b84610920565b60028111156104ac576104ac611595565b14610513576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600b60248201527f4e4f545f50454e44494e47000000000000000000000000000000000000000000604482015260640161014c565b73ffffffffffffffffffffffffffffffffffffffff808416600090815260046020908152604080832093861683529281528282203383529052908120805483929061055f908490611606565b909155506000905061057084610ac2565b6040805133815273ffffffffffffffffffffffffffffffffffffffff878116602083015283811682840152861660608201526080810185905290519192507feabec77378d088e5df884cdb5fb2b55858355c2f6284148d4a30177eb54b52e6919081900360a00190a161035673ffffffffffffffffffffffffffffffffffffffff8416333085611061565b61060783833384610d11565b61062973ffffffffffffffffffffffffffffffffffffffff8316333084611061565b505050565b600261063984610920565b600281111561064a5761064a611595565b146106b1576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600b60248201527f4e4f545f53554343455353000000000000000000000000000000000000000000604482015260640161014c565b73ffffffffffffffffffffffffffffffffffffffff83811660008181526006602090815260408083209487168084529482528083208684528252808320549383526003825280832094835293815283822085835281528382203383529052918220805490829055909161072386610ac2565b6040517f70a082310000000000000000000000000000000000000000000000000000000081523360048201529091506000906107cd9073ffffffffffffffffffffffffffffffffffffffff8416906370a0823190602401602060405180830381865afa158015610797573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107bb9190611619565b866107c686886115f3565b91906110bf565b73ffffffffffffffffffffffffffffffffffffffff8089166000908152600760209081526040808320938b16835292815282822089835290529081208054929350839290919061081e9084906115f3565b90915550508061088a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600d60248201527f5a45524f5f574954484452415700000000000000000000000000000000000000604482015260640161014c565b6040805133815273ffffffffffffffffffffffffffffffffffffffff898116602083015284811682840152881660608201526080810187905260a0810183905290517f16976c9767f5174e5289de7594402a1e174ebd2a9622aa3ebafd14e5af4e2ab99181900360c00190a161091773ffffffffffffffffffffffffffffffffffffffff87163383610c3d565b50505050505050565b73ffffffffffffffffffffffffffffffffffffffff811660009081526002602052604081205460ff168181600281111561095c5761095c611595565b11156109685792915050565b60008373ffffffffffffffffffffffffffffffffffffffff1663f9020e336040518163ffffffff1660e01b8152600401602060405180830381865afa1580156109b5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109d99190611632565b905060028160038111156109ef576109ef611595565b03610a495750505073ffffffffffffffffffffffffffffffffffffffff16600090815260026020819052604090912080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00168217905590565b6003816003811115610a5d57610a5d611595565b03610ab85750505073ffffffffffffffffffffffffffffffffffffffff16600090815260026020526040902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016600190811790915590565b5060009392505050565b73ffffffffffffffffffffffffffffffffffffffff80821660009081526001602052604081205490911680610c375760008373ffffffffffffffffffffffffffffffffffffffff1663fc0c546a6040518163ffffffff1660e01b8152600401602060405180830381865afa158015610b3e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b629190611653565b905073ffffffffffffffffffffffffffffffffffffffff8116610be1576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600760248201527f305f544f4b454e00000000000000000000000000000000000000000000000000604482015260640161014c565b73ffffffffffffffffffffffffffffffffffffffff848116600090815260016020526040902080547fffffffffffffffffffffffff00000000000000000000000000000000000000001691831691909117905590505b92915050565b60405173ffffffffffffffffffffffffffffffffffffffff83166024820152604481018290526106299084907fa9059cbb00000000000000000000000000000000000000000000000000000000906064015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090931692909217909152611192565b6000610d1c85610920565b6002811115610d2d57610d2d611595565b11610d94576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600760248201527f50454e44494e4700000000000000000000000000000000000000000000000000604482015260640161014c565b60008111610dfe576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600c60248201527f5a45524f5f4445504f5349540000000000000000000000000000000000000000604482015260640161014c565b6000610e0985610ac2565b905060008173ffffffffffffffffffffffffffffffffffffffff166318160ddd6040518163ffffffff1660e01b8152600401602060405180830381865afa158015610e58573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e7c9190611619565b905060008111610ee8576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600b60248201527f5a45524f5f535550504c59000000000000000000000000000000000000000000604482015260640161014c565b73ffffffffffffffffffffffffffffffffffffffff808716600090815260056020908152604080832089851684528252808320938816835292815282822084835290529081208054859290610f3e908490611606565b909155505073ffffffffffffffffffffffffffffffffffffffff8087166000908152600660209081526040808320938916835292815282822084835290529081208054859290610f8f908490611606565b909155505073ffffffffffffffffffffffffffffffffffffffff8087166000908152600760209081526040808320938916835292815282822084835290529081208054859290610fe0908490611606565b90915550506040805133815273ffffffffffffffffffffffffffffffffffffffff86811660208301528881168284015284811660608301528716608082015260a0810183905260c0810185905290517f53591a88ac47bfe3130a7de575c6a6a8c22f7604cbba61b8390fbff773ed40499181900360e00190a1505050505050565b60405173ffffffffffffffffffffffffffffffffffffffff808516602483015283166044820152606481018290526103569085907f23b872dd0000000000000000000000000000000000000000000000000000000090608401610c8f565b600080807fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff858709858702925082811083820303915050806000036111175783828161110d5761110d611670565b049250505061118b565b80841161112357600080fd5b600084868809851960019081018716968790049682860381900495909211909303600082900391909104909201919091029190911760038402600290811880860282030280860282030280860282030280860282030280860282030280860290910302029150505b9392505050565b60006111f4826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff1661129e9092919063ffffffff16565b8051909150156106295780806020019051810190611212919061169f565b610629576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f74207375636365656400000000000000000000000000000000000000000000606482015260840161014c565b60606112ad84846000856112b5565b949350505050565b606082471015611347576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c0000000000000000000000000000000000000000000000000000606482015260840161014c565b73ffffffffffffffffffffffffffffffffffffffff85163b6113c5576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604482015260640161014c565b6000808673ffffffffffffffffffffffffffffffffffffffff1685876040516113ee91906116e5565b60006040518083038185875af1925050503d806000811461142b576040519150601f19603f3d011682016040523d82523d6000602084013e611430565b606091505b509150915061144082828661144b565b979650505050505050565b6060831561145a57508161118b565b82511561146a5782518084602001fd5b816040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161014c9190611701565b73ffffffffffffffffffffffffffffffffffffffff811681146114c057600080fd5b50565b600080600080608085870312156114d957600080fd5b84356114e48161149e565b935060208501356114f48161149e565b93969395505050506040820135916060013590565b60008060006060848603121561151e57600080fd5b83356115298161149e565b925060208401356115398161149e565b915060408401356115498161149e565b809150509250925092565b60008060006060848603121561156957600080fd5b83356115748161149e565b925060208401356115848161149e565b929592945050506040919091013590565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b81810381811115610c3757610c376115c4565b80820180821115610c3757610c376115c4565b60006020828403121561162b57600080fd5b5051919050565b60006020828403121561164457600080fd5b81516004811061118b57600080fd5b60006020828403121561166557600080fd5b815161118b8161149e565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b6000602082840312156116b157600080fd5b8151801515811461118b57600080fd5b60005b838110156116dc5781810151838201526020016116c4565b50506000910152565b600082516116f78184602087016116c1565b9190910192915050565b60208152600082518060208401526117208160408501602087016116c1565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016919091016040019291505056fea26469706673582212205ded02a40458ecad9b708fcbf0baf8ebe98d396c8c2fdb2fc146727d72fed66d64736f6c63430008110033";

type RedeemableERC20ClaimEscrowConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: RedeemableERC20ClaimEscrowConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class RedeemableERC20ClaimEscrow__factory extends ContractFactory {
  constructor(...args: RedeemableERC20ClaimEscrowConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<RedeemableERC20ClaimEscrow> {
    return super.deploy(overrides || {}) as Promise<RedeemableERC20ClaimEscrow>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): RedeemableERC20ClaimEscrow {
    return super.attach(address) as RedeemableERC20ClaimEscrow;
  }
  override connect(signer: Signer): RedeemableERC20ClaimEscrow__factory {
    return super.connect(signer) as RedeemableERC20ClaimEscrow__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): RedeemableERC20ClaimEscrowInterface {
    return new utils.Interface(_abi) as RedeemableERC20ClaimEscrowInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): RedeemableERC20ClaimEscrow {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as RedeemableERC20ClaimEscrow;
  }
}