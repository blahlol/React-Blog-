import {Link} from 'react-router-dom';
const NotFound = () => {
    return (
        <div className="not-found"> 
            <h2>Sorry</h2>
            <p>The page that you are trying to go to does not exist.</p>
            <Link to="/">Get back to the homepage.</Link>
        </div>
     );
}
 
export default NotFound;