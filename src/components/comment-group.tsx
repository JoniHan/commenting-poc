import * as React from 'react';
import { ICommentProps } from '../api/models/comments';
import CommentElement from './comment';

interface ICommentGroupProps {
    comments: ICommentProps[];
}

export const CommentGroup: React.FC<ICommentGroupProps> = ({ comments }) => {
    if (!comments.length) {
        return (<></>);
    }
    const elementArray: JSX.Element[] = comments.map(
        (comments, idx) => {
            return (
                <CommentElement key={idx} comment={comments} />
            );
        }
    );

    return <>{elementArray}</>;
}

export default CommentGroup;