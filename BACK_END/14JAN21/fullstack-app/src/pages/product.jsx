import React, { useRef, useState, useEffect } from 'react'

import Axios from 'axios'

import {
    Card,
    Button,
    Modal,
    Image
} from 'react-bootstrap'

export default function Product(props) {
    console.log(props)
    let renderCount = useRef(1)
    console.log(`Product page rendered ${renderCount.current} times`)
    renderCount.current = renderCount.current + 1
    let [ data, setData ] = useState([])
    let [ detail, setDetail] = useState(false)
    let [ selectedProd, setSelectedProd ] = useState({})
    let [ qty, setQty ] = useState(1)

    useEffect(() => {
        Axios.get("http://localhost:2000/product/getProducts")
            .then((res) => {
                console.log(res.data)
                setData(res.data)
            })
            .catch((err) => console.log(err))
    },[])

    function selectProduct(index) {
        setSelectedProd(data[index])
        setDetail(true)
    }

    function minus() {
        if (qty === 1) return
        setQty(qty - 1)
    }

    function plus() {
        if (qty === selectedProd.stock) return
        setQty(qty + 1)
    }

    function addToCart() {

    }

    console.log(data)
    console.log(selectedProd)
    return (
        <div style={{ margin: "60px 20px" }}>
            <h1>Products</h1>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
                {data.map((item, index) => {
                    return (
                        <Card key={index} style={{ width: '18rem', marginBottom: '20px', display: 'flex', flexDirection: 'column' }}>
                            <Card.Img variant="top" src={item.image} style={{ height: 250 }} />
                            <Card.Body style={styles.cardBody}>
                                <Card.Title style={{}}>{item.name}</Card.Title>
                                <div style={{ display: 'flex', flexDirection: 'column' }}>
                                    <div>
                                        IDR {item.price.toLocaleString()}
                                    </div>
                                    <div>
                                        Stock: {item.stock}
                                    </div>
                                </div>

                                <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                                    <Button style={{ width: '80px' }} variant="warning" >
                                        <i className="far fa-heart"></i>
                                    </Button>
                                    <Button variant="primary" onClick={() => selectProduct(index)} >Buy Now</Button>
                                </div>
                            </Card.Body>
                        </Card>
                    )
                })}
            </div>
            <Modal centered show={detail} onHide={() => setDetail(false)} size="lg" style={{}}>
                <Modal.Header closeButton>
                    <Modal.Title>{selectedProd ? selectedProd.name : ''}</Modal.Title>
                </Modal.Header>
                <Modal.Body style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <div>
                        <Image src={selectedProd ? selectedProd.image : ''} style={{ height: 270, width: 350 }} />
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', width: 400 }}>
                        <strong>IDR {selectedProd ? selectedProd.price : ''}</strong>
                        <strong>Stock: {selectedProd ? selectedProd.stock : ''}</strong>
                        <strong>Description: </strong>
                        <p>{selectedProd ? selectedProd.description : ''}</p>
                        <div style={{ display: 'flex', width: 120, justifyContent: 'space-between' }}>
                            <Button onClick={() => minus()}>-</Button>
                            <h3>{qty}</h3>
                            <Button onClick={() => plus()}>+</Button>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setDetail(false)}>
                        Close
                        </Button>
                    <Button variant="primary" onClick={addToCart}>
                        Add To Cart
                        </Button>
                </Modal.Footer>
            </Modal>
        </div>

    );
}

const styles = {
    cardBody: {
        // backgroundColor: 'lightgreen',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
    }
}
