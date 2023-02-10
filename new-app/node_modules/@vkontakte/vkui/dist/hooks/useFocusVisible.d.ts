import { FocusEvent } from "react";
export declare function useFocusVisible(): {
    focusVisible: boolean | undefined;
    onFocus: (event: FocusEvent<HTMLElement, Element>) => void;
    onBlur: (event: FocusEvent<HTMLElement, Element>) => void;
};
