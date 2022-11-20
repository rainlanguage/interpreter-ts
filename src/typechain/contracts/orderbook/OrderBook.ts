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

export type IOStruct = {
  token: PromiseOrValue<string>;
  vaultId: PromiseOrValue<BigNumberish>;
};

export type IOStructOutput = [string, BigNumber] & {
  token: string;
  vaultId: BigNumber;
};

export type OrderStruct = {
  owner: PromiseOrValue<string>;
  interpreter: PromiseOrValue<string>;
  expression: PromiseOrValue<string>;
  validInputs: IOStruct[];
  validOutputs: IOStruct[];
};

export type OrderStructOutput = [
  string,
  string,
  string,
  IOStructOutput[],
  IOStructOutput[]
] & {
  owner: string;
  interpreter: string;
  expression: string;
  validInputs: IOStructOutput[];
  validOutputs: IOStructOutput[];
};

export type ClearStateChangeStruct = {
  aOutput: PromiseOrValue<BigNumberish>;
  bOutput: PromiseOrValue<BigNumberish>;
  aInput: PromiseOrValue<BigNumberish>;
  bInput: PromiseOrValue<BigNumberish>;
};

export type ClearStateChangeStructOutput = [
  BigNumber,
  BigNumber,
  BigNumber,
  BigNumber
] & {
  aOutput: BigNumber;
  bOutput: BigNumber;
  aInput: BigNumber;
  bInput: BigNumber;
};

export type ClearConfigStruct = {
  aInputIOIndex: PromiseOrValue<BigNumberish>;
  aOutputIOIndex: PromiseOrValue<BigNumberish>;
  bInputIOIndex: PromiseOrValue<BigNumberish>;
  bOutputIOIndex: PromiseOrValue<BigNumberish>;
  aBountyVaultId: PromiseOrValue<BigNumberish>;
  bBountyVaultId: PromiseOrValue<BigNumberish>;
};

export type ClearConfigStructOutput = [
  BigNumber,
  BigNumber,
  BigNumber,
  BigNumber,
  BigNumber,
  BigNumber
] & {
  aInputIOIndex: BigNumber;
  aOutputIOIndex: BigNumber;
  bInputIOIndex: BigNumber;
  bOutputIOIndex: BigNumber;
  aBountyVaultId: BigNumber;
  bBountyVaultId: BigNumber;
};

export type DepositConfigStruct = {
  token: PromiseOrValue<string>;
  vaultId: PromiseOrValue<BigNumberish>;
  amount: PromiseOrValue<BigNumberish>;
};

export type DepositConfigStructOutput = [string, BigNumber, BigNumber] & {
  token: string;
  vaultId: BigNumber;
  amount: BigNumber;
};

export type TakeOrderConfigStruct = {
  order: OrderStruct;
  inputIOIndex: PromiseOrValue<BigNumberish>;
  outputIOIndex: PromiseOrValue<BigNumberish>;
};

export type TakeOrderConfigStructOutput = [
  OrderStructOutput,
  BigNumber,
  BigNumber
] & {
  order: OrderStructOutput;
  inputIOIndex: BigNumber;
  outputIOIndex: BigNumber;
};

export type WithdrawConfigStruct = {
  token: PromiseOrValue<string>;
  vaultId: PromiseOrValue<BigNumberish>;
  amount: PromiseOrValue<BigNumberish>;
};

export type WithdrawConfigStructOutput = [string, BigNumber, BigNumber] & {
  token: string;
  vaultId: BigNumber;
  amount: BigNumber;
};

export type StateConfigStruct = {
  sources: PromiseOrValue<BytesLike>[];
  constants: PromiseOrValue<BigNumberish>[];
};

export type StateConfigStructOutput = [string[], BigNumber[]] & {
  sources: string[];
  constants: BigNumber[];
};

export type OrderConfigStruct = {
  expressionDeployer: PromiseOrValue<string>;
  interpreter: PromiseOrValue<string>;
  interpreterStateConfig: StateConfigStruct;
  validInputs: IOStruct[];
  validOutputs: IOStruct[];
};

export type OrderConfigStructOutput = [
  string,
  string,
  StateConfigStructOutput,
  IOStructOutput[],
  IOStructOutput[]
] & {
  expressionDeployer: string;
  interpreter: string;
  interpreterStateConfig: StateConfigStructOutput;
  validInputs: IOStructOutput[];
  validOutputs: IOStructOutput[];
};

export type TakeOrdersConfigStruct = {
  output: PromiseOrValue<string>;
  input: PromiseOrValue<string>;
  minimumInput: PromiseOrValue<BigNumberish>;
  maximumInput: PromiseOrValue<BigNumberish>;
  maximumIORatio: PromiseOrValue<BigNumberish>;
  orders: TakeOrderConfigStruct[];
};

export type TakeOrdersConfigStructOutput = [
  string,
  string,
  BigNumber,
  BigNumber,
  BigNumber,
  TakeOrderConfigStructOutput[]
] & {
  output: string;
  input: string;
  minimumInput: BigNumber;
  maximumInput: BigNumber;
  maximumIORatio: BigNumber;
  orders: TakeOrderConfigStructOutput[];
};

export interface OrderBookInterface extends utils.Interface {
  functions: {
    "CALLBACK_SUCCESS()": FunctionFragment;
    "addOrder((address,address,(bytes[],uint256[]),(address,uint256)[],(address,uint256)[]))": FunctionFragment;
    "clear((address,address,address,(address,uint256)[],(address,uint256)[]),(address,address,address,(address,uint256)[],(address,uint256)[]),(uint256,uint256,uint256,uint256,uint256,uint256))": FunctionFragment;
    "deposit((address,uint256,uint256))": FunctionFragment;
    "flashFee(address,uint256)": FunctionFragment;
    "flashLoan(address,address,uint256,bytes)": FunctionFragment;
    "maxFlashLoan(address)": FunctionFragment;
    "removeOrder((address,address,address,(address,uint256)[],(address,uint256)[]))": FunctionFragment;
    "takeOrders((address,address,uint256,uint256,uint256,((address,address,address,(address,uint256)[],(address,uint256)[]),uint256,uint256)[]))": FunctionFragment;
    "vaultBalance(address,address,uint256)": FunctionFragment;
    "withdraw((address,uint256,uint256))": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "CALLBACK_SUCCESS"
      | "addOrder"
      | "clear"
      | "deposit"
      | "flashFee"
      | "flashLoan"
      | "maxFlashLoan"
      | "removeOrder"
      | "takeOrders"
      | "vaultBalance"
      | "withdraw"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "CALLBACK_SUCCESS",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "addOrder",
    values: [OrderConfigStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "clear",
    values: [OrderStruct, OrderStruct, ClearConfigStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "deposit",
    values: [DepositConfigStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "flashFee",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "flashLoan",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "maxFlashLoan",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "removeOrder",
    values: [OrderStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "takeOrders",
    values: [TakeOrdersConfigStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "vaultBalance",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "withdraw",
    values: [WithdrawConfigStruct]
  ): string;

  decodeFunctionResult(
    functionFragment: "CALLBACK_SUCCESS",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "addOrder", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "clear", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "deposit", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "flashFee", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "flashLoan", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "maxFlashLoan",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "removeOrder",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "takeOrders", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "vaultBalance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;

  events: {
    "AddOrder(address,tuple,uint256)": EventFragment;
    "AfterClear(tuple)": EventFragment;
    "Clear(address,tuple,tuple,tuple)": EventFragment;
    "Deposit(address,tuple)": EventFragment;
    "OrderExceedsMaxRatio(address,address,uint256)": EventFragment;
    "OrderNotFound(address,address,uint256)": EventFragment;
    "OrderZeroAmount(address,address,uint256)": EventFragment;
    "RemoveOrder(address,tuple,uint256)": EventFragment;
    "TakeOrder(address,tuple,uint256,uint256)": EventFragment;
    "Withdraw(address,tuple,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "AddOrder"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "AfterClear"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Clear"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Deposit"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OrderExceedsMaxRatio"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OrderNotFound"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OrderZeroAmount"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RemoveOrder"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TakeOrder"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Withdraw"): EventFragment;
}

export interface AddOrderEventObject {
  sender: string;
  order: OrderStructOutput;
  orderHash: BigNumber;
}
export type AddOrderEvent = TypedEvent<
  [string, OrderStructOutput, BigNumber],
  AddOrderEventObject
>;

export type AddOrderEventFilter = TypedEventFilter<AddOrderEvent>;

export interface AfterClearEventObject {
  stateChange: ClearStateChangeStructOutput;
}
export type AfterClearEvent = TypedEvent<
  [ClearStateChangeStructOutput],
  AfterClearEventObject
>;

export type AfterClearEventFilter = TypedEventFilter<AfterClearEvent>;

export interface ClearEventObject {
  sender: string;
  a: OrderStructOutput;
  b: OrderStructOutput;
  clearConfig: ClearConfigStructOutput;
}
export type ClearEvent = TypedEvent<
  [string, OrderStructOutput, OrderStructOutput, ClearConfigStructOutput],
  ClearEventObject
>;

export type ClearEventFilter = TypedEventFilter<ClearEvent>;

export interface DepositEventObject {
  sender: string;
  config: DepositConfigStructOutput;
}
export type DepositEvent = TypedEvent<
  [string, DepositConfigStructOutput],
  DepositEventObject
>;

export type DepositEventFilter = TypedEventFilter<DepositEvent>;

export interface OrderExceedsMaxRatioEventObject {
  sender: string;
  owner: string;
  orderHash: BigNumber;
}
export type OrderExceedsMaxRatioEvent = TypedEvent<
  [string, string, BigNumber],
  OrderExceedsMaxRatioEventObject
>;

export type OrderExceedsMaxRatioEventFilter =
  TypedEventFilter<OrderExceedsMaxRatioEvent>;

export interface OrderNotFoundEventObject {
  sender: string;
  owner: string;
  orderHash: BigNumber;
}
export type OrderNotFoundEvent = TypedEvent<
  [string, string, BigNumber],
  OrderNotFoundEventObject
>;

export type OrderNotFoundEventFilter = TypedEventFilter<OrderNotFoundEvent>;

export interface OrderZeroAmountEventObject {
  sender: string;
  owner: string;
  orderHash: BigNumber;
}
export type OrderZeroAmountEvent = TypedEvent<
  [string, string, BigNumber],
  OrderZeroAmountEventObject
>;

export type OrderZeroAmountEventFilter = TypedEventFilter<OrderZeroAmountEvent>;

export interface RemoveOrderEventObject {
  sender: string;
  order: OrderStructOutput;
  orderHash: BigNumber;
}
export type RemoveOrderEvent = TypedEvent<
  [string, OrderStructOutput, BigNumber],
  RemoveOrderEventObject
>;

export type RemoveOrderEventFilter = TypedEventFilter<RemoveOrderEvent>;

export interface TakeOrderEventObject {
  sender: string;
  takeOrder: TakeOrderConfigStructOutput;
  input: BigNumber;
  output: BigNumber;
}
export type TakeOrderEvent = TypedEvent<
  [string, TakeOrderConfigStructOutput, BigNumber, BigNumber],
  TakeOrderEventObject
>;

export type TakeOrderEventFilter = TypedEventFilter<TakeOrderEvent>;

export interface WithdrawEventObject {
  sender: string;
  config: WithdrawConfigStructOutput;
  amount: BigNumber;
}
export type WithdrawEvent = TypedEvent<
  [string, WithdrawConfigStructOutput, BigNumber],
  WithdrawEventObject
>;

export type WithdrawEventFilter = TypedEventFilter<WithdrawEvent>;

export interface OrderBook extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: OrderBookInterface;

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
    CALLBACK_SUCCESS(overrides?: CallOverrides): Promise<[string]>;

    addOrder(
      config_: OrderConfigStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    clear(
      a_: OrderStruct,
      b_: OrderStruct,
      clearConfig_: ClearConfigStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    deposit(
      config_: DepositConfigStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    flashFee(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    flashLoan(
      receiver_: PromiseOrValue<string>,
      token_: PromiseOrValue<string>,
      amount_: PromiseOrValue<BigNumberish>,
      data_: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    maxFlashLoan(
      token_: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    removeOrder(
      order_: OrderStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    takeOrders(
      takeOrders_: TakeOrdersConfigStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    vaultBalance(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      arg2: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    withdraw(
      config_: WithdrawConfigStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  CALLBACK_SUCCESS(overrides?: CallOverrides): Promise<string>;

  addOrder(
    config_: OrderConfigStruct,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  clear(
    a_: OrderStruct,
    b_: OrderStruct,
    clearConfig_: ClearConfigStruct,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  deposit(
    config_: DepositConfigStruct,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  flashFee(
    arg0: PromiseOrValue<string>,
    arg1: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  flashLoan(
    receiver_: PromiseOrValue<string>,
    token_: PromiseOrValue<string>,
    amount_: PromiseOrValue<BigNumberish>,
    data_: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  maxFlashLoan(
    token_: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  removeOrder(
    order_: OrderStruct,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  takeOrders(
    takeOrders_: TakeOrdersConfigStruct,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  vaultBalance(
    arg0: PromiseOrValue<string>,
    arg1: PromiseOrValue<string>,
    arg2: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  withdraw(
    config_: WithdrawConfigStruct,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    CALLBACK_SUCCESS(overrides?: CallOverrides): Promise<string>;

    addOrder(
      config_: OrderConfigStruct,
      overrides?: CallOverrides
    ): Promise<void>;

    clear(
      a_: OrderStruct,
      b_: OrderStruct,
      clearConfig_: ClearConfigStruct,
      overrides?: CallOverrides
    ): Promise<void>;

    deposit(
      config_: DepositConfigStruct,
      overrides?: CallOverrides
    ): Promise<void>;

    flashFee(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    flashLoan(
      receiver_: PromiseOrValue<string>,
      token_: PromiseOrValue<string>,
      amount_: PromiseOrValue<BigNumberish>,
      data_: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    maxFlashLoan(
      token_: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    removeOrder(order_: OrderStruct, overrides?: CallOverrides): Promise<void>;

    takeOrders(
      takeOrders_: TakeOrdersConfigStruct,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & {
        totalInput_: BigNumber;
        totalOutput_: BigNumber;
      }
    >;

    vaultBalance(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      arg2: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    withdraw(
      config_: WithdrawConfigStruct,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "AddOrder(address,tuple,uint256)"(
      sender?: null,
      order?: null,
      orderHash?: null
    ): AddOrderEventFilter;
    AddOrder(
      sender?: null,
      order?: null,
      orderHash?: null
    ): AddOrderEventFilter;

    "AfterClear(tuple)"(stateChange?: null): AfterClearEventFilter;
    AfterClear(stateChange?: null): AfterClearEventFilter;

    "Clear(address,tuple,tuple,tuple)"(
      sender?: null,
      a?: null,
      b?: null,
      clearConfig?: null
    ): ClearEventFilter;
    Clear(
      sender?: null,
      a?: null,
      b?: null,
      clearConfig?: null
    ): ClearEventFilter;

    "Deposit(address,tuple)"(sender?: null, config?: null): DepositEventFilter;
    Deposit(sender?: null, config?: null): DepositEventFilter;

    "OrderExceedsMaxRatio(address,address,uint256)"(
      sender?: null,
      owner?: null,
      orderHash?: null
    ): OrderExceedsMaxRatioEventFilter;
    OrderExceedsMaxRatio(
      sender?: null,
      owner?: null,
      orderHash?: null
    ): OrderExceedsMaxRatioEventFilter;

    "OrderNotFound(address,address,uint256)"(
      sender?: null,
      owner?: null,
      orderHash?: null
    ): OrderNotFoundEventFilter;
    OrderNotFound(
      sender?: null,
      owner?: null,
      orderHash?: null
    ): OrderNotFoundEventFilter;

    "OrderZeroAmount(address,address,uint256)"(
      sender?: null,
      owner?: null,
      orderHash?: null
    ): OrderZeroAmountEventFilter;
    OrderZeroAmount(
      sender?: null,
      owner?: null,
      orderHash?: null
    ): OrderZeroAmountEventFilter;

    "RemoveOrder(address,tuple,uint256)"(
      sender?: null,
      order?: null,
      orderHash?: null
    ): RemoveOrderEventFilter;
    RemoveOrder(
      sender?: null,
      order?: null,
      orderHash?: null
    ): RemoveOrderEventFilter;

    "TakeOrder(address,tuple,uint256,uint256)"(
      sender?: null,
      takeOrder?: null,
      input?: null,
      output?: null
    ): TakeOrderEventFilter;
    TakeOrder(
      sender?: null,
      takeOrder?: null,
      input?: null,
      output?: null
    ): TakeOrderEventFilter;

    "Withdraw(address,tuple,uint256)"(
      sender?: null,
      config?: null,
      amount?: null
    ): WithdrawEventFilter;
    Withdraw(sender?: null, config?: null, amount?: null): WithdrawEventFilter;
  };

  estimateGas: {
    CALLBACK_SUCCESS(overrides?: CallOverrides): Promise<BigNumber>;

    addOrder(
      config_: OrderConfigStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    clear(
      a_: OrderStruct,
      b_: OrderStruct,
      clearConfig_: ClearConfigStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    deposit(
      config_: DepositConfigStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    flashFee(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    flashLoan(
      receiver_: PromiseOrValue<string>,
      token_: PromiseOrValue<string>,
      amount_: PromiseOrValue<BigNumberish>,
      data_: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    maxFlashLoan(
      token_: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    removeOrder(
      order_: OrderStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    takeOrders(
      takeOrders_: TakeOrdersConfigStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    vaultBalance(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      arg2: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    withdraw(
      config_: WithdrawConfigStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    CALLBACK_SUCCESS(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    addOrder(
      config_: OrderConfigStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    clear(
      a_: OrderStruct,
      b_: OrderStruct,
      clearConfig_: ClearConfigStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    deposit(
      config_: DepositConfigStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    flashFee(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    flashLoan(
      receiver_: PromiseOrValue<string>,
      token_: PromiseOrValue<string>,
      amount_: PromiseOrValue<BigNumberish>,
      data_: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    maxFlashLoan(
      token_: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    removeOrder(
      order_: OrderStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    takeOrders(
      takeOrders_: TakeOrdersConfigStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    vaultBalance(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      arg2: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    withdraw(
      config_: WithdrawConfigStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}