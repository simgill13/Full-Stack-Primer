import React from 'react';
import {connect} from 'react-redux';





export class CheeseList extends React.Component {
    constructor(props) {
        super(props);
    }


componentDidMount() {
      // this.props.dispatch(fetchData());
    }


    render() {
        return (
            <div className="cheese">
            <h1> this better work </h1>
             <ul>

              </ul>
            </div>
        );
    }
}



const mapStateToProps = (state) => ({


});



export default connect(mapStateToProps)(CheeseList);
