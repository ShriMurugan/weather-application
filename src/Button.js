import './app.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

function MyButton(props){
    return(
        <button className={props.className+ " mybutton"} onClick={props.onClick}><FontAwesomeIcon icon={faSearch} size="lg" className='me-2' /></button>
    )
}
export default MyButton;