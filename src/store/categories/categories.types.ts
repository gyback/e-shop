export type ItemType = {
    id: number;
    imageUrl: string;
    name: string;
    price: number;
}

export type CategoryType = {
    items: ItemType[];
    title: string;
}

export type CategoryStateType = {
    categories: CategoryType[];
    isLoading: boolean;
    error: Error | null;
}

export type CategoryMapType = {
    [key: string]: ItemType[];
}