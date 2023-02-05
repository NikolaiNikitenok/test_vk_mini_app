import * as React from "react";
import "./InfoRow.css";
export interface InfoRowProps extends React.HTMLAttributes<HTMLDivElement> {
    header: React.ReactNode;
}
declare const InfoRow: React.FunctionComponent<InfoRowProps>;
export default InfoRow;
