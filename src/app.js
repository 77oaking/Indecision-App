console.log('Its running');

class Indecisionapp extends React.Component {
    render(){
        const title='Indecision';
        const subtitle ='Put your life in the hands of a computer';
        const somethin='Its my life';
        const options=['Thins one','Thing two','Thing four'];
        return (
            <div>
                <Header title={title} subtitle={subtitle} something={somethin}/>
                <Action />
                <Options options={options} />
                <AddOptions />
            </div>
        );
    }
}

class Header extends React.Component {
    render(){
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
                <h3>{this.props.something}</h3>
            </div>
        );
    }
}
class Action extends React.Component{
    render(){
        return (
            <div>
                <button>What should I do?</button>
            </div>
        );
    }
}

class Options extends React.Component {
    render(){
        return (
            <div>
                {/*<p>Here will be some options.</p>  */}
                {this.props.options.lenth}
                <Option />
            </div>
        );
    }
}
class Option extends React.Component {
    render() { 
        return (
            <div>
                <p>Option Component Here!</p>
            </div>
        );
    }
}


class AddOptions extends React.Component {
    render(){
        return (
            <div>
                <button>Add Options</button>
            </div>
        );
    }
}

const jsx=(
    <div>
        <Header />
        <Action />
        <Options/>
        <AddOptions />
    </div>
);
ReactDOM.render(<Indecisionapp />,document.getElementById('appjs'));