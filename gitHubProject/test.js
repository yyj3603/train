class Clock extends React.Component{
    constructor(props) {
        super(props);
        this.state={date: new Date()};
        setInterval(() => {
            this.setState({date: new Date()});
        }, 1000);
    }
    render (){
        return <div>
        <h1>hello,bb</h1>
        <h2>it is {this.state.date.toLocaleTimeString()}</h2>
        </div>
    }
}
class App extends React.Component{
    render(){
        return <Clock/>;
    }
}
ReactDOM.render(
    <App/>,
    document.getElementById('container')
);