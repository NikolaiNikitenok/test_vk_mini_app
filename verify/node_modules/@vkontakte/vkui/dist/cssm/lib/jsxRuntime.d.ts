import * as React from "react";
declare function createScopedElement(_type: any, props?: any): React.ReactElement<{}, string | ((props: any) => React.ReactElement<any, any> | null) | (new (props: any) => React.Component<any, any, any>)>;
declare namespace createScopedElement {
    var Fragment: React.ExoticComponent<{
        children?: React.ReactNode;
    }>;
}
export { createScopedElement };
