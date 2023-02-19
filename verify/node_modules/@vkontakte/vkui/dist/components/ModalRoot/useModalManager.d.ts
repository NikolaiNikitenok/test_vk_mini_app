import * as React from "react";
import { ModalsStateEntry } from "./types";
interface ModalTransitionState {
    activeModal?: string | null;
    enteringModal?: string | null;
    exitingModal?: string | null;
    history?: string[];
    isBack?: boolean | null;
}
export interface ModalTransitionProps extends ModalTransitionState {
    onEnter: (id: string | null) => void;
    onExit: (id: string | null) => void;
    getModalState: (id: string) => ModalsStateEntry;
    closeActiveModal: VoidFunction;
    delayEnter: boolean;
}
export declare function modalTransitionReducer(state: ModalTransitionState, action: {
    type: "setActive" | "entered" | "exited" | "inited";
    id: string | null;
}): ModalTransitionState;
/**
 * Реализует переход модалок. При смене activeModal m1 -> m2:
 * 1. activeModal: m1, exitingModal: null, enteringModal: null, триггер перехода
 * 2. activeModal: m2, exitingModal: m1, enteringModal: null, рендерим m2 чтобы прошел init, начинаем анимацию выхода
 * одновременный переход между ModalPage:
 *   3a. activeModal: m2, exitingModal: m1, enteringModal: m2
 *   4a. exitingModal и enteringModal переходят в null в порядке завершения анимации
 * ИЛИ дожидаемся скрытия ModalCard
 *   3b. activeModal: m2, exitingModal: null, enteringModal: m2
 *   4b. enteringModal переходит в null после завершения анимации
 * 5. activeModal: m2, exitingModal: null, enteringModal: null, переход закончен
 */
export declare function useModalManager(activeModal: string | null | undefined, children: React.ReactNode | React.ReactNode[], onClose: (id: string) => void, initModal?: (state: ModalsStateEntry) => void): ModalTransitionProps;
export declare function withModalManager(initModal?: (a: ModalsStateEntry) => void): <Props extends ModalTransitionProps>(Wrapped: React.ComponentType<Props>) => React.FC<Pick<Props, Exclude<keyof Props, "isBack" | "onEnter" | "history" | "onExit" | "getModalState" | "closeActiveModal" | "delayEnter" | "activeModal" | "enteringModal" | "exitingModal">> & {
    activeModal?: string | null | undefined;
}>;
export {};
