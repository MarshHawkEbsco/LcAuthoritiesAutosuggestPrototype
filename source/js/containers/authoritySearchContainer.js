import React, { Component } from 'react'
import { connect } from 'react-redux'
import AuthoritySearch from '../components/authoritySearch'

const mapStateToProps = (state) => {
    return {
        authorities: state.authorities
    }
}

const AuthoritySearchContainer = connect(mapStateToProps)(AuthoritySearch)

export default AuthoritySearchContainer