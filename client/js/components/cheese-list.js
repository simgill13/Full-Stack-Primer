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
        return (

            <div className="cheese">
            <h1> this better work </h1>
             <ul>
             {this.props.cheeses.map(cheese => {
                <li> cheese </li>
             }) }
              </ul>
            </div>
        );
    }
}



const mapStateToProps = (state) => ({
 cheeses: state.cheeses
});



export default connect(mapStateToProps)(CheeseList);
