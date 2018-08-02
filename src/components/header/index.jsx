import React,{Component} from 'react'
import './header.css'
class Header extends Component {
    render() {
        return (
            <header>
                <div className="header">
                    <div className="logo icon fl">
                    </div>
                    <i className="searchIcon icon"></i>
                    <input type="text" className="search fl" placeholder="全场畅饮，部分低至99减50" />
                    <div className="login fl">登录</div>
                </div>
            </header>
        )
    }
}
export default Header