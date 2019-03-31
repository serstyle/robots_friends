import React, { Component } from 'react'

class ErrorBoundary extends Component {
  constructor (props) {
    super(props)
    this.state = { hasError: false }
  }

  componentDidCatch (error, info) {
    this.setState({ hasError: true })
  }

  somethingWentWrong = (hasError, children) =>{
    if (hasError) {
      return <h1>Something went wrong.</h1>
    }
    return children
  }
  

  render () {
   return this.somethingWentWrong(this.state.hasError, this.props.children)
}
}
export default ErrorBoundary