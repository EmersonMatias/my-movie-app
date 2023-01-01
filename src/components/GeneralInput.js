import styled from "styled-components"

export default function GeneralInput({ text, type}) {
    return (
        <Input placeholder={text} type={type}/>
    )
}

const Input = styled.input`
        width: 50%;
        background: rgb(37,40,54, 70%);
        border-radius: 21px;
        color: #FFFFFF;
        font-size: 16px;
        padding-left: 1vw;
        margin-bottom: 24px;
        padding-top: 8px;
        padding-bottom: 8px;


`