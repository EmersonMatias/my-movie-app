import styled from "styled-components"



export default function SpecificFilm_HeroSection({background, poster}) {
    return (
        <Container background={background}>
            <div className="title">
                <img src={poster} />
            </div>
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    height: 37vw;
    background-color: yellow;
    background-image: url(${props => props.background});
    background-size: cover;
   

    .title{
        width: 54vw;
        height: 21vw;
        background-color: black;
        border-radius: 50px;
        margin-top: 20vw;
        margin-left: 5vw;
        position: absolute;
       
        img{
            width: 100%;
            height: 100%;
            border-radius: 50px;
            object-fit: cover;
            object-position: right top;
        }
    }
`