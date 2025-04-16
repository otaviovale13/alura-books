import styled from "styled-components"

const Input = styled.input`
    border: 1px solid #FFF;
    background: transparent;
    border: 1px solid #FFF;
    padding: 20px 140px;
    border-radius: 50px;
    width: 200px;
    color: #FFF;
    font-size: 16px;
    margin-bottom: 10px;

    &::placeholder {
        color: #FFF;
        font-size: 16px;
    }

    @media (max-width: 530px) {
        width: 100px;
        font-size: 12px;

        &::placeholder {
            color: #FFF;
            font-size: 8px;
        }
    }

    @media (max-width: 430px) {
        width: 50px;
        font-size: 12px;

        &::placeholder {
            color: #FFF;
            font-size: 8px;
        }
    }
`

export default Input