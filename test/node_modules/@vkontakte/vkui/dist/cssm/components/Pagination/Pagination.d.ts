import * as React from "react";
import type { HasRootRef } from "../../types";
import "./Pagination.css";
export interface PaginationProps extends Omit<React.HTMLAttributes<HTMLElement>, "onChange">, HasRootRef<HTMLElement> {
    /**
     * Текущая страница.
     */
    currentPage?: number;
    /**
     * Кол-во всегда видимых страниц по краям текущей страницы.
     */
    siblingCount?: number;
    /**
     * Кол-во всегда видимых страниц в начале и в конце.
     */
    boundaryCount?: number;
    /**
     * Общее кол-во страниц.
     */
    totalPages?: number;
    /**
     * Блокировка всех кнопок.
     */
    disabled?: boolean;
    /**
     * Переобределение `aria-label` для кнопки навигации назад.
     * По умолчанию используется текст на "ru_RU".
     */
    prevButtonAriaLabel?: string;
    /**
     * Переобределение `aria-label` для кнопки навигации вперёд.
     * По умолчанию используется текст на "ru_RU".
     */
    nextButtonAriaLabel?: string;
    /**
     * Функция для переопределния и/или локализации `aria-label` атрибута.
     * По умолчанию используется текст на "ru_RU".
     */
    getPageAriaLabel?(page: number, isCurrent: boolean): string;
    onChange?(page: number): void;
}
export declare const Pagination: React.FC<PaginationProps>;
