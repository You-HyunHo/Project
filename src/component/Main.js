import './Main.css';

function Main() {
    return (
        <div>
            <h1>Show me your space</h1>
            <div className="btns">
                <button className="mainbtn">글쓰기</button>
                <button className="mainbtn">회원가입</button>
                <button className="mainbtn">로그인</button>
            </div>

            <hr className="line"></hr>
            <nav className="sqares">
                <div className="sqare">사각형1</div>
                <div className="sqare">사각형2</div>
                <div className="sqare">사각형3</div>
                <div className="sqare">사각형4</div>

            </nav>

        </div>




    );
}

export default Main;