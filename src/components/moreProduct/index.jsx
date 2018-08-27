import React, {Component} from 'react'
import {get} from '../utils'
import Swiper from 'swiper'
import '../../lib/swiper.min.css'
import './index.css'
class More extends Component {
    state = {
        top: [],
        middle: [],
        bottom: []
    }
    componentDidMount() {
        get(this.props.source,'','',(data)=>{
            console.log(data)
            if(data.status == 1) {
                this.setState({
                    top:data.data.slice(0,3),
                    middle: data.data.slice(3,5),
                    bottom: data.data.slice(5,7)
                })
                new Swiper('.swiper-container',{
                    autoplay: true,
                    loop: true,
                    speed:1000
                })
            }
        })
    }
    topRender = (imgs,loop) => {
        return imgs.map((item,index)=>{
            return (
                <li className={loop?"link_more swiper-slide":"link_more fl"} key={index}>
                    <a href={item.url}>
                        <img src={item.icon} alt=""/>
                    </a>
                </li>
            )
        })
    }
    render() {
        let {top,middle,bottom} = this.state
        return (
            <div className="more_product">
                <ul className="top">
                    {
                        this.topRender(top)
                    }
                </ul>
                <ul className="middle">
                    {
                        this.topRender(middle)
                    }
                </ul>
                <div className="bottom">
                    <div className="swiper-container">
                        <ul className="swiper-wrapper">
                            {
                                this.topRender(bottom,true)
                            }
                        </ul>
                    </div>
                    
                </div>
                
            </div>
        )
    }
}
export default More