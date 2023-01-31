import * as React from "react";
export interface UseCalendarDependencies {
    value?: Array<Date | null> | Date;
    disablePast?: boolean;
    disableFuture?: boolean;
    shouldDisableDate?(value: Date): boolean;
}
export declare function useCalendar({ value, disablePast, disableFuture, shouldDisableDate, }: UseCalendarDependencies): {
    viewDate: Date;
    setViewDate: React.Dispatch<React.SetStateAction<Date>>;
    setPrevMonth: () => void;
    setNextMonth: () => void;
    focusedDay: Date | undefined;
    setFocusedDay: React.Dispatch<React.SetStateAction<Date | undefined>>;
    isDayFocused: (day: Date) => boolean;
    isDayDisabled: (day: Date) => boolean;
    resetSelectedDay: () => void;
};
