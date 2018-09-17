var React = require('react')
var ReactDOM = require('react-dom')
require('./index.css')
var Home = require('./component/Home')
require('dotenv').config()




class App extends React.Component {
  render() {
    return (
        <div>
          <Home />
        </div>
    )
  }
}


ReactDOM.render(
  <App />,
  document.getElementById("app")
)
