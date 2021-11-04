import React from "react"
import { Card } from "react-bootstrap";

const NewsDetail = (props) => {
    const item = props.location.state

    return (
        <>
            <div className="container mb-3">
                <Card>
                    <Card.Img variant="top" src={item.img} />
                    <Card.Body>
                        <Card.Title>{item.title}</Card.Title>
                        <Card.Text>
                            {item.description}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">{item.author}</small>
                    </Card.Footer>
                </Card>
            </div>
        </>
    )
}
export default NewsDetail