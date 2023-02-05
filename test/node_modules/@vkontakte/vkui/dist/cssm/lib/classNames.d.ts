export interface ObjectClassNames {
    [index: string]: boolean | undefined | null;
}
export declare type ClassName = number | string | ObjectClassNames | false | null | undefined;
export declare function classNames(...classnames: ClassName[]): string | string[];
export declare function classNamesString(...args: ClassName[]): string;
