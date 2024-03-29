/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../common";

export type StateConfigStruct = {
  sources: PromiseOrValue<BytesLike>[];
  constants: PromiseOrValue<BigNumberish>[];
};

export type StateConfigStructOutput = [string[], BigNumber[]] & {
  sources: string[];
  constants: BigNumber[];
};

export type StakeConfigStruct = {
  asset: PromiseOrValue<string>;
  name: PromiseOrValue<string>;
  symbol: PromiseOrValue<string>;
  expressionDeployer: PromiseOrValue<string>;
  interpreter: PromiseOrValue<string>;
  stateConfig: StateConfigStruct;
};

export type StakeConfigStructOutput = [
  string,
  string,
  string,
  string,
  string,
  StateConfigStructOutput
] & {
  asset: string;
  name: string;
  symbol: string;
  expressionDeployer: string;
  interpreter: string;
  stateConfig: StateConfigStructOutput;
};

export interface StakeFactoryInterface extends utils.Interface {
  functions: {
    "createChild(bytes)": FunctionFragment;
    "createChildTyped((address,string,string,address,address,(bytes[],uint256[])))": FunctionFragment;
    "implementation()": FunctionFragment;
    "isChild(address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "createChild"
      | "createChildTyped"
      | "implementation"
      | "isChild"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "createChild",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "createChildTyped",
    values: [StakeConfigStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "implementation",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "isChild",
    values: [PromiseOrValue<string>]
  ): string;

  decodeFunctionResult(
    functionFragment: "createChild",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "createChildTyped",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "implementation",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "isChild", data: BytesLike): Result;

  events: {
    "Implementation(address,address)": EventFragment;
    "Initialized(uint8)": EventFragment;
    "NewChild(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Implementation"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Initialized"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "NewChild"): EventFragment;
}

export interface ImplementationEventObject {
  sender: string;
  implementation: string;
}
export type ImplementationEvent = TypedEvent<
  [string, string],
  ImplementationEventObject
>;

export type ImplementationEventFilter = TypedEventFilter<ImplementationEvent>;

export interface InitializedEventObject {
  version: number;
}
export type InitializedEvent = TypedEvent<[number], InitializedEventObject>;

export type InitializedEventFilter = TypedEventFilter<InitializedEvent>;

export interface NewChildEventObject {
  sender: string;
  child: string;
}
export type NewChildEvent = TypedEvent<[string, string], NewChildEventObject>;

export type NewChildEventFilter = TypedEventFilter<NewChildEvent>;

export interface StakeFactory extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: StakeFactoryInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    createChild(
      data_: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    createChildTyped(
      config_: StakeConfigStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    implementation(overrides?: CallOverrides): Promise<[string]>;

    isChild(
      maybeChild_: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;
  };

  createChild(
    data_: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  createChildTyped(
    config_: StakeConfigStruct,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  implementation(overrides?: CallOverrides): Promise<string>;

  isChild(
    maybeChild_: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  callStatic: {
    createChild(
      data_: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<string>;

    createChildTyped(
      config_: StakeConfigStruct,
      overrides?: CallOverrides
    ): Promise<string>;

    implementation(overrides?: CallOverrides): Promise<string>;

    isChild(
      maybeChild_: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;
  };

  filters: {
    "Implementation(address,address)"(
      sender?: null,
      implementation?: null
    ): ImplementationEventFilter;
    Implementation(
      sender?: null,
      implementation?: null
    ): ImplementationEventFilter;

    "Initialized(uint8)"(version?: null): InitializedEventFilter;
    Initialized(version?: null): InitializedEventFilter;

    "NewChild(address,address)"(
      sender?: null,
      child?: null
    ): NewChildEventFilter;
    NewChild(sender?: null, child?: null): NewChildEventFilter;
  };

  estimateGas: {
    createChild(
      data_: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    createChildTyped(
      config_: StakeConfigStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    implementation(overrides?: CallOverrides): Promise<BigNumber>;

    isChild(
      maybeChild_: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    createChild(
      data_: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    createChildTyped(
      config_: StakeConfigStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    implementation(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    isChild(
      maybeChild_: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
