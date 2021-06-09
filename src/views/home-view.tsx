import React from 'react';
import styled from 'styled-components';

const TitleWrapper = styled.div`
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
        width: 100%;
    `;

export const HomeView = () => {
    return (
        <TitleWrapper>
            <h1>Choose an item to view and comment from the link list above</h1>
        </TitleWrapper>
    );
}

export default HomeView;
