import React from 'react';
import {connect} from 'react-redux';

import {
    fetchCheeses  
} from '../actions/cheese';



export class CheeseList extends React.Component {
    constructor(props) {
        super(props);
    }


componentDidMount() {
      this.props.dispatch(fetchCheeses());
    }


    render() {
        console.log(this.props.cheeses);
        const cheeses = this.props.cheeses;
        return (

            <div className="cheese">
            <h1> The  Cheese List </h1>

             
             {cheeses.map(function(cheese, index) {
               return <li key={index}> {cheese} </li>
             })}
             
            </div>
        );
    }
}



const mapStateToProps = (state) => ({
 cheeses: state.cheeses
});



export default connect(mapStateToProps)(CheeseList);
