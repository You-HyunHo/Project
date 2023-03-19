import './Upload.css'

function Upload() {
    return (
        <div>
            <h1>Show me your space</h1>
            <button>등록</button>
            <hr></hr>
            <input className="image" type="file"/>
            <div className="space">공간</div>
            <div className="comment">사진을 설명해주세요</div>
        </div>
    )
}

export default Upload;