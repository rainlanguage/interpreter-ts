/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../../../../common";

export interface TierReportTestInterface extends utils.Interface {
  functions: {
    "reportTimeForTier(uint256,uint256)": FunctionFragment;
    "tierAtTimeFromReport(uint256,uint256)": FunctionFragment;
    "truncateTiersAbove(uint256,uint256)": FunctionFragment;
    "updateReportWithTierAtTime(uint256,uint256,uint256,uint256)": FunctionFragment;
    "updateTimeAtTier(uint256,uint256,uint256)": FunctionFragment;
    "updateTimesForTierRange(uint256,uint256,uint256,uint256)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "reportTimeForTier"
      | "tierAtTimeFromReport"
      | "truncateTiersAbove"
      | "updateReportWithTierAtTime"
      | "updateTimeAtTier"
      | "updateTimesForTierRange"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "reportTimeForTier",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "tierAtTimeFromReport",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "truncateTiersAbove",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "updateReportWithTierAtTime",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "updateTimeAtTier",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "updateTimesForTierRange",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;

  decodeFunctionResult(
    functionFragment: "reportTimeForTier",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "tierAtTimeFromReport",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "truncateTiersAbove",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateReportWithTierAtTime",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateTimeAtTier",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateTimesForTierRange",
    data: BytesLike
  ): Result;

  events: {};
}

export interface TierReportTest extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: TierReportTestInterface;

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
    reportTimeForTier(
      report_: PromiseOrValue<BigNumberish>,
      tier_: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    tierAtTimeFromReport(
      report_: PromiseOrValue<BigNumberish>,
      timestamp_: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    truncateTiersAbove(
      report_: PromiseOrValue<BigNumberish>,
      tier_: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    updateReportWithTierAtTime(
      report_: PromiseOrValue<BigNumberish>,
      startTier_: PromiseOrValue<BigNumberish>,
      endTier_: PromiseOrValue<BigNumberish>,
      timestamp_: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    updateTimeAtTier(
      report_: PromiseOrValue<BigNumberish>,
      tier_: PromiseOrValue<BigNumberish>,
      timestamp_: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    updateTimesForTierRange(
      report_: PromiseOrValue<BigNumberish>,
      startTier_: PromiseOrValue<BigNumberish>,
      endTier_: PromiseOrValue<BigNumberish>,
      timestamp_: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;
  };

  reportTimeForTier(
    report_: PromiseOrValue<BigNumberish>,
    tier_: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  tierAtTimeFromReport(
    report_: PromiseOrValue<BigNumberish>,
    timestamp_: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  truncateTiersAbove(
    report_: PromiseOrValue<BigNumberish>,
    tier_: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  updateReportWithTierAtTime(
    report_: PromiseOrValue<BigNumberish>,
    startTier_: PromiseOrValue<BigNumberish>,
    endTier_: PromiseOrValue<BigNumberish>,
    timestamp_: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  updateTimeAtTier(
    report_: PromiseOrValue<BigNumberish>,
    tier_: PromiseOrValue<BigNumberish>,
    timestamp_: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  updateTimesForTierRange(
    report_: PromiseOrValue<BigNumberish>,
    startTier_: PromiseOrValue<BigNumberish>,
    endTier_: PromiseOrValue<BigNumberish>,
    timestamp_: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  callStatic: {
    reportTimeForTier(
      report_: PromiseOrValue<BigNumberish>,
      tier_: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    tierAtTimeFromReport(
      report_: PromiseOrValue<BigNumberish>,
      timestamp_: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    truncateTiersAbove(
      report_: PromiseOrValue<BigNumberish>,
      tier_: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    updateReportWithTierAtTime(
      report_: PromiseOrValue<BigNumberish>,
      startTier_: PromiseOrValue<BigNumberish>,
      endTier_: PromiseOrValue<BigNumberish>,
      timestamp_: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    updateTimeAtTier(
      report_: PromiseOrValue<BigNumberish>,
      tier_: PromiseOrValue<BigNumberish>,
      timestamp_: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    updateTimesForTierRange(
      report_: PromiseOrValue<BigNumberish>,
      startTier_: PromiseOrValue<BigNumberish>,
      endTier_: PromiseOrValue<BigNumberish>,
      timestamp_: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    reportTimeForTier(
      report_: PromiseOrValue<BigNumberish>,
      tier_: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    tierAtTimeFromReport(
      report_: PromiseOrValue<BigNumberish>,
      timestamp_: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    truncateTiersAbove(
      report_: PromiseOrValue<BigNumberish>,
      tier_: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    updateReportWithTierAtTime(
      report_: PromiseOrValue<BigNumberish>,
      startTier_: PromiseOrValue<BigNumberish>,
      endTier_: PromiseOrValue<BigNumberish>,
      timestamp_: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    updateTimeAtTier(
      report_: PromiseOrValue<BigNumberish>,
      tier_: PromiseOrValue<BigNumberish>,
      timestamp_: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    updateTimesForTierRange(
      report_: PromiseOrValue<BigNumberish>,
      startTier_: PromiseOrValue<BigNumberish>,
      endTier_: PromiseOrValue<BigNumberish>,
      timestamp_: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    reportTimeForTier(
      report_: PromiseOrValue<BigNumberish>,
      tier_: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    tierAtTimeFromReport(
      report_: PromiseOrValue<BigNumberish>,
      timestamp_: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    truncateTiersAbove(
      report_: PromiseOrValue<BigNumberish>,
      tier_: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    updateReportWithTierAtTime(
      report_: PromiseOrValue<BigNumberish>,
      startTier_: PromiseOrValue<BigNumberish>,
      endTier_: PromiseOrValue<BigNumberish>,
      timestamp_: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    updateTimeAtTier(
      report_: PromiseOrValue<BigNumberish>,
      tier_: PromiseOrValue<BigNumberish>,
      timestamp_: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    updateTimesForTierRange(
      report_: PromiseOrValue<BigNumberish>,
      startTier_: PromiseOrValue<BigNumberish>,
      endTier_: PromiseOrValue<BigNumberish>,
      timestamp_: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}