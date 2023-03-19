import './Main.css';

function Main() {
    return (
        <div>
            <h1>Show me your space</h1>
            <div>
                <button className="mainbtn">글쓰기</button>
                <button className="mainbtn">회원가입</button>
                <button className="mainbtn">로그인</button>
            </div>

            <hr className="line"></hr>
            <div>
                <button className="subbtn">전체</button>
                <button className="subbtn">실내</button>
                <button className="subbtn">실외</button>
            </div>
            <nav>
                <div className="sqare">사각형1</div>
                <div className="sqare">사각형2</div>
                <div className="sqare">사각형3</div>
                <div className="sqare">사각형4</div>

            </nav>
            <div>
                <div className="label">내용===============================</div>
                <div className="label">내용===============================</div>
                <div className="label">내용===============================</div>
                <div className="label">내용===============================</div>
            </div>

        </div>




    );
}

export default Main;