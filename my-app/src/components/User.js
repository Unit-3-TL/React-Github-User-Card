import React from "react";
import axios from "axios"

class User extends React.Component {
    state = {}
    
      componentDidMount() {
        axios
          .get("https://api.github.com/users/nasraaden")
          .then(res => {
              console.log(res)
            this.setState({
                img: res.data.avatar_url,
                name: res.data.name,
                bio: res.data.bio,
                location: res.data.location
            })
          })
          .catch(err => console.log(err))
      }
    render(){
        return(
            <div>
                <h2>My Github User Card</h2>
                <img src={this.state.img} />
                <h3>{this.state.name}</h3>
                <p>{this.state.bio}</p>
                <p>{this.state.location}</p>
            </div>
        )
    }
}

export default User;