import * as React from "react";
import "./CalendarHeader.css";
export interface CalendarHeaderProps extends Pick<React.HTMLAttributes<HTMLDivElement>, "className"> {
    viewDate: Date;
    prevMonth?: boolean;
    nextMonth?: boolean;
    disablePickers?: boolean;
    prevMonthAriaLabel?: string;
    nextMonthAriaLabel?: string;
    changeMonthAriaLabel?: string;
    changeYearAriaLabel?: string;
    onChange(viewDate: Date): void;
    onNextMonth?(): void;
    onPrevMonth?(): void;
}
export declare const CalendarHeader: React.FC<CalendarHeaderProps>;
