
import './App.css';
import React from 'react';


class App extends React.Component{

  constructor(props){
    super(props);
    this.state={
      locations:[
        {name:"bangalore",votes:0},
        {name:"bellary",votes:0},
        {name:"bellur",votes:0},
        {name:"mysore",votes:0},

      ],
    };
  }
  vote(i){
    let newlocations=[...this.state.locations];
    newlocations[i].votes++;
    this.setState({locations:newlocations})
  }

    render() {
      return(
        <>
        <h1>DISPLAY THE CITIES TO BE VOTED</h1>
        <div className="locations">
        {this.state.locations.map((loc,i) =>(
          <div key={i} className="location">
            <div className="votecount" >{loc.votes}</div>
            <div className="locationname">{loc.name}</div>
            <button onClick={this.vote.bind(this ,i)}>Click </button>
            </div>

    ))}  
   
      </div>
      </>
      );
        }
      }
        

      
export default App;
