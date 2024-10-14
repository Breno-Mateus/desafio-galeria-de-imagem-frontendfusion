import { TypeData } from "./data"

export interface PropsCard {
    item: TypeData;
    toggleFavorite: (item: TypeData) => void;
    isFavorite: boolean;
}