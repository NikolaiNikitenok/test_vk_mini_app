import * as React from "react";
import { ModalRootContextInterface } from "./ModalRootContext";
declare type PickedProps = Pick<ModalRootContextInterface, "updateModalHeight">;
export declare function withModalRootContext<P extends PickedProps>(Component: React.ComponentType<P>): React.ComponentType<Omit<P, keyof PickedProps>>;
export {};
