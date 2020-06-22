import React from 'react'


class Profile extends React.Component{
    constructor(props){
        super(props);
        this.state = {profileval:{ 
            image:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/New_york_times_square-terabass.jpg/1200px-New_york_times_square-terabass.jpg",
            name:"sachin",
            email:"sachinhsf<sghfjh@abc.com"}}
    }
    render(){
        return (
        <div className="profile">
            <img src={this.state.profileval.image} className="Profile-pic" alt="logo" />
            <img src={this.state.profileval.image} className="Profile-pic" alt="logo" /><br/><br/>
            <div className="profile-details">
                <h2>Name:</h2><input value={this.state.profileval.name} onChange={this.handleChange}></input>
                <br/><br/>
                <h2>Email:</h2><input type="text" defaultValue={this.state.profileval.email}></input>
            </div>
        </div>
        );
    }
}
export default Profile; 