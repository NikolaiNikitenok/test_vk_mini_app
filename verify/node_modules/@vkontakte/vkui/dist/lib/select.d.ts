declare type Option = {
    label?: string;
    [index: string]: any;
};
declare type GetOptionLabel = (option: Option) => string | undefined;
export declare const defaultFilterFn: (query: string | undefined, option: Option, getOptionLabel?: GetOptionLabel) => boolean;
export {};
