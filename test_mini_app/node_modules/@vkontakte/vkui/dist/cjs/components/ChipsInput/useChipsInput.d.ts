import * as React from "react";
import { ChipsInputOption, ChipsInputProps } from "./ChipsInput";
export declare const useChipsInput: <Option extends ChipsInputOption>(props: Partial<ChipsInputProps<Option>>) => {
    fieldValue: string | undefined;
    setFieldValue: React.Dispatch<React.SetStateAction<string | undefined>>;
    selectedOptions: Option[];
    setSelectedOptions: React.Dispatch<React.SetStateAction<Option[]>>;
    clearInput: () => void;
    toggleOption: (newOption: Option, value?: boolean | undefined) => void;
    addOption: (newOption: Option) => void;
    addOptionFromInput: () => void;
    removeOption: (value: string | number) => void;
    handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
