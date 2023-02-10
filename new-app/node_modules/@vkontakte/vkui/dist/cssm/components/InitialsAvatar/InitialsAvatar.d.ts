import * as React from "react";
import { HasRootRef } from "../../types";
import { AvatarProps } from "../Avatar/Avatar";
import "./InitialsAvatar.css";
/**
 * Градиенты, которые можно использовать в алгоритме поиска градиентов по числовому идентификатору пользователя.
 * @example user.id % 6 + 1
 */
export declare type InitialsAvatarNumberGradients = 1 | 2 | 3 | 4 | 5 | 6;
export declare type InitialsAvatarTextGradients = "red" | "pink" | "orange" | "yellow" | "green" | "l-blue" | "blue" | "violet";
export interface InitialsAvatarProps extends React.HTMLAttributes<HTMLDivElement>, HasRootRef<HTMLDivElement>, Pick<AvatarProps, "size" | "shadow" | "badge"> {
    children?: React.ReactNode;
    /**
     * `'red' | 'pink' | 'orange' | 'yellow' | 'green' | 'l-blue' | 'blue' | 'violet'`
     *
     * Если передано число, то оно будет сконвертировано в строчное представление цвета по следующей схеме:
     *
     * 1: 'red'
     *
     * 2: 'orange'
     *
     * 3: 'yellow'
     *
     * 4: 'green'
     *
     * 5: 'l-blue'
     *
     * 6: 'violet'
     */
    gradientColor?: InitialsAvatarNumberGradients | InitialsAvatarTextGradients;
}
export declare const InitialsAvatar: React.FC<InitialsAvatarProps>;
