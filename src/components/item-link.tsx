import * as React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { IItemProps } from '../api/models/items';

interface IItemLinkProps {
    item: IItemProps;
}

const LinkWrapper = styled.div`
    padding: 15px;
`;

export const ItemLink: React.FC<IItemLinkProps> = ({ item }) => {
    return (
        <LinkWrapper>
            <Link to={`/${item.id}`}>{item.title}</Link>
        </LinkWrapper>
    );
}

export default ItemLink;