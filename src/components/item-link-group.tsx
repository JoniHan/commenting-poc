import * as React from 'react';
import { IItemProps } from '../api/models/items';
import ItemLink from './item-link';

interface IItemLinkGroupProps {
    items: IItemProps[];
}

export const ItemLinkGroup: React.FC<IItemLinkGroupProps> = ({ items }) => {
    if (!items.length) {
        return (<></>);
    }
    const elementArray: JSX.Element[] = items.map(
        (item, idx) => {
            return (
                <ItemLink key={idx} item={item} />
            );
        }
    );

    return <>{elementArray}</>;
}

export default ItemLinkGroup;