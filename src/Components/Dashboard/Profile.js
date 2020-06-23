import React from 'react'

class Profile extends React.Component{
    constructor(props){
        super(props);
       this.state = {profileval: {name:"sachin",email:"sachin@abc.com",image:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/New_york_times_square-terabass.jpg/1200px-New_york_times_square-terabass.jpg",
    },
        edit:false};
            this.handleSubmit = this.handleSubmit.bind(this);
            this.changeEdit = this.changeEdit.bind(this);
    }
    changeEdit(event){
        this.setState({
            edit : !this.state.edit
        });

        this.log();
    }
    handleSubmit(event) {
        if(this._inputEmail.value !== '' && this._inputName.value !== ''){
            alert("Are You Sure?");
            this.setState({
                profileval: { name: this._inputName.value !== this.state.profileval.name ? this._inputName.value : this.state.profileval.name, email: this._inputEmail.value !== this.state.profileval.email ? this._inputEmail.value : this.state.profileval.email, image: this.state.profileval.image }
            });

        this.changeEdit();

        console.log(this.state);
        }
        
        event.preventDefault();
        console.log("ok");
        
    }
    log(){
        console.log(this.state.profileval);
        
    }
    render(){
        
        return (
        
        <div className="profile">
            <img src={this.state.profileval.image} className="Profile-pic" alt="logo" />
            <a onClick={this.changeEdit}><img src={this.state.profileval.image} className="Profile-pic" alt="logo" /></a>
            <br/><br/>
            {/* conditional */}
            { this.state.edit ===true ?  
            <div className="profile-details-edit">
            <form onSubmit={this.handleSubmit} id="myForm" className="form" >
                {/* onChange={this.handleChange} */}
                <h2>Name:</h2>
                <input type="text" ref={(a) => this._inputName = a}  defaultValue='' placeholder={this.state.profileval.name} />
                <br/><br/>
                <h2>Email:</h2>
                <input type="text" ref={(a) => this._inputEmail = a} defaultValue={this.state.profileval.email} /><br/><br/>
                <input type="submit" value="Submit"/>
            </form></div>:
            <div className="profile-details">
                
                <h2>Name:</h2><input type="text" defaultValue={this.state.profileval.name}></input>
                <br/><br/>
                <h2>Email:</h2><input type="text" defaultValue={this.state.profileval.email}></input><br/><br/>
                
            </div>}
            {/* conditional */}
            
        </div>);
    }
}
export default Profile; 