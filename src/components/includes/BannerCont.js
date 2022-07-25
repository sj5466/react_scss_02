import React from 'react'
const bannerInfor=[
    {
        title:"배너 영역",
        text1:"베이커리 브랜드",
        text2:"뚜레쥬르",
        text3:"매일매일, 하루 3번 매장에서 직접 빵을 굽는 일.",
        desc1:"다른 베이커리에서 쉽게 도전하지 못했던 혁신적인 시도로",
        desc2:"베이커리 시장에 첫 발을 내딛은 뚜레쥬르.",
        text4:"신선한 재료 이야기",
        text5:"직접 구운 빵"
    }
]
function Info({title,text1,text2,text3,text4,text5,desc1,desc2}){
    return(
        <>
        <h2 className="ir_so">{title}</h2>
        <div className="banner__inner">
            <div className="banner_left">
                <h3>{text1} <span>{text2}</span></h3>
                <p>{text3} <br/>
                    {desc1}<br/>
                    {desc2}</p>
                <a href="/" className="btn">{text4}</a>
            </div> 
            <div className="banner_img"><span className="ir_so">{text5}</span></div>
        </div>
        </>
    )
}
function BannerCont() {
  return (
    <section id="bannerType" className="banner__wrap section gmarket">
        {bannerInfor.map((txt)=>(
            <Info
            title={txt.title}
            text1={txt.text1}
            text2={txt.text2}
            text3={txt.text3}
            text4={txt.text4}
            text5={txt.text5}
            desc1={txt.desc1}
            desc2={txt.desc2}
            key={txt.title}
            />
        ))}
    </section>
  )
}

export default BannerCont