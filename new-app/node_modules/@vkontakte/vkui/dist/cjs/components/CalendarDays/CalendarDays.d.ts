import * as React from "react";
import "./CalendarDays.css";
export interface CalendarDaysProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "onChange"> {
    value?: Date | Array<Date | null>;
    viewDate: Date;
    weekStartsOn: 0 | 1 | 2 | 3 | 4 | 5 | 6;
    showNeighboringMonth?: boolean;
    size?: "s" | "m";
    onDayChange(value: Date): void;
    isDayDisabled(value: Date): boolean;
    isDaySelectionStart(value: Date, dayOfWeek: number): boolean;
    isDaySelectionEnd(value: Date, dayOfWeek: number): boolean;
    isHintedDaySelectionStart?(value: Date, dayOfWeek: number): boolean;
    isHintedDaySelectionEnd?(value: Date, dayOfWeek: number): boolean;
    isDayActive(value: Date): boolean;
    isDayHinted?(value: Date): boolean;
    isDaySelected?(value: Date): boolean;
    isDayFocused(value: Date): boolean;
    onDayEnter?(value: Date): void;
    onDayLeave?(value: Date): void;
}
export declare const CalendarDays: React.FC<CalendarDaysProps>;
