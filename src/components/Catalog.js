import React, {Component} from 'react'

class Catalog extends Component {
    
    render() {
        let moviesCatalog = this.props.moviesCatalog
        console.log(moviesCatalog)
        return (
        <div>
            {moviesCatalog.map(m => <div className="movie"><img src={m.img}></img></div>)}
        </div>)
    }
}
export default Catalog