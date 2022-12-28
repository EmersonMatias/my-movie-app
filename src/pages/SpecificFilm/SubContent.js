import iconCalendar from "../../img/iconCalendarBlank.svg"
import iconVector from "../../img/iconVector.svg"
import iconClock from "../../img/iconClock.svg"
import iconTicket from "../../img/iconTicket.svg"
import iconHBO from "../../img/iconHBO.svg"
import iconAmazon from "../../img/iconAmazon.svg"
import iconDisney from "../../img/iconDisney.svg"
import iconNetflix from "../../img/iconNetflix.svg"
import iconYoutube from "../../img/iconYoutube.svg"
import styled from "styled-components"


export default function SubContent({runtime,year,genres}) {
    return (

        <Container>
            <div className="subLeft">
                <div className="content">
                    <img src={iconCalendar} /> 
                    <p>{year}</p>
                    <img src={iconVector} />
                    <img src={iconClock} />
                    <p>{runtime}</p>
                    <img src={iconVector} />
                    <img src={iconTicket} />
                    <p>{genres}</p>

                </div>
                <div className="streamings">
                    <img src={iconAmazon} />
                    <img src={iconAmazon} />
                    <img src={iconAmazon} />
                    <img src={iconAmazon} />

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

            img{
                margin-right: 8px;
                margin-left: 8px;
            }
            }

        .streamings{
            margin-left: 5vw;
            margin-top: 40px;


            img{
            width: 5vw;
            height: 5vw;
            margin-left: 32px;
           
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
