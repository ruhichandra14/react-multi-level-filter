import React, { Component } from 'react';
import ListingComponent from "../components/listing_comp";

import { connect } from "react-redux";

// api - https://api.myjson.com/bins/cb4wi

class ListingContainer extends Component{
    constructor(props){
        super(props);
        this.state = {

        };
    }

    render(){
        return(
            <ListingComponent {...this.props}/>
        )
    }
}

const mapStateToProps = (state) => ({TabType : state.TabType})

export default connect(mapStateToProps)(ListingContainer);

