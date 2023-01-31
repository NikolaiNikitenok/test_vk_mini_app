import * as React from "react";
import "./CalendarTime.css";
export interface CalendarTimeProps {
    value: Date;
    doneButtonText?: string;
    changeHoursAriaLabel?: string;
    changeMinutesAriaLabel?: string;
    onChange?(value: Date): void;
    onClose?(): void;
}
export declare const CalendarTime: React.FC<CalendarTimeProps>;
