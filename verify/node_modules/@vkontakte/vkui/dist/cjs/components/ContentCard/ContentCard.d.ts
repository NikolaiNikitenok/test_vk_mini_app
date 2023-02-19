import * as React from "react";
import { CardProps } from "../Card/Card";
import { TappableProps } from "../Tappable/Tappable";
import { HasRef, HasRootRef } from "../../types";
import "./ContentCard.css";
export interface ContentCardProps extends HasRootRef<HTMLDivElement>, Omit<TappableProps, "getRootRef" | "crossOrigin">, Omit<React.ImgHTMLAttributes<HTMLImageElement>, keyof React.HTMLAttributes<HTMLImageElement>>, HasRef<HTMLImageElement> {
    /**
     Текст над заголовком
     */
    subtitle?: React.ReactNode;
    /**
     Заголовок
     */
    header?: React.ReactNode;
    /**
     Текст
     */
    text?: React.ReactNode;
    /**
     Нижний текст
     */
    caption?: React.ReactNode;
    /**
      @deprecated будет удалено в 5.0.0. Используйте src
     */
    image?: string;
    /**
      Максимальная высота изображения
     */
    maxHeight?: number;
    mode?: CardProps["mode"];
}
declare const ContentCard: React.FC<ContentCardProps>;
export default ContentCard;
