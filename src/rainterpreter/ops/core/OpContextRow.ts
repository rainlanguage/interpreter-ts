import { BigNumber } from "ethers";
import { InterpreterData, opClosure } from "../../../interpreter/types";

/**
 * @public
 */
export const OpContextRow: opClosure = (
    _inputs: BigNumber[],
    _operand: number,
    _data: InterpreterData
): BigNumber[] => {
    return []
}