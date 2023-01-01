import styled from "styled-components"

export default function GeneralInput({ text, type,onchange,value}) {
    return (
        <Input placeholder={text} type={type} onChange={onchange} value={value}/>
    )
}

const Input = styled.input`
        width: 50%;
        background: rgb(37,40,54, 70%);
        border-radius: 21px;
        color: #FFFFFF;
        font-size: 1vw;
        padding-left: 1vw;
        margin-bottom: 24px;
        padding-top: 8px;
        padding-bottom: 8px;
`