import React, {Component} from 'react'
import { Link } from 'react-router-dom'

class Landing extends Component {
    constructor(){
        super()
        this.state = {
            users: [{name: 'Jennis', style: {backgroundColor :"red"}},
            {name: 'Tag', style: {backgroundColor :"blue"}},
            {name: 'Mona', style: {backgroundColor :"green"}},
            {name: 'Parker', style: {backgroundColor :"pink"}}
            ]
        }
    }

    render() {
        return (
        <div>
            {this.state.users.map(u =>  <Link to="/catalog"><div className="user" style={u.style}>{u.name}</div></Link>)}
        </div>)
    }
}
export default Landing