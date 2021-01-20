import React, {useRef} from 'react'
import { Link } from 'react-router-dom'

import {
    Button
} from 'react-bootstrap'

function Home(props) {
    console.log(props)
    let renderCount = useRef(1)
    console.log(`Home rendered ${renderCount.current} times`)
    renderCount.current = renderCount.current + 1
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <h1>This is Home</h1>
            <Button variant="primary" as={Link} to='/product'>Go to Product Page</Button>
        </div>
    )
}

export default Home

