import {createStackNavigator, createAppContainer} from 'react-navigation';
import Home from './Components/home';


const Nav = createStackNavigator({
    home : {screen : Home}
    
})

export default createAppContainer(Nav);