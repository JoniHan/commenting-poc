import React from 'react';
import { useParams } from 'react-router';
import styled from 'styled-components';
import { collapseTextChangeRangesAcrossMultipleVersions } from 'typescript';
import { fetchAllComments } from '../api/comments/actions/comments';
import { ICommentProps } from '../api/models/comments';
import { IItemProps } from '../api/models/items';
import Button from '../components/button';
import CommentGroup from '../components/comment-group';
import TextArea from '../components/textarea';

const ContentWrapper = styled.div`
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
        width: 100%;
    `;
const CommentContainer = styled.div`
        display: flex;
        align-items: left;
        flex-direction: column;
        justify-content: space-between;
        width: 100%;
        padding: 15px;
    `;
const FormWrapper = styled.div`
    display: flex;
    align-items: left;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    padding: 15px;
`;
const InputWrapper = styled.div`
    padding-bottom: 15px
`;

interface IParamsProps {
    id?: string;
}

export interface IItemViewProps {
    items: IItemProps[];
}

export const ItemView: React.FC<IItemViewProps> = ({ items }) => {
    const { id }: IParamsProps = useParams();

    const [comments, setComments] = React.useState([] as ICommentProps[]);
    const [isLoading, setIsLoading] = React.useState(true);
    const [userComment, setUserComment] = React.useState('');

    React.useEffect(() => {
        fetchAllComments(id)
            .then(fetchedComments => {
                setComments(fetchedComments);
                setIsLoading(false);
            });
    }, [id]);

    if (isLoading) {
        return (<p>Loading...</p>);
    }

    if (id) {
        const numberIndex = parseInt(id);
        const selectedItem = items.find(item => item.id === numberIndex);
        if (selectedItem) {
            return (
                <>
                    <ContentWrapper>
                        <h1>{selectedItem.title}</h1>
                        <p>{selectedItem.caption}</p>
                    </ContentWrapper>
                    <CommentContainer>
                        <h2>Comments</h2>
                        <CommentGroup comments={comments} />
                    </CommentContainer>
                    <hr />
                    <FormWrapper className={'form-group'}>
                        <h2>Write a comment</h2>
                        <InputWrapper>
                            <TextArea className={'form-control'} value={userComment} onChange={(evt) => setUserComment(evt.target.value)} id={'comment-field'} labelText={'Comment'} />
                        </InputWrapper>
                        <Button className={'form-control btn btn-primary'} onClick={() => {
                            // this could obviously be a lot better, but would need an actual saving function so I'll just mock this for simplicity
                            const commentToAdd = userComment.trim();

                            if (commentToAdd.length) {
                                const newCommentObject = { id: 0, caption: userComment };
                                setComments([...comments, newCommentObject]);
                                setUserComment('');
                            }

                        }}>{'Submit'}</Button>
                    </FormWrapper>
                </>
            );
        }

    }

    return (
        <ContentWrapper>
            <h1>Please select a valid item</h1>
        </ContentWrapper>
    );
}

export default ItemView;
