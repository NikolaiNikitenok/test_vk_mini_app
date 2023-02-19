import * as React from "react";
import "./Banner.css";
export interface BannerProps extends React.HTMLAttributes<HTMLDivElement> {
    /**
     * Тип баннера.
     */
    mode?: "tint" | "image";
    size?: "s" | "m";
    /**
     * Тип действия в правой части баннера.
     *
     * - `dismiss` – отображается иконка крестика, при клике на неё сработает свойство `onDismiss`.
     * - `expand` – отображается иконка шеврона, которая подразумевает, что при клике на баннер можно куда-то перейти.
     */
    asideMode?: "dismiss" | "expand";
    /**
     * Срабатывает при клике на иконку крестика при `asideMode="dismiss"`.
     */
    onDismiss?: React.MouseEventHandler<HTMLButtonElement>;
    /**
     * `aria-label` для кнопки при `asideMode="dismiss". Необходим, чтобы кнопка была доступной.
     */
    dismissLabel?: string;
    /**
     * Содержимое, отображаемое в левой части баннера.
     */
    before?: React.ReactNode;
    /**
     * Заголовок. <br />
     * При использовании этого свойства рекомендуется не указывать `text`.
     */
    header?: React.ReactNode;
    /**
     * Подзаголовок. <br />
     * При использовании этого свойства рекомендуется не указывать `text`.
     */
    subheader?: React.ReactNode;
    /**
     * Текст баннера. <br />
     * Это свойство следует использовать без указания `header` и `subheader`.
     */
    text?: React.ReactNode;
    /**
     * При использовании `mode="image"`.
     *
     * - `light` – в качестве фона используется светлое изображение, цвет текста в баннере будет тёмным.
     * - `dark` – в качестве фона используется тёмное изображение, цвет текста будет светлым.
     */
    imageTheme?: "light" | "dark";
    /**
     * При использовании `mode="image"`.
     *
     * Элемент, который нужно стилизовать цветом и/или фоном. Этот элемент будет растянут на 100% ширины и высоты баннера.
     */
    background?: React.ReactNode;
    /**
     * Кнопки, отображаемые в баннере.
     *
     * - В режиме `tint` или в `image` со светлым фоном рекомендуется использовать только `<Button mode="primary" />` или `<Button mode="tertiary" hasHover={false} />`.
     * - В режиме `image` с тёмным фоном – `<Button mode="overlay_primary" />`.
     */
    actions?: React.ReactNode;
}
declare const Banner: React.FC<BannerProps>;
export default Banner;
