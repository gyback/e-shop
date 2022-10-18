import { ItemType } from "../categories/categories.types";

export type CartItemType = ItemType & {
    quantity: number;
}

export type CartStateType = {
    cartContent: CartItemType[];
    cartVisibility?: boolean;
    cartTotal?: number;
}