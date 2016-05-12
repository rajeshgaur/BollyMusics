import React ,{Componrt} from 'react'
import HeaderSlider from '../../components/headerSlider/headerSlider'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

function mapStateToProps(store) {
	debugger;
	return{
		data:store.header
	}
}


let HeaderContainer=connect(mapStateToProps)(HeaderSlider)

export default HeaderContainer