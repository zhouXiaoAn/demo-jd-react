import React,{Component} from 'react'
import {get} from '../utils'
import './asloLike.css'
class AsloLike extends Component {
    state = {
        like: []
    }
    componentDidMount() {
        get(this.props.source,'','',(data)=>{
            if(data.status === 1) {
                this.setState({like:data.data})
            }
        })
    }
    renderList = () => {
        return this.state.like.map((item,index)=>{
            let {icon,desc,more,price,url} = item
            return (
                <li key={index} style={ {width:'50%'} } className="fl">
                    <a href={more}>
                        <img src={icon} alt=""/>
                        <p className="text">{desc}</p>
                        <div className="like_price">
                            <span>￥{price}</span>
                            <div className="fr like">看相似</div>
                        </div>
                    </a>
                </li>
            )
        })
    }
    render() {
        return (
            <div className="aslolike">
                <p>猜你喜欢</p>
                <ul>
                    {
                        this.renderList()
                    }
                </ul>
            </div>
        )
    }
}
export default AsloLike