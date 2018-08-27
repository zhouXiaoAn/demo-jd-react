import React,{Component} from 'react'
import Title from './title'
import Product from './Product'
import More from '../moreProduct'
class SecondsKill extends Component {

    render() {
        return (
            <div className="secondsKill">
                <Title />
                <Product source={this.props.source}/>
                <More source="http://localhost:3000/data/more" />
            </div>
        )
    }
}
export default SecondsKill