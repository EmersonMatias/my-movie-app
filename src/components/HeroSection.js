import styled from "styled-components"
import iconPlus2 from "../img/iconPlus2.svg"
import iconFavorite from "../img/iconRating.svg"

export default function HeroSection({ background, poster, filmTitle, name, overview, height, stateButtons }) {
    function title() {
        if (filmTitle === undefined) {
            return name
        } else {
            return filmTitle
        }
    }

    return (
        <HeroSectionContainer backgroundPage={background} height={height} stateButtons={stateButtons}>

            <div className="opacity">
            </div>
            <div className="gradient">
            </div>
            <div className="contentHeroSection">
                <img className="poster" alt="Poster" src={poster} />
                <div className="textHeroSection">
                    <h2>{title()}</h2>
                    <div className="buttonsHeroSection">
                        <button><p>QUERO ASSISTIR</p> <img alt="Icone Mais" src={iconPlus2} /></button>
                        <button><p>FAVORITO</p> <img alt="Icone Estrela" src={iconFavorite} /></button>
                    </div>
                    <p className="description">{overview}
                    </p>

                </div>
            </div>
        </HeroSectionContainer>
    )
}

const HeroSectionContainer = styled.section`
    width: 100%;
    height: ${props => props.height};
    background-color: aliceblue;
    background-image: url(${props => props.backgroundPage});
    background-size: cover;
    display: flex;
    position: relative;
    font-family: 'Poppins', sans-serif;

    /*
     .opacity{
        background-color: rgba(0,0,0,0.5);
        width: 100%;
        height: ${props => props.height};
        position: absolute;
    }
    */ 

    .gradient{
        width: 100%;
        height: ${props => props.height};
        position: absolute;
        background: linear-gradient(180deg, rgba(255,255,255,0) 0, rgba(16,18,22,1) 85%);
    }   

    .contentHeroSection{
        display: flex;
        align-items: center;
        width: 1050px;
        margin-top: 140px;
        margin-left: 260px;
        position: absolute;
    }

    .textHeroSection{
        margin-top: 24px;
    }

    .poster{
        width: 360px;
        height: 516px;
        object-fit: cover;
        object-position: center;
        border-radius: 10px;
        margin-right: 80px;
    }

    h2{
        font-size: 64px;
        font-weight: 900;
        margin-bottom: 32px;
        color: #FFFFFF;
        max-width: 800px;
    }

    .buttonsHeroSection{
        display: ${props => props.stateButtons === true ? "flex" : "none"};

        button{
            padding: 16px 32px;
            border-radius: 30px;
            background-color: rgb(0,0,0, 80%);
    
            color: white;
            font-size: 16px;
            font-weight: bold;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-right: 32px;
            margin-bottom: 32px;

            p{
                background: -webkit-linear-gradient(90deg, hsla(52, 82%, 52%, 1) 0%, hsla(1, 92%, 47%, 1) 100%);
                background-clip: text;
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
            }
         

            img{
                width: 24px;
                height: 24px;
                color: #FFFFFF;
                margin-left: 16px;
            }
        }
    }

    .description, .genre{
        max-width: 500px;
        font-size: 18px;
        font-weight: 400;
        color: #FFFFFF;
        margin-bottom: 40px;
    }

`