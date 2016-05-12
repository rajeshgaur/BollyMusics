import React,{Component} from 'react'

export default class CardLayout extends Component{
	render(){
		let imgClass={
			width:'100%',
			height:'430px',
			background:'url(../../../static/images/emma3.jpg) no-repeat',
			backgroundSize:'cover'
		}
		return(
			<div className="cardLayout">
				<div className="cardImg" style={imgClass}></div>
				<div className="cardContent">
					<div className="title">
						<span>{this.props.movieTitle}</span>
					</div>
					<div className="desc">
						<span>{this.props.description}</span>
					</div>
				</div>
			<div>
			)
	}
}