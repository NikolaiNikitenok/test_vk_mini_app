import * as React from "react";
import "./TabsItem.css";
export interface TabsItemProps extends React.HTMLAttributes<HTMLElement> {
    after?: React.ReactNode;
    selected?: boolean;
}
declare const TabsItem: React.FC<TabsItemProps>;
export default TabsItem;
