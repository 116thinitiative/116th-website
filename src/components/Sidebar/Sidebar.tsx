import './Sidebar.css'
import donate from '../../assets/images/donate.png'
import request from '../../assets/images/request.png'

function Sidebar() {
    return (
        <>
        <div>
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSc8Cs8eqjovbJHfVpDcl0RySdQ107vwaNiYMNR64IyZ1BY3IQ/viewform" target="_blank">
            <img className="request" src={request}></img>
        </a>
        </div>
        <div>
        <a href="https://account.venmo.com/u/the116thinitiative" target="_blank">
        <img className="donate" src={donate}></img>
        </a>
        </div>
        </>
    );
}

export default Sidebar;