import React, { Component} from 'react';

class Counter extends Component{

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("prevPops", prevProps);
        console.log("prevState", prevState);
        if (prevProps.counter.value !== this.props.counter.value){
        //    Ajax call and get data from the server
        }
    }

    componentWillUnmount() {
        console.log("Counter - Unmount");
    }

    // state = {
    //     value: this.props.counter.value,
    //     tags : ["tag1", "tag2", "tag3"]
    //     // imageUrl: 'https:/picsum.photos/200'
    // };

    style = {
      fontSize : 20,
      fontWeight: 'bold'
    };

    // renderTags(){
    //     if (this.state.value === 0) return "There is no tags !"
    //     return <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>;
    // };

    // constructor(){
    //   super();
    //   this.handleIncrement = this.handleIncrement.bind(this);
    // };


    // handleIncrement = product => {
    //     console.log(product);
    //     this.setState({value: this.state.value + 1})
    // };

    // doHandleIncrement = () => {
    //     this.handleIncrement({id: 1});
    // };

    render() {
        console.log("Counter - Rendered")
        console.log("props", this.props)
        return (
        <div>
            {/*<img src={this.state.imageUrl} alt=''></img>*/}
            {/*{this.props.children}*/}
            <h4>Counter #{this.props.counter.id}</h4>
            <span style={this.style} className={this.getBadgeClassess()}>{this.formatCount()}</span>
            <button
                onClick={() => this.props.onIncrement(this.props.counter)}
                className="btn btn-secondary btn-sm">Increment
            </button>

            <button
                onClick={() => this.props.onDelete(this.props.counter.id)}
                className="btn btn-danger btn-sm m-2">Delete
            </button>

        </div>
        );

    }

    getBadgeClassess() {
        let classes = "badge m-2 badge-"
        classes += (this.props.counter.value === 0) ? "warning" : "primary"
        return classes;
    }

    formatCount(){
        const { value } = this.props.counter;
        return value === 0 ? "Zero" : value;
    }
}

export default Counter;