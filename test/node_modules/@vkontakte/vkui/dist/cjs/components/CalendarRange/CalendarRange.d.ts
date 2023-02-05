import * as React from "react";
import { CalendarHeaderProps } from "../CalendarHeader/CalendarHeader";
import { HasRootRef } from "../../types";
import "./CalendarRange.css";
export interface CalendarRangeProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "onChange">, Pick<CalendarHeaderProps, "prevMonthAriaLabel" | "nextMonthAriaLabel" | "changeMonthAriaLabel" | "changeYearAriaLabel">, HasRootRef<HTMLDivElement> {
    value?: Array<Date | null>;
    disablePast?: boolean;
    disableFuture?: boolean;
    disablePickers?: boolean;
    changeDayAriaLabel?: string;
    weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
    onChange?(value?: Array<Date | null>): void;
    shouldDisableDate?(value: Date): boolean;
    onClose?(): void;
}
export declare const CalendarRange: React.FC<CalendarRangeProps>;
