import React from "react";
import axios from "axios";

class Followers extends React.Component {

    state = {
        followers: []
    }

    componentDidMount() {
        axios
            .get("https://api.github.com/users/nasraaden/followers")
            .then(res => {
                console.log(res)
                this.setState({
                    followers: res.data
                })
            })
            .catch(err => console.log(err))
    }

    render(){
        return(
            <div>
                <h2>My Followers Github Cards</h2>
                {this.state.followers.map(follower => (
                    <div key={follower.id}>
                        <img src={follower.avatar_url}/>
                        <h4>{follower.login}</h4>
                    </div>
                ))}
            </div>
        )
    }
}

export default Followers;