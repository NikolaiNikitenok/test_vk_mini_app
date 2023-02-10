import * as React from "react";
interface TransitionContextProps {
    entering: boolean;
}
export declare const useNavTransition: () => TransitionContextProps;
export declare const NavTransitionProvider: React.FC<TransitionContextProps>;
export {};
