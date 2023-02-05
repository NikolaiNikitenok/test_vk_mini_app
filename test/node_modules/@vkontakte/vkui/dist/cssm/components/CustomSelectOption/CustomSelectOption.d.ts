import * as React from "react";
import { HasRootRef } from "../../types";
import "./CustomSelectOption.css";
export interface CustomSelectOptionProps extends React.HTMLAttributes<HTMLDivElement>, HasRootRef<HTMLDivElement> {
    option?: any;
    selected?: boolean;
    focused?: boolean;
    hovered?: boolean;
    before?: React.ReactNode;
    after?: React.ReactNode;
    description?: React.ReactNode;
    disabled?: boolean;
}
declare const CustomSelectOption: React.FC<CustomSelectOptionProps>;
export default CustomSelectOption;
