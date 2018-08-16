import React,{Component} from 'react'
import './secondsKill.css'
class SecondsKill extends Component {
    render() {
        return (
            <div className="secondsKill">
                <div className="title">
                    <div className="time">
                        <i className="icon clock"></i>
                        <span className="fl">掌上时间</span>
                        <div className="timer">
                            <span>00</span>
                            :
                            <span>00</span>
                            :
                            <span>00</span>
                        </div>
                    </div>
                    <div className="more fr">
                        <span>
                            更多秒杀
                        </span>   
                        <i className="icon fr more_icon"></i> 
                    </div>
                </div>
                <div className="products"></div>
            </div>
        )
    }
}
export default SecondsKill