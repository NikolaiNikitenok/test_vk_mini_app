import * as React from "react";
export { canUseDOM, canUseEventListeners, onDOMLoaded } from "@vkontakte/vkjs";
export interface DOMContextInterface {
    /**
     * @ignore
     */
    window?: Window;
    /**
     * @ignore
     */
    document?: Document;
}
export declare type DOMProps = DOMContextInterface;
export declare const getDOM: () => {
    window: (Window & typeof globalThis) | undefined;
    document: Document | undefined;
};
export declare const DOMContext: React.Context<DOMContextInterface>;
export declare const useDOM: () => DOMContextInterface;
export declare function withDOM<Props>(Component: React.ComponentType<Props & DOMProps>): React.ComponentType<Props>;
export declare function blurActiveElement(document: Document | undefined): void;
