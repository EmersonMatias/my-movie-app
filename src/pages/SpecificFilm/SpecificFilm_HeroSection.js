import styled from "styled-components"



export default function SpecificFilm_HeroSection({ background, poster, title, rate }) {
    console.log(rate)
    return (
        <Container background={background}>
            <div className="poster">
                <img src={poster} alt="Poster" />
            </div>
            <div className="title">
                <p>{title}</p>
            </div>
            <div className="rating">
                <p>{rate?.toFixed(1)}</p>
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
   

    .poster{
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

    .title{
        width: 54vw;
        height: 5vw;
        background-color: rgba(0,0,0,0.88);
        border-radius: 0 0 50px 50px;
        position: absolute;
        margin-top: 36.04vw;
        margin-left: 5vw;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        color: #FFFFFF;
        font-weight: bold;
    }

    .rating{
        width: 4vw;
        height: 4vw;
        background-color: #FFFFFF;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: rgba(0,0,0,0.8);
        color: #FFFFFF;
        position: absolute;
        margin-top: 21vw;
        margin-left: 7vw;
        border-radius: 16px;
        font-weight: bold;
        p{
            background: -webkit-linear-gradient(90deg, hsla(52, 82%, 52%, 1) 0%, hsla(1, 92%, 47%, 1) 100%);
             background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
        
    }
`