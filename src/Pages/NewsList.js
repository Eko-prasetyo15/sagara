import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getNews } from "../Redux/Action"
import { Link } from "react-router-dom";
import { Carousel } from "react-bootstrap";


const NewsList = () => {
    const dispatch = useDispatch()
    const stateNews = useSelector((state) => state.Country.datasNews)
    useEffect(() => {
        dispatch(getNews())
    }, [dispatch])

    const ListNews = stateNews.map((news, idx) => {
        return (
            <div class="row mb-3" key={idx}>
                <div class="col-sm-4 grid-margin">
                    <div class="position-relative">
                        <div class="rotate-img">
                            <img src={news.urlToImage} alt="thumb" class="img-fluid" />
                        </div>
                        <div class="badge-positioned">
                            <span class="badge badge-danger font-weight-bold">{news.tag}</span>
                        </div>
                    </div>
                </div>
                <div class="col-sm-8  grid-margin">
                    <Link to={{
                        pathname: `/news-detail`,
                        state: { img: news.urlToImage, title: news.title, description: news.description, author: news.author }
                    }}
                    style={{color:'black', textDecoration:'none', cursor:'pointer'}}>
                        <h3 class="mb-2 font-weight-600">
                            {news.title}
                        </h3>
                    </Link>
                    <div class="fs-13 mb-2">
                        {news.publishedAt.slice(0, 10)}
                    </div>
                    <p class="mb-0">
                        {news.description}
                    </p>
                </div>
            </div>
        )
    })
    return (
        <>
            <div className="container">
                <h1 className="mb-3">News List</h1>
                <Carousel className="mb-3" variant="light" fade>
                    {stateNews.map((item, idx) => {
                        return (
                            <Carousel.Item key={idx}>
                                <img
                                    className="d-block w-100"
                                    src={item.urlToImage}
                                    alt=""
                                />
                                <Carousel.Caption>
                                    <h3>{item.author}</h3>
                                    <p>{item.title}</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        )
                    })}
                </Carousel>
                {ListNews}
            </div>
        </>
    )
}
export default NewsList