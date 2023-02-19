export declare function useEnsuredControl<V, E>(props: {
    value?: V;
    onChange?: (e: E) => any;
}, options: {
    defaultValue: V;
}): [V | undefined, (e: E) => any];
