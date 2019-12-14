/*
Class component that fetches data from the server you now have running - 
the data can be fetched from http://localhost:5000/api/players
Display the player data you receive from the API
Build a custom hook and use it in your app - this can be a localStorage hook, 
a fetch hook, a dark mode hook, or any other hook you would like
Write a "reasonable" amount of unit tests for your React components. 
What does "reasonable amount" mean? That is up to you to decide. Be ready to defend your choice to your TL
*/

import React from "react";
import axios from "axios";

class GetPlayers extends React.Component {
    constructor(props) {
    super(props)
     this.state = {
        player: []
    }
}

componentDidMount() {
    axios
    .get(`http://localhost:5000/api/players`)
    .then(res => {
        console.log(res.data)
        this.setState({
            player: res.data,
        })
    })
    .catch(error => {
        console.log("error:", error)
    })
}

componentWillUnmount() {
}

    render() {
        return (
            <div className="Players">
             {this.state.player.map((item, index) => {
                return (
                    <div key={index}>
                        <div className="Player">
                            <p>{item.name}</p>
                            <p>{item.country}</p>
                            <p>{item.searches}</p>
                        </div>
                    </div>
                    );
                   })}
        </div>
        )
    }
}

export default GetPlayers;