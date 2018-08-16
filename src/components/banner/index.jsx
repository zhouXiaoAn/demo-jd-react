import React, { Component } from 'react'
import Swiper from 'swiper'
import '../../../node_modules/swiper/dist/css/swiper.css'

import { get } from '../utils'
import './banner.css'
class Banner extends Component {
    state = {
        imgUrls: [],
        isSuccess: false
    }
    componentDidMount() {
        let _this = this
        get(this.props.source, null, "",(data)=>{
            console.log(data)
            // data = JSON.parse(data)
            if(data.status === 1) {
                _this.setState({imgUrls:data.data})
                new Swiper(".swiper-container",{
                    autoplay: true,
                    loop: true,
                    speed: 300,
                    pagination: {
                        el: ".swiper-pagination"
                    },
                })
                // console.log(this)
                // if(_this.updater.isMounted()) {
                //     console.log('组件渲染到页面上了')
                // }
            }
        })

    }
    renderImgs = () => {
        return (
            <ul className="container swiper-wrapper">
                {
                    this.state.imgUrls.map((url, index) => {
                        return (
                            <li key={index} className="swiper-slide">
                                <img src={url} alt="" />
                            </li>
                        )
                    })
                }
            </ul>
        )
    }
    render() {
        return (
            <div className="swiper-container" style={ {width:'100%'} }>
                    {
                        this.renderImgs()  
                    }
                
               
               <div className="swiper-pagination"></div>
            </div>
        )
    }
}
const jsonpcallback = (info) => {
    console.log(info)
}
export default Banner