import './Login.css'

function login() {
    return (
        <div className="login">
            <h2>Show me your space</h2>
            <input className="subtitle" placeholder="LOG IN" />
            <p>
                <input className="id" type="text" placeholder="Username" />
            </p>
            <input className="password" type="password" placeholder="****" />
            <p>
                <button className="click">click me!</button>
            </p>
        </div>


    )


}

export default login;