import iconCalendar from "../../img/iconCalendarBlank.svg"
import iconVector from "../../img/iconVector.svg"
import iconClock from "../../img/iconClock.svg"
import iconTicket from "../../img/iconTicket.svg"
import styled from "styled-components"

export default function SubContent({ runtime, year, genres, providers }) {
    const streamings = providers?.flatrate
    const rents = providers?.rent
    const hasStreamings = streamings?.length
    const hasRents = rents?.length
    console.log(streamings, rents)

    return (

        <Container hasStreamings={hasStreamings} hasRents={hasRents}>
            <div className="subLeft">
                <div className="content">
                    <img src={iconCalendar} alt="iconCalendar"/>
                    <p>{year}</p>
                    <img src={iconVector} alt="iconVector"/>
                    <img src={iconClock} alt="iconVector"/>
                    <p>{runtime} minutos</p>
                    <img src={iconVector} alt="iconVector"/>
                    <img src={iconTicket} alt="iconTicket" />
                    <p>{genres}</p>

                </div>
                <div className="providers">
                    <div className="streamings">
                        <p>Streamings</p>
                      
                        {streamings?.map((streaming) => (
                            <img src={`https://www.themoviedb.org/t/p/original${streaming.logo_path}`} alt={streaming.provider_name}/>
                        ))}
                    </div>
                    <div className="rent">
                        <p>Rent</p>
                        {rents?.map((rent) => (
                            <img src={`https://www.themoviedb.org/t/p/original${rent.logo_path}`} alt={rents.provider_name}/>
                        ))}
                    </div>

                </div>
            </div>
            <div className="subRight">
                <div className="favorite">
                    aliceblue
                </div>
                <div className="toWactch">
                    a
                </div>
                <div className="watched">
                    a
                </div>
            </div>
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    background-color: green;
    margin-top: 5%;
    display: flex;

    .subLeft{
        width: 50%;
        background-color: #101216;
        max-width: 50%;
        display: flex;
        flex-direction: column;
        
        .content{
            font-size: 28px;
            color: rgba(255,255,255,0.6);
            display: flex;
            flex-direction: row;
            align-items: center;
            margin-left: 5vw;
            margin-top: 80px;
            flex-wrap: wrap;
    
            img{
                margin-right: 8px;
                margin-left: 8px;
            }
            }

        .providers{
            margin-left: 5vw;
            margin-top: 40px;
    
                .streamings{
                    display: ${props => props.hasStreamings ? "flex" : "none"};
                    align-items: center;
                    flex-wrap: wrap;
                    background-color: rebeccapurple;
                    margin-bottom: 1vw;
                }

                .rent{
                    display: ${props => props.hasRents ? "flex" : "none"};
                    align-items: center;
                    flex-wrap: wrap;
                    background-color: rebeccapurple;
                    margin-bottom: 1vw;
                }

            img{
            width: 5vw;
            height: 5vw;
            margin-left: 32px;
            border-radius: 24px;
            margin-bottom: 16px;
        }
        }

        img{
            width: 50px;
            height: 50px;

        }
    }

    .subRight{
        width: 50%;
        max-width: 50%;
        background-color: bisque;
    }
`
