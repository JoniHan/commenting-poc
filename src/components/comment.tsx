import * as React from 'react';
import { ICommentProps } from '../api/models/comments';

interface ICommentElementProps {
    comment: ICommentProps;
}

export const CommentElement: React.FC<ICommentElementProps> = ({ comment }) => {
    return (
        <p>{comment.caption}</p>
    );
}

export default CommentElement;