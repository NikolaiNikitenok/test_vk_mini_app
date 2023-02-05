import * as React from "react";
import { HasAlign, HasRef, HasRootRef } from "../../types";
import { FormFieldProps } from "../FormField/FormField";
import { ChipProps } from "../Chip/Chip";
import "./ChipsInput.css";
export declare type ChipsInputValue = string | number;
export interface ChipsInputOption {
    value?: ChipsInputValue;
    label?: string;
    [otherProp: string]: any;
}
export interface RenderChip<Option extends ChipsInputOption> extends ChipProps {
    label: string;
    option: Option;
    disabled: boolean;
}
export interface ChipsInputProps<Option extends ChipsInputOption> extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "value" | "onChange">, HasRef<HTMLInputElement>, HasRootRef<HTMLDivElement>, HasAlign, FormFieldProps {
    value: Option[];
    inputValue?: string;
    onChange?: (o: Option[]) => void;
    onInputChange?: (e?: React.ChangeEvent<HTMLInputElement>) => void;
    getOptionValue?: (o?: Option) => ChipsInputValue;
    getOptionLabel?: (o?: Option) => string;
    getNewOptionData?: (v?: ChipsInputValue, l?: string) => Option;
    renderChip?: (props?: RenderChip<Option>) => React.ReactNode;
    inputAriaLabel?: string;
}
export declare const chipsInputDefaultProps: ChipsInputProps<any>;
declare const ChipsInput: <Option extends ChipsInputOption>(props: ChipsInputProps<Option>) => JSX.Element;
export default ChipsInput;
