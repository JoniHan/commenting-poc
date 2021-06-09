
import { ICommentProps } from "../../models/comments";

export const fetchAllComments = (itemId?: string): Promise<ICommentProps[]> => {
    // this could be an api call, but mocked for now
    const mockItems: ICommentProps[] = [
        {
            id: 0,
            caption: 'a comment about the thing with index ' + itemId
        },
        {
            id: 1,
            caption: 'another comment about the thing with index ' + itemId
        },
        {
            id: 2,
            caption: 'third comment about the thing with index ' + itemId
        },
    ];

    return Promise.resolve(mockItems);
};