export declare const getYears: (currentYear: number, range: number) => {
    value: number;
    label: string;
}[];
export declare const getMonths: (locale?: string | undefined) => {
    value: number;
    label: string;
}[];
export declare const getDaysNames: (now: Date, weekStartsOn: 0 | 1 | 2 | 6 | 5 | 4 | 3, locale?: string | undefined) => string[];
export declare const navigateDate: (date?: Date | null | undefined, key?: string | undefined) => Date;
export declare const getWeeks: (viewDate: Date, weekStartsOn: 0 | 1 | 2 | 6 | 5 | 4 | 3) => Date[][];
export declare const setTimeEqual: (to: Date, from?: Date | null | undefined) => Date;
export declare const isFirstDay: (day: Date, dayOfWeek: number) => boolean;
export declare const isLastDay: (day: Date, dayOfWeek: number) => boolean;
