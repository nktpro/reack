let React = require('react');
let Logo = require('./Logo');
let Promise = require('bluebird');

require('./App.less');

// Notice how this is automatically inlined with Webpack
let foo = require('../assets/foo.json');
console.log(foo);

class App extends React.Component {
    async foo() {
        // When the debugger stops here, you should be able to validate that source-mapping works correctly
        // Try setting breakpoints on the console.log() statements below here too
        // Async-await is best thing since rice
        debugger;
        console.log('one');
        await Promise.delay(1000);
        console.log('two');
        await Promise.delay(1000);
        console.log('three');
    }

    componentDidMount() {
        this.foo();
    }

    render() {
        return <div className="app">
            {/*
            Build this for production and see how this file is managed
            Also notice that we use this same image file twice (here in the img tag, and another as the background
            of the Logo component). Webpack takes care of this and only output a single copy at the end.
            */}
            <img width="200" src={require('../assets/images/logo-big.png')}/>
            
            <Logo />

            Hello World
        </div>;
    }
}

module.exports = App;
