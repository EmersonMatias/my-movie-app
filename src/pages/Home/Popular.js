import axios from "axios"
import { useContext, useEffect, useState } from "react"
import styled from "styled-components"
import { MyContext } from "../../context/MyContext"
import iconFire from "../../img/iconFire.svg"
import iconArrowRight from "../../img/iconArrowRight.svg"
import iconArrowLeft from "../../img/iconArrowLeft.svg"

export default function Popular() {
    const { API_KEY } = useContext(MyContext)

    const [listPopular1, setListPopular1] = useState([]);
    const [listPopular2, setListPopular2] = useState([]);
    const [listPopular, setListPopular] = useState([])
    const [scrollCoordenates, setScrollCoordentes] = useState(0)

    useEffect(() => {
        
        axios.get(`https://api.themoviedb.org/3/movie/popular${API_KEY}&language=pt-BR&page=1`)
            .then((res) => (setListPopular1(listPopular1.concat(res.data.results))))
            .catch((error) => (console.log(error.data)))

        axios.get(`https://api.themoviedb.org/3/movie/popular${API_KEY}&language=pt-BR&page=2`)
            .then((res) => (setListPopular2(listPopular2.concat(res.data.results))))
            .catch((error) => (console.log(error.data)))
    }, [])

    useEffect(() => {
            setListPopular(listPopular1.concat(listPopular2))
    }, [listPopular1, listPopular2])

    function leftScroll() {
        if (scrollCoordenates < 0) {
            setScrollCoordentes(scrollCoordenates + 700)
        } else{
            setScrollCoordentes(0)
        }
    }

    function rightScroll() {
        if (scrollCoordenates > -9600) {
            setScrollCoordentes(scrollCoordenates - 700)
        } else{
            setScrollCoordentes(-9600)
        }
    }

    return (
        <PopularContainer scrollCoordenates={scrollCoordenates}>
            <h3 className="title">Popular <img className="iconFire"src={iconFire} /></h3>

            <div className="scrollScreenContainer">
                <div className="scrollScreen">
                    {listPopular.map((object) => (
                        <img src={`https://image.tmdb.org/t/p/original/${object.poster_path}`} />
                    ))}
                </div>
            </div>

            <img onClick={leftScroll} className="arrow left" src={iconArrowLeft}></img>
            <img onClick={rightScroll} className="arrow right" src={iconArrowRight}></img>
        </PopularContainer>
    )
}

const PopularContainer = styled.section`
    margin-left: 88px;
    margin-top: -150px;
    position: relative;

    .title{
        font-size: 40px;
        font-weight: bold;
        background: -webkit-linear-gradient(90deg, hsla(52, 82%, 52%, 1) 0%, hsla(1, 92%, 47%, 1) 100%);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        margin-bottom: 32px;
        display: flex;
        align-items: center;
    }

    .iconFire{
        margin-left: 16px;
    }
  
    .left{
        left: 16px;
        top: 150px;
    }

    .right{
        right: 16px;
        top: 150px;
    }

    .scrollScreen img:hover{
        cursor: pointer;
    }
   
    .title img{
        width: 40px;
    }

    .scrollScreenContainer{
        overflow-x: hidden;
    }

    .scrollScreen{
        display: flex;
        margin-left: ${props => props.scrollCoordenates}px;
        transition: all 0.6s ease-in-out;
    }

    .scrollScreen img{
        width: 250px;
        margin-right: 32px;
        border-radius: 8px;
    }

    .arrow{
        width: 50px;
        height: 200px;
        background-color: rgb(0,0,0,0.5);
        position: absolute;
        opacity: 0;
    }

    &&:hover .arrow{
        opacity: 1;
        transition: all 0.3s ease-in-out;
    }
`