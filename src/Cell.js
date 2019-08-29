export default class Cell extends Component {
    
    // we use the constructor to set the INITIAL STATE
  constructor(props) {
    super(props)
    this.state = {
      color: 0
    }
  }
 
  // our increment method makes use of the 'setState' method, which is what we use to alter state
  increment = () => {
    const newCount = this.state.count + 1
    this.setState({
      count: newCount
    })
  }
 
  render() {
    return (
      <div className={'cell'} onClick={this.increment}>
        {this.state.count}
      </div>
    )
  }
    
  }