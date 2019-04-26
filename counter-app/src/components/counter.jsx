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

    renderTags(){
        if (this.state.count === 0) return "There is no tags !"
        return <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>;
    };

    constructor(){
      super();
      this.handleIncrement = this.handleIncrement.bind(this);
    };

    handleIncrement(){
      console.log("Increment Clicked", this);
    };

    render() {
        return (
        <div>
            <img src={this.state.imageUrl} alt=''></img>
            <span style={this.style} className={this.getBadgeClassess()}>{this.formatCount()}</span>
            <button
                onClick={ this.handleIncrement}
                className="btn btn-secondary btn-sm">Increment
            </button>

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