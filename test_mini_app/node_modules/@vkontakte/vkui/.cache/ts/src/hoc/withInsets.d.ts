/// <reference types="react" />
import { HasInsets } from "../types";
export declare function withInsets<T extends HasInsets>(Component: React.ComponentType<T>): React.FC<Omit<T, keyof HasInsets>>;
