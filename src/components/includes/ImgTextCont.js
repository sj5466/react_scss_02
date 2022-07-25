import React from 'react'
const imgTextInfor=[
    {
        title:"할인 혜택",
        text:"이달의 할인 혜택",
        desc1:"뚜레쥬르만의 다양한 할인 혜택을 받아 보세요.",
        desc2:"세포들아 여름을 부탁해! 올 여름은 크림 도넛으로!",
        desc3:"요기요로 주문하면 뚜레쥬르 4천원할인",
        desc4:"지금 배달의 민족을 주문하면 4천원 할인"
    }
]
function Info({title,text,desc1,desc2,desc3,desc4}){
    return(
        <>
        <h2 className="ir_so">{title}</h2>
            <div className="imgText__inner container">
                <div className="txt">
                    <h3 className="title">{text}</h3>
                    <p className="desc">
                        {desc1}
                    </p>
                </div><br/>
                <div className="img bg1"><a href="/"><span className="ir_so">{desc2}</span></a></div>
                <div className="img bg2"><a href="/"><span className="ir_so">{desc3}</span></a></div>
                <div className="img bg3"><a href="/"><span className="ir_so">{desc4}</span></a></div>
            </div>
        </>
    )
}
function imgTextCont() {
  return (
    <section id="imgTextType" className="imgText__wrap section nexon">
      {imgTextInfor.map((txt)=>(
        <Info 
        title={txt.title}
        text={txt.text}
        desc1={txt.desc1}
        desc2={txt.desc2}
        desc3={txt.desc3}
        desc4={txt.desc4}
        key={txt.title}
        />
      ))}
  </section>
  )
}

export default imgTextCont