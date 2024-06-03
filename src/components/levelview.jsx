import {Card} from "antd"

function LevelView(props) {

    const {currency} = props

    return (
        <div>
            <Card
                title={
                    <span>{currency.size}</span>
                }
                extra={<a href="#">More</a>}
                style={{
                    width: 300,
                }}
            >
                <p>{currency.body}</p>
                <p></p>
            </Card>
        </div>
    )
}

export default LevelView