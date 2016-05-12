import React,{Component} from 'react'

require('./header.css')

class HeaderListItem extends Component{
	render(){
		return(<div className="headerItem">
					<span>{this.props.item}</span>
			   </div>)
	}
}

class HeaderList extends Component{
	render(){

		let headerList=this.props.headerList.map(function (item,key) {
		return <HeaderListItem key={key} item={item} />
	 	})

		return(
			<div className="headerList">
				{headerList}
			</div>
			)
	}
}

class SearchBar extends Component{
	render(){
		return(
			<div className="searchBox">
			  
			  <input type="text" placeholder="Search"/>
			  <button className="searchButton">
			  	<span className="searchIcon"></span>
			  </button>
			</div>
		)
	}
}


export default class Header extends Component{
	render(){
		return(
			<div className="navbar">
				<div className="app-logo"></div>
				<div className="app-name">{this.props.data.appName}</div>
				<HeaderList headerList={this.props.data.headerList}></HeaderList>
				<SearchBar></SearchBar>
			</div>
			)
	}
}