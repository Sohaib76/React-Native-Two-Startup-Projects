import React, {Component} from 'react';
import { Nav } from './nav';
import { createAppContainer } from "react-navigation";


const NavAA = createAppContainer(Nav);

export default class App extends Component{
    render(){
        return(
            <NavAA />
        )
            
    
    }
}

