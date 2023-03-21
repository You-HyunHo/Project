import './Signup.css';

function Signup() {
    return(
        <div className="signup">
            <h2 className="title">Show me your space</h2>
            <input className="subtitle" placeholder="SIGN UP" />
        <p>이메일 입력</p>
        <input className="email" type="text" placeholder="내용을 입력해주세요" />
        <p>닉네임 입력</p>
        <input className="name" type="text" placeholder="내용을 입력해주세요" />
        <p>비밀번호 입력</p>
        <input className="password" type="text" placeholder="내용을 입력해주세요" />
        <p>비밀번호 확인</p>
        <input className="passwords" type="text" placeholder="내용을 입력해주세요" />
        <p>
            <button className="click">click me!</button>
        </p>
        
        </div>
    )
}

export default Signup;