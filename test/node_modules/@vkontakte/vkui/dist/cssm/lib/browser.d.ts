import { Version } from "../types";
export declare enum System {
    IOS = "ios",
    UNKNOWN = ""
}
export interface BrowserInfo {
    userAgent: string;
    system: System;
    systemVersion: Version | null;
}
export declare function computeBrowserInfo(userAgent?: string): BrowserInfo;
