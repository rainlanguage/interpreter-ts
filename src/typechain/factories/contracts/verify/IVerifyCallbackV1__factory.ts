/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IVerifyCallbackV1,
  IVerifyCallbackV1Interface,
} from "../../../contracts/verify/IVerifyCallbackV1";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "adder_",
        type: "address",
      },
      {
        components: [
          {
            internalType: "address",
            name: "account",
            type: "address",
          },
          {
            internalType: "bytes",
            name: "data",
            type: "bytes",
          },
        ],
        internalType: "struct Evidence[]",
        name: "evidences_",
        type: "tuple[]",
      },
    ],
    name: "afterAdd",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "approver_",
        type: "address",
      },
      {
        components: [
          {
            internalType: "address",
            name: "account",
            type: "address",
          },
          {
            internalType: "bytes",
            name: "data",
            type: "bytes",
          },
        ],
        internalType: "struct Evidence[]",
        name: "evidences_",
        type: "tuple[]",
      },
    ],
    name: "afterApprove",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "banner_",
        type: "address",
      },
      {
        components: [
          {
            internalType: "address",
            name: "account",
            type: "address",
          },
          {
            internalType: "bytes",
            name: "data",
            type: "bytes",
          },
        ],
        internalType: "struct Evidence[]",
        name: "evidences_",
        type: "tuple[]",
      },
    ],
    name: "afterBan",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "remover_",
        type: "address",
      },
      {
        components: [
          {
            internalType: "address",
            name: "account",
            type: "address",
          },
          {
            internalType: "bytes",
            name: "data",
            type: "bytes",
          },
        ],
        internalType: "struct Evidence[]",
        name: "evidences_",
        type: "tuple[]",
      },
    ],
    name: "afterRemove",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class IVerifyCallbackV1__factory {
  static readonly abi = _abi;
  static createInterface(): IVerifyCallbackV1Interface {
    return new utils.Interface(_abi) as IVerifyCallbackV1Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IVerifyCallbackV1 {
    return new Contract(address, _abi, signerOrProvider) as IVerifyCallbackV1;
  }
}