import React from "react"
import { Result, Button } from 'antd';

const Error = () => {
    return (
        <div style={{ padding: '20px', display: 'flex', justifyContent: 'center' }}>
            <Result
            status="404"
            title="Error :)"
            subTitle="That page does not exist, looser."
            extra={
                <Button type="primary" href="/">
                Back Home
                </Button>
            }
            />
        </div>
    )
}

export { Error };