import styled from 'styled-components';

export const Nav = styled.nav`
    margin-top: 0;
    width: 100vw;
    height: 8rem;
    border-bottom: 0.05rem solid #bfc1c2;

    @media screen and (max-width: 500px){
        height: 5rem;
    }
`

export const Nav_list = styled.ul`
    margin-top: 0;
    text-align:right;

    @media screen and (max-width: 500px){
        text-align: justify;
        margin: 0 auto;
    }
`

export const List_item = styled.li`
    display: inline-block;
    padding: 1rem;
    text-align: center;
    font-weight: 600;
    cursor: pointer;

    @media screen and (max-width: 500px){
        font-size: 8px;
        padding: 0.5rem;
    }
`

export const Avatar = styled.div`
    width: 3rem;
    height: 3rem;
`
export const Img = styled.img`
    width: 3rem;
    height: 3rem;
    border-radius: 50% ;
`;