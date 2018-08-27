import React,{Component} from 'react'
import {get} from '../utils'
import './product.css'
class Product extends Component {
    constructor(props) {
        super(props)
        this.state = {
            productList: []
        }
    }
    componentDidMount() {
        console.log(this.props.source)
        get(this.props.source,null,'',(data)=>{
            if(data.status === 1) {
                this.setState({productList:data.data})
            }
        })
    }
    render() {
        return (
            <div style={ {overflow:'hidden'} }>
                {
                    this.state.productList.map((item,index)=>{
                        let {icon,price,sprice,url} = item
                        return (
                            <a key={index} className="fl product_item" href={url}>
                                <img src={icon} alt=""/>
                                <p className="sprice">{sprice}</p>
                                <p className="price">{price}</p>
                            </a>
                        )
                    })
                }
            </div>
        )
    }
}
export default Product