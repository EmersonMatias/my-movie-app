import iconCalendar from "../../img/iconCalendarBlank.svg"
import iconVector from "../../img/iconVector.svg"
import iconClock from "../../img/iconClock.svg"
import iconTicket from "../../img/iconTicket.svg"
import iconRating from "../../img/iconRating.svg"
import iconPlus2 from "../../img/iconPlus2.svg"
import iconEye from "../../img/iconEye.svg"
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
                    <img src={iconCalendar} alt="iconCalendar" />
                    <p>{year}</p>
                    <img src={iconVector} alt="iconVector" />
                    <img src={iconClock} alt="iconVector" />
                    <p>{runtime} minutos</p>
                    <img src={iconVector} alt="iconVector" />
                    <img src={iconTicket} alt="iconTicket" />
                    <p>{genres}</p>

                </div>
                <div className="providers">
                    <div className="streamings">
                        <p>Streamings</p>

                        {streamings?.map((streaming) => (
                            <img src={`https://www.themoviedb.org/t/p/original${streaming.logo_path}`} alt={streaming.provider_name} />
                        ))}
                    </div>
                    <div className="rent">
                        <p>Rent</p>
                        {rents?.map((rent) => (
                            <img src={`https://www.themoviedb.org/t/p/original${rent.logo_path}`} alt={rents.provider_name} />
                        ))}
                    </div>

                </div>
            </div>
            <div className="subRight">
                <div className="buttons">
                    <button className="favorite">
                        <img src={iconRating} />
                    </button>
                    <button className="toWactch">
                        <img src={iconPlus2} />
                    </button>
                    <button className="watched">
                        <img src={iconEye} />
                    </button>

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
    color: rgba(255,255,255,0.6);

    .subLeft{
        width: 50%;
        background-color: #101216;
        max-width: 50%;
        display: flex;
        flex-direction: column;
        
        .content{
            font-size: 1.25vw;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            margin-left: 5vw;
            margin-top: 1vw;
            flex-wrap: wrap;
    
            img{
                width: 2.6vw;
                height: 2.6vw;
                margin-right: 0.4vw;
                margin-left: 0.4vw;
            }
            }

        .providers{
            margin-left: 5vw;
            margin-top: 2vw;
            font-size: 1.5vw;
    
                .streamings{
                    display: ${props => props.hasStreamings ? "flex" : "none"};
                    align-items: center;
                    flex-wrap: wrap;
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
            margin-left: 1.6vw;
            border-radius: 24px;
            margin-top: 1vw;
            margin-bottom: 1vw;
         
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
        background-color: #101216;

        .buttons{
            display: flex;
            align-items: center;
            justify-content: center;

            //252836
            button{
                width: 6vw;
                height: 4vw;
                border: none;
                cursor: pointer;
                margin-left: 2vw;
                background-color: rgba(37,40,54,0.32);
                border-radius: 24px;;

                img{
                    width: 2.5vw;
                }
            }

        }

    }
`
