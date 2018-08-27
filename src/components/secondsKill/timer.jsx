import React, { Component } from 'react'
class Timer extends Component {
    render() {
        let {hour,minute,second} = this.props
        return (
            <div className="timer">
                <span>{hour}</span>
                :
                <span>{minute}</span>
                :
                <span>{second}</span>
            </div>
        )
    }
}
export default Timer