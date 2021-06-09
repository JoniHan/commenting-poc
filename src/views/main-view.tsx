import * as React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import styled from 'styled-components';
import { IItemProps } from '../api/models/items';
import { fetchAllItems } from '../api/stufftocomment/actions/items';
import ItemLinkGroup from '../components/item-link-group';
import HomeView from './home-view';
import ItemView from './item-view';

const LinkWrapper = styled.div`
    padding: 15px;
`;

export const MainView: React.FC = () => {
    const [items, setItems] = React.useState([] as IItemProps[]);
    const [isLoading, setIsLoading] = React.useState(true);

    React.useEffect(() => {
        fetchAllItems()
            .then(fetchedItems => {
                setItems(fetchedItems);
                setIsLoading(false);
            });
    }, []);

    if (isLoading) {
        return (<p>Loading...</p>);
    }

    return (
        <Router>
            <LinkWrapper>
                <Link to="/"><b>Home</b></Link>
            </LinkWrapper>
            <ItemLinkGroup items={items} />
            <hr />
            <Switch>
                <Route exact path="/">
                    <div className={'col-xs-12'}>
                        <HomeView />
                    </div>
                </Route>
                <Route exact path='/:id'>
                    <div className={'col-xs-12'}>
                        <ItemView items={items} />
                    </div>
                </Route>
            </Switch>
        </Router>
    );
}

export default MainView;