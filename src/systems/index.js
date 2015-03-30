import Render from './Render';
import Velocity from './Physics';
import UserInput from './UserInput';

var systems = {
	UserInput : UserInput,
    Velocity  : Velocity,
    Render    : Render
};

export default systems;
