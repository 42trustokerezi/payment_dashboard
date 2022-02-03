import styled from 'styled-components';

export const Container = styled.div`

`;

export const Mop = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 3rem;
`;

export const Title = styled.div`
`;

export const Text = styled.h2`
    margin-bottom: 0;
`;

export const SubText = styled.p`
    margin-top: 0.5rem;
    font-size: 14px;
    color: #bfc1c2;
`;

export const PaymentPortals = styled.ul`
    list-style-type: none;
`;

export const CardDetails = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 3rem;
`;

export const Card = styled.div`
    padding: 0;
    width: 25rem;
    height: 16rem;
`;

export const List_item = styled.li`
    display: inline-block;
    padding: 0 1rem;
`;
export const Img = styled.img`
    max-width: 2rem;
`;

export const Image = styled.img`
    margin: 0;
    width: 100%;
    height: 100%;
    display: block;
`
export const Form = styled.form`
    margin-top: 0;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 20px;
    padding-bottom: 1rem;
    width: 30rem;
`

export const FormGroup = styled.div`
    &.full{
        grid-column: 1 / -1;
    }

    label {
        display: block;
        margin-bottom: 5px;
        color: #888;
        font-size: 14px;
    }
`

export const FormInput = styled.input`
    appearance: none;
    border: 0.5px solid #a9a9a9;

    display: block;
    width: 80%;

    border-radius: 5px;
    padding:  12px 16px;
    background-color: #F3F3F3;
        :hover{
            background-color: #acacac;
            color: white;
        }
`
export const Label = styled.label``

export const Radio = styled.label`
    display: inline-flex;
    align-items: center;
    cursor: pointer;
`

export const RadioInput = styled.input``

export const RadText = styled.div``

export const Button = styled.button`
    width: 100%;
    height: 3.5rem;
    text-align: center;
    background-color: #007FFF;
    border: none;
    border-radius: 0.2rem;
    color: white;
    font-size: 16px;
    font-weight: 600;
`
export const Line = styled.div`
    height: 0.5px;
    background: #e5e4e2;
    margin: 0 2rem;
`;

export const Div = styled.div``

export const SubTotal = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 3rem;
`
export const EstTax = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 3rem;
    `
export const PromoCode = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 3rem;
`

export const SubTText = styled.h4``
export const EstText = styled.h4``
export const PromoText = styled.h4`
    display: inline-flex;
    align-items: center;
    margin: 0;
`
export const Code = styled.h4`
    color: #e5e4e2;
`
export const Value = styled.h4``

export const Payment = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 3rem;
    height: 10rem;
`
export const Pay = styled.button`
    width: 12rem;
    height: 3rem;
    background: #007FFF;
    color: white;
    border: none;
    font-size: 16px ;
    font-weight: 500;
    border-radius: 0.2rem;
`

export const Total = styled.div`
    display: flex;
`
export const TText = styled.h4``