export declare function useTimeout(cb: () => any, duration: number): {
    set: (duration?: any) => void;
    clear: () => void;
};
