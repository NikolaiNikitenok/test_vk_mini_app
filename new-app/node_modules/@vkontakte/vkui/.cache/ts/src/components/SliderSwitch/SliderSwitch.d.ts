import * as React from "react";
import { HasPlatform } from "../../types";
import "./SliderSwitch.css";
export interface SliderSwitchOptionInterface {
    name: string;
    value: string | number;
}
export interface SliderSwitchProps extends React.HTMLAttributes<HTMLDivElement>, HasPlatform {
    options: Array<{
        name: string;
        value: string | number;
    }>;
    activeValue?: SliderSwitchOptionInterface["value"];
    name?: string;
    onSwitch?: (value: SliderSwitchOptionInterface["value"]) => void;
}
interface SliderSwitchState {
    activeValue: SliderSwitchOptionInterface["value"];
    hoveredOptionId: number;
}
/**
 * @deprecated Этот компонент устарел и будет удален в 5.0.0. Используйте [`SegmentedControl`](#/SegmentedControl).
 */
declare class SliderSwitch extends React.Component<SliderSwitchProps, SliderSwitchState> {
    constructor(props: SliderSwitchProps);
    static defaultProps: {
        options: {
            name: string;
            value: string;
        }[];
    };
    firstButton: React.RefObject<HTMLDivElement>;
    secondButton: React.RefObject<HTMLDivElement>;
    onSwitch: (value: string | number) => void;
    handleFirstClick: () => void;
    handleSecondClick: () => void;
    handleFirstHover: () => void;
    handleSecondHover: () => void;
    resetFocusedOption: () => void;
    switchByKey: (event: React.KeyboardEvent<Element>) => void;
    static getDerivedStateFromProps(nextProps: SliderSwitchProps, prevState: SliderSwitchState): {
        activeValue: string | number;
    } | null;
    componentDidMount(): void;
    render(): JSX.Element;
}
export { SliderSwitch };
