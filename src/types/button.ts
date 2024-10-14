export interface PropsButton {
    label: string;
    icon: JSX.Element;
    onClick?: () => void;
    onClose?: () => void;
    isActive: boolean;
}