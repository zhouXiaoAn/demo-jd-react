import React,{Component} from 'react'
import {get} from '../utils'
class Banner extends Component {
    componentDidMount() {
        get(this.props.source,null,()=>{
            console.log("11111111111111")
        })
    }
    render() {
        return (
            <div>轮播图</div>
        )
    }
}
export default Banner