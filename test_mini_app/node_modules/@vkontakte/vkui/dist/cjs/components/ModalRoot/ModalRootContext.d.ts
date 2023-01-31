import * as React from "react";
import { ModalElements, ModalsStateEntry, ModalType } from "./types";
export declare type ModalRegistryEntry = ModalElements & Required<Pick<ModalsStateEntry, "type" | "id">>;
declare type ModalRefs = {
    [k in keyof ModalElements]: (e: ModalElements[k]) => void;
};
export interface ModalRootContextInterface {
    updateModalHeight: VoidFunction;
    registerModal(data: ModalRegistryEntry): void;
    onClose?: VoidFunction;
    isInsideModal: boolean;
}
export declare const ModalRootContext: React.Context<ModalRootContextInterface>;
/**
 * All referenced elements must be static
 */
export declare function useModalRegistry(id: string | undefined, type: ModalType): {
    refs: Required<ModalRefs>;
};
export default ModalRootContext;
