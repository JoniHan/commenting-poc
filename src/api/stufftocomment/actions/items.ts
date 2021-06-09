
import { IItemProps } from "../../models/items";

export const fetchAllItems = (): Promise<IItemProps[]> => {
    // this could be an api call, but mocked for now
    const mockItems: IItemProps[] = [
        {
            id: 0,
            title: 'Regarding this thing',
            caption: 'stuff about the thing'
        },
        {
            id: 1,
            title: 'Regarding this other thing',
            caption: 'stuff about the thing number 2'
        },
        {
            id: 2,
            title: 'Regarding this third thing',
            caption: 'stuff about the thing number 3'
        },
    ];

    return Promise.resolve(mockItems);
};