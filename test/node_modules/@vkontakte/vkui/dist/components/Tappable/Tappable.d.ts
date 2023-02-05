import * as React from "react";
import { TouchProps } from "../Touch/Touch";
import { HasComponent, HasRootRef } from "../../types";
import { AdaptivityProps } from "../../hoc/withAdaptivity";
import { FocusVisibleMode } from "../FocusVisible/FocusVisible";
import "./Tappable.css";
export interface TappableProps extends Omit<React.AllHTMLAttributes<HTMLElement>, "onTouchStart" | "onTouchMove" | "onTouchEnd" | "onTouchCancel" | "onMouseDown" | "onMouseMove" | "onMouseUp" | "onMouseLeave">, HasRootRef<HTMLElement>, AdaptivityProps, HasComponent, Pick<TouchProps, "onStart" | "onEnd" | "onMove"> {
    /**
     * Длительность показа active-состояния
     */
    activeEffectDelay?: number;
    stopPropagation?: boolean;
    /**
     * Указывает, должен ли компонент реагировать на hover-состояние
     */
    hasHover?: boolean;
    /**
     * Указывает, должен ли компонент реагировать на active-состояние
     */
    hasActive?: boolean;
    /**
     * Стиль подсветки active-состояния. Если передать произвольную строку, она добавится как css-класс во время active
     */
    activeMode?: "opacity" | "background" | string;
    /**
     * Стиль подсветки hover-состояния. Если передать произвольную строку, она добавится как css-класс во время hover
     */
    hoverMode?: "opacity" | "background" | string;
    /**
     * Стиль аутлайна focus visible. Если передать произвольную строку, она добавится как css-класс во время focus-visible
     */
    focusVisibleMode?: FocusVisibleMode | string;
    onEnter?: (outputEvent: MouseEvent) => void;
    onLeave?: (outputEvent: MouseEvent) => void;
}
export interface RootComponentProps extends TouchProps {
    ref?: React.Ref<HTMLElement>;
}
export declare const ACTIVE_DELAY = 70;
export declare const ACTIVE_EFFECT_DELAY = 600;
declare const _default: React.FC<Pick<TappableProps, "max" | "required" | "high" | "low" | "disabled" | "default" | "start" | "open" | "media" | "hidden" | "cite" | "data" | "dir" | "form" | "label" | "slot" | "span" | "style" | "summary" | "title" | "pattern" | "async" | "defer" | "manifest" | "color" | "content" | "size" | "wrap" | "multiple" | "height" | "translate" | "width" | "prefix" | "src" | "children" | "className" | "id" | "lang" | "method" | "min" | "name" | "target" | "type" | "role" | "tabIndex" | "crossOrigin" | "href" | "aria-activedescendant" | "aria-atomic" | "aria-autocomplete" | "aria-busy" | "aria-checked" | "aria-colcount" | "aria-colindex" | "aria-colspan" | "aria-controls" | "aria-current" | "aria-describedby" | "aria-details" | "aria-disabled" | "aria-dropeffect" | "aria-errormessage" | "aria-expanded" | "aria-flowto" | "aria-grabbed" | "aria-haspopup" | "aria-hidden" | "aria-invalid" | "aria-keyshortcuts" | "aria-label" | "aria-labelledby" | "aria-level" | "aria-live" | "aria-modal" | "aria-multiline" | "aria-multiselectable" | "aria-orientation" | "aria-owns" | "aria-placeholder" | "aria-posinset" | "aria-pressed" | "aria-readonly" | "aria-relevant" | "aria-required" | "aria-roledescription" | "aria-rowcount" | "aria-rowindex" | "aria-rowspan" | "aria-selected" | "aria-setsize" | "aria-sort" | "aria-valuemax" | "aria-valuemin" | "aria-valuenow" | "aria-valuetext" | "dangerouslySetInnerHTML" | "onCopy" | "onCopyCapture" | "onCut" | "onCutCapture" | "onPaste" | "onPasteCapture" | "onCompositionEnd" | "onCompositionEndCapture" | "onCompositionStart" | "onCompositionStartCapture" | "onCompositionUpdate" | "onCompositionUpdateCapture" | "onFocus" | "onFocusCapture" | "onBlur" | "onBlurCapture" | "onChange" | "onChangeCapture" | "onBeforeInput" | "onBeforeInputCapture" | "onInput" | "onInputCapture" | "onReset" | "onResetCapture" | "onSubmit" | "onSubmitCapture" | "onInvalid" | "onInvalidCapture" | "onLoad" | "onLoadCapture" | "onError" | "onErrorCapture" | "onKeyDown" | "onKeyDownCapture" | "onKeyPress" | "onKeyPressCapture" | "onKeyUp" | "onKeyUpCapture" | "onAbort" | "onAbortCapture" | "onCanPlay" | "onCanPlayCapture" | "onCanPlayThrough" | "onCanPlayThroughCapture" | "onDurationChange" | "onDurationChangeCapture" | "onEmptied" | "onEmptiedCapture" | "onEncrypted" | "onEncryptedCapture" | "onEnded" | "onEndedCapture" | "onLoadedData" | "onLoadedDataCapture" | "onLoadedMetadata" | "onLoadedMetadataCapture" | "onLoadStart" | "onLoadStartCapture" | "onPause" | "onPauseCapture" | "onPlay" | "onPlayCapture" | "onPlaying" | "onPlayingCapture" | "onProgress" | "onProgressCapture" | "onRateChange" | "onRateChangeCapture" | "onSeeked" | "onSeekedCapture" | "onSeeking" | "onSeekingCapture" | "onStalled" | "onStalledCapture" | "onSuspend" | "onSuspendCapture" | "onTimeUpdate" | "onTimeUpdateCapture" | "onVolumeChange" | "onVolumeChangeCapture" | "onWaiting" | "onWaitingCapture" | "onAuxClick" | "onAuxClickCapture" | "onClick" | "onClickCapture" | "onContextMenu" | "onContextMenuCapture" | "onDoubleClick" | "onDoubleClickCapture" | "onDrag" | "onDragCapture" | "onDragEnd" | "onDragEndCapture" | "onDragEnter" | "onDragEnterCapture" | "onDragExit" | "onDragExitCapture" | "onDragLeave" | "onDragLeaveCapture" | "onDragOver" | "onDragOverCapture" | "onDragStart" | "onDragStartCapture" | "onDrop" | "onDropCapture" | "onMouseDownCapture" | "onMouseEnter" | "onMouseMoveCapture" | "onMouseOut" | "onMouseOutCapture" | "onMouseOver" | "onMouseOverCapture" | "onMouseUpCapture" | "onSelect" | "onSelectCapture" | "onTouchCancelCapture" | "onTouchEndCapture" | "onTouchMoveCapture" | "onTouchStartCapture" | "onPointerDown" | "onPointerDownCapture" | "onPointerMove" | "onPointerMoveCapture" | "onPointerUp" | "onPointerUpCapture" | "onPointerCancel" | "onPointerCancelCapture" | "onPointerEnter" | "onPointerEnterCapture" | "onPointerLeave" | "onPointerLeaveCapture" | "onPointerOver" | "onPointerOverCapture" | "onPointerOut" | "onPointerOutCapture" | "onGotPointerCapture" | "onGotPointerCaptureCapture" | "onLostPointerCapture" | "onLostPointerCaptureCapture" | "onScroll" | "onScrollCapture" | "onWheel" | "onWheelCapture" | "onAnimationStart" | "onAnimationStartCapture" | "onAnimationEnd" | "onAnimationEndCapture" | "onAnimationIteration" | "onAnimationIterationCapture" | "onTransitionEnd" | "onTransitionEndCapture" | "list" | "classID" | "useMap" | "wmode" | "defaultChecked" | "defaultValue" | "suppressContentEditableWarning" | "suppressHydrationWarning" | "accessKey" | "contentEditable" | "contextMenu" | "draggable" | "placeholder" | "spellCheck" | "radioGroup" | "about" | "datatype" | "inlist" | "property" | "resource" | "typeof" | "vocab" | "autoCapitalize" | "autoCorrect" | "autoSave" | "itemProp" | "itemScope" | "itemType" | "itemID" | "itemRef" | "results" | "security" | "unselectable" | "inputMode" | "is" | "as" | "hrefLang" | "integrity" | "rel" | "sizes" | "charSet" | "kind" | "srcLang" | "value" | "download" | "alt" | "coords" | "shape" | "autoPlay" | "controls" | "loop" | "mediaGroup" | "muted" | "playsInline" | "preload" | "autoFocus" | "formAction" | "formEncType" | "formMethod" | "formNoValidate" | "formTarget" | "dateTime" | "acceptCharset" | "action" | "autoComplete" | "encType" | "noValidate" | "allowFullScreen" | "allowTransparency" | "frameBorder" | "marginHeight" | "marginWidth" | "sandbox" | "scrolling" | "seamless" | "srcDoc" | "srcSet" | "accept" | "capture" | "checked" | "maxLength" | "minLength" | "readOnly" | "step" | "htmlFor" | "httpEquiv" | "optimum" | "reversed" | "selected" | "nonce" | "scoped" | "cellPadding" | "cellSpacing" | "colSpan" | "headers" | "rowSpan" | "scope" | "cols" | "rows" | "poster" | "challenge" | "keyType" | "keyParams" | "onStart" | "onMove" | "onLeave" | "onEnter" | "onEnd" | "Component" | "getRootRef" | "stopPropagation" | "activeEffectDelay" | "hasHover" | "hoverMode" | "hasActive" | "activeMode" | "focusVisibleMode"> & import("../AdaptivityProvider/AdaptivityContext").SizeProps>;
export default _default;
