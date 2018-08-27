import React,{Component} from 'react'
import Timer from './timer'
import './secondsKill.css'
class Title extends Component {
    render() {
        return (
                <div className="title">
                    <div className="time">
                        <i className="icon clock"></i>
                        <span className="fl">掌上时间</span>
                        <Timer hour='02' minute='30' second='52' />
                    </div>
                    <div className="more fr">
                        <span>
                            更多秒杀
                        </span>   
                        <i className="icon fr more_icon"></i> 
                    </div>
                </div>
        )
    }
}
export default Title 