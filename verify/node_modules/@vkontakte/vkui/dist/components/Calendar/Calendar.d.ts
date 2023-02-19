import * as React from "react";
import { CalendarHeaderProps } from "../CalendarHeader/CalendarHeader";
import { CalendarTimeProps } from "../CalendarTime/CalendarTime";
import { HasRootRef } from "../../types";
import "./Calendar.css";
export interface CalendarProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "onChange">, Pick<CalendarTimeProps, "changeHoursAriaLabel" | "changeMinutesAriaLabel">, Pick<CalendarHeaderProps, "prevMonthAriaLabel" | "nextMonthAriaLabel" | "changeMonthAriaLabel" | "changeYearAriaLabel">, HasRootRef<HTMLDivElement> {
    value?: Date;
    disablePast?: boolean;
    disableFuture?: boolean;
    enableTime?: boolean;
    disablePickers?: boolean;
    doneButtonText?: string;
    changeDayAriaLabel?: string;
    weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
    showNeighboringMonth?: boolean;
    size?: "s" | "m";
    onChange?(value?: Date): void;
    shouldDisableDate?(value: Date): boolean;
    onClose?(): void;
}
export declare const Calendar: React.FC<CalendarProps>;
