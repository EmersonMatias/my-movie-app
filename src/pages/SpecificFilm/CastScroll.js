import styled from "styled-components"


export async function CastScroll(aa){
    return(
        <Container>
                <div className="castPeople">
                    <img src={`https://www.themoviedb.org/t/p/original`} />
                    <p className="realName">{}</p>
                    <p>{}</p>
                </div>
    </Container>
    )
}


const Container = styled.div`
    width: 100%;
    background-color: greenyellow;
    display: flex;
    overflow-x: scroll;
    overflow-y: hidden;

    .castPeople{
        max-width: 16vw;
        max-height: 25vw;
        font-size: 20px;
        display: flex;
        flex-direction: column;
        align-items: center;

        p{
            margin-top: 8px;
        }

        .realName{
            font-weight: bold;
          
        }
    }

    img{
        width: 16vw;
        height: 21vw;
        margin-left: 30px;
        border-radius: 16px;
    }
`
