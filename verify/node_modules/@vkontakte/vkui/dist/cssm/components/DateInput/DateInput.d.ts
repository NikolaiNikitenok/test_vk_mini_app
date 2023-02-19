import * as React from "react";
import { CalendarProps } from "../Calendar/Calendar";
import { Placement } from "../Popper/Popper";
import { HasRootRef } from "../../types";
import "./DateInput.css";
export interface DateInputProps extends Omit<React.InputHTMLAttributes<HTMLDivElement>, "value" | "onChange" | "size">, Pick<CalendarProps, "disablePast" | "disableFuture" | "enableTime" | "shouldDisableDate" | "onChange" | "value" | "doneButtonText" | "weekStartsOn" | "disablePickers" | "changeHoursAriaLabel" | "changeMinutesAriaLabel" | "prevMonthAriaLabel" | "nextMonthAriaLabel" | "changeMonthAriaLabel" | "changeYearAriaLabel" | "changeDayAriaLabel" | "showNeighboringMonth" | "size">, HasRootRef<HTMLDivElement> {
    calendarPlacement?: Placement;
    closeOnChange?: boolean;
    clearFieldAriaLabel?: string;
    showCalendarAriaLabel?: string;
}
export declare const DateInput: React.FC<DateInputProps>;
