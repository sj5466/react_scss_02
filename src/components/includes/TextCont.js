import React from 'react'
const textInfor=[
    {text:"풍신풍신 우유 도넛"},
    {text:"담백 아삭 베지랩"},
    {text:"코코넛 라즈베리 패스트리"},
    {text:"수박 스무디"},
    {text:"초코 청크 파운드"},
    {text:"벌꿀 카스테라"},
    {text:"병아리콩 베지볼샐러드"},
    {text:"용감한 쿠키 카라멜 마스카포네 생크림 케이크"}
]
function Info({text}){
    return(
        <>
            <div className="text">
                <div className="img_box">
                    <div className="img"><a href="/"><p>{text}</p></a></div>
                </div>
            </div>
        </>
    )
}
function TextCont() {
  return (
    <section id="textType" className="text__wrap section nexon">
        <h2>뚜레쥬르 추천 상품</h2>
        <p>선별된 좋은 재료를 사용하여
            더욱 건강한 제품을 제공합니다.</p>
        <div className="text__inner container">
            {textInfor.map((txt)=>(
                <Info
                text={txt.text}
                key={txt.text}
                />
            ))}
        </div>
    </section>
  )
}

export default TextCont