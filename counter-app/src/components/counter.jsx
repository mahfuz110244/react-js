import React, { Component} from 'react';

class Counter extends Component{
    state = {
        count: 0,
        tags : ["tag1", "tag2", "tag3"]
        // imageUrl: 'https:/picsum.photos/200'
    };

    style = {
      fontSize : 20,
      fontWeight: 'bold'
    };
    render() {
        return (
        <div>
            {/*<img src={this.state.imageUrl} alt=''></img>*/}
            <span style={this.style} className={this.getBadgeClassess()}>{this.formatCount()}</span>
            <button className="btn btn-secondary btn-sm">Increment</button>
            <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
        </div>
        );

    }

    getBadgeClassess() {
        let classes = "badge m-2 badge-"
        classes += (this.state.count === 0) ? "warning" : "primary"
        return classes;
    }

    formatCount(){
        const { count } = this.state;
        return count === 0 ? "Zero" : count;
    }
}

export default Counter;