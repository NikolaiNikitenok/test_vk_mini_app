import * as React from "react";
import { HasComponent, HasRootRef } from "../../types";
import "./TabbarItem.css";
export interface TabbarItemProps extends Omit<React.AllHTMLAttributes<HTMLElement>, "label">, // TODO убрать Omit после удаления свойства label
HasRootRef<HTMLElement>, HasComponent {
    selected?: boolean;
    /**
     * Тест рядом с иконкой
     */
    text?: React.ReactNode;
    /**
     * Индикатор над иконкой. Принимает `<Badge mode="prominent" />` или `<Counter size="s" mode="prominent" />`
     */
    indicator?: React.ReactNode;
    /**
     * @deprecated будет удалено в 5.0.0. Используйте `indicator`
     */
    label?: React.ReactNode;
}
declare const TabbarItem: React.FunctionComponent<TabbarItemProps>;
export default TabbarItem;
