import * as React from "react";
import "./Separator.css";
export interface SeparatorProps extends React.HTMLAttributes<HTMLDivElement> {
    /**
     * С этим свойством компонент не будет иметь отступы слева и справа
     */
    wide?: boolean;
    expanded?: boolean;
}
declare const _default: React.NamedExoticComponent<SeparatorProps>;
export default _default;
