import React, {Component} from 'react';
import CardList from '../components/CardList';
import Searchbox from '../components/Searchbox';
//import { robot } from './robot';
import Scroll from '../components/Scroll';
import './App.css';




// class  App extends Component  {
//     constructor(){
//         super()
//         this.state = {
//             robot: robot,
//             searchfield: ''
//         }
//     }

    // onSearchChange= (event) => {        
    //     this.setState({searchfield: event.target.value})
    //     const filteredRobot = this.state.robot.filter(robot =>{
    //         return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    //         });
        
    //     }
        
    

    // render() {
    //     return (
    //         <div className="tc">
    //             <h1>RoboFriends</h1>
    //             <Searchbox searchChange={this.onSearchChange}/>
    //             <CardList robot={this.state.robot} />
    //         </div>
            
    //     );
    //     }
    

    class App extends Component  {
        constructor(){
            super()
            this.state = {
                robot: [],
                searchfield: ''
            }
            
        }
        componentDidMount() {
            fetch('https://jsonplaceholder.typicode.com/users')
            .then(response=> response.json())
            .then(users=> this.setState({ robot: users}));

  
        }
        

        onSearchChange =(event) => {
           this.setState({searchfield: event.target.value})

           
        }
        render() {
            const { robot, searchfield } = this.state;
            const filteredRobot = robot.filter(robot => {
                return robot.name.toLowerCase().includes(searchfield)
            })
            return !robot.length ? 
                 <h1 className="tc">Loading</h1>:
                (
                    <div className="tc">
                        <h1 className="f1">Robofriends</h1>
                        <Searchbox searchChange={this.onSearchChange} />
                        <Scroll>
                            <CardList robot={filteredRobot} />
                        </Scroll>                    
                    </div>
            );
    }
}

        
        
    
        
        
export default App;
