import React, { Component } from "react";
import PropTypes from 'prop-types';

class ButtonClass extends Component {

    constructor(props) {
        super(props)

        // var locali
        const t = 0

        // var globali
        this.str = null

        // stati
        this.state = {
            frutta: '',
            eta: 0,
            car: ''
        }

        console.log('constructor')
    }

    componentDidMount() {
        console.log('componentDidMount')
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('componentDidUpdate')

        console.log('prevProps', prevProps)
        console.log('prevState', prevState)
        console.log('props', this.props)
        console.log('state', this.state)
    }

    componentDidCatch(e){
        console.log('errore', e)
    }

    callback=(e)=> {

        this.str = 'sei priprio un pezzo di stringa'

        this.setState(
            {
                eta:40
            }
        )

        this.props.callbackButton(e)

        this.calcMedia()
    }

    calcMedia=()=>()=> {
        console.log('str', this.str)
    }


    componentWillUnmount() {
        console.log('componentWillUnmount')
    }

    render() {
        console.log('render')
        return (

            <div
                className={this.props.cssStyle}
                onClick={this.callback}
            >
                
                <span>
                    {
                        this.props.label
                    }
                </span>
                <span>
                    {
                        this.state.eta
                    }
                </span>
            </div>

        )
    }

}


ButtonClass.defaultProps = {
    label: 'click',
    cssStyle: 'defaultButton'
}

ButtonClass.propTypes = {
    label: PropTypes.string,
    cssStyle: PropTypes.string,
    callbackButton: PropTypes.func.isRequired
};

export default ButtonClass