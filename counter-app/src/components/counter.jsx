import React, { Component} from 'react';

class Counter extends Component{
    state = {
        value: this.props.value,
        tags : ["tag1", "tag2", "tag3"]
        // imageUrl: 'https:/picsum.photos/200'
    };

    style = {
      fontSize : 20,
      fontWeight: 'bold'
    };

    renderTags(){
        if (this.state.value === 0) return "There is no tags !"
        return <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>;
    };

    // constructor(){
    //   super();
    //   this.handleIncrement = this.handleIncrement.bind(this);
    // };

    handleIncrement = product => {
        console.log(product);
        this.setState({value: this.state.value + 1})
    };

    doHandleIncrement = () => {
        this.handleIncrement({id: 1});
    };

    render() {
        console.log("props", this.props)
        return (
        <div>
            {/*<img src={this.state.imageUrl} alt=''></img>*/}
            {/*{this.props.children}*/}
            <h4>Counter #{this.props.id}</h4>
            <span style={this.style} className={this.getBadgeClassess()}>{this.formatCount()}</span>
            <button
                onClick={() => this.handleIncrement({id:1})}
                className="btn btn-secondary btn-sm">Increment
            </button>

        </div>
        );

    }

    getBadgeClassess() {
        let classes = "badge m-2 badge-"
        classes += (this.state.value === 0) ? "warning" : "primary"
        return classes;
    }

    formatCount(){
        const { value } = this.state;
        return value === 0 ? "Zero" : value;
    }
}

export default Counter;