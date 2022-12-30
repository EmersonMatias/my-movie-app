import styled from "styled-components"

export function AboutFilm({ overview, trailers, trailerOpcional}) {

    const trailer = trailers?.filter((trailer) => (
        trailer.name.includes("Trailer") || trailer.name.includes("trailer")
    ))

    const teaser = trailers?.filter((trailer) => (
        trailer.name.includes("Teaser") || trailer.name.includes("teaser")
    ))

    function selectTrailer(){
        if(trailer?.length > 0){
            const key = trailer[0].key
            console.log(key)
           return key
        } else if(teaser?.length > 0){
            const key = teaser[0].key
            console.log(key)
            return key
        } else{
            return trailerOpcional
        }
    }

    return (
        <Container>
            <div className="description">
                <h1>Descrição</h1>
                <p>{overview}</p>
            </div>
            <div className="trailer">
                <div className="ratio ratio-16x9">
                    <iframe src={`https://www.youtube.com/embed/${selectTrailer()}` }title="YouTube video" allowFullScreen></iframe>
                </div>
            </div>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    width: 100%;
    margin: 160px 0;
    color: #FFFFFF;

    .description{
        width: 50%;
        padding-left: 4vw;
        padding-right: 4vw;
        
        h1{
            font-size: 2vw;
            font-weight: bold;
            margin-bottom: 40px;
        }

        p{
            font-size: 1.2vw;
            text-align: justify;

        }
    }

    .trailer{
        width: 50%;
        display: flex;
        justify-content: center;

        .ratio{
            width: 80%;
        }
    }
`