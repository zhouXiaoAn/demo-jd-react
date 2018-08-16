import React,{Component} from 'react'
import './nav.css'
import {get} from '../utils'
class Nav extends Component {
    state = {
        navData: []
    }
    componentDidMount() {
        get(this.props.source,null,'',(data)=>{
            if(data.status === 1) {
                this.setState({navData:data.data})
            }
        })
    }
    render() {
        return (
            <ul className="navWrap">
                {
                    this.state.navData.map((item,index)=>{
                        return (
                            <li key={index} className="item">
                                <a href={item.url}>
                                    <img src={item.icon} alt="" />
                                    <p>{item.title}</p>
                                </a>
                            </li>
                        )
                    })
                }
            </ul>
        )
    }
}
export default Nav