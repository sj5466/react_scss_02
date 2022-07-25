import React from 'react'
const cardInfor=[
    {
        image:"img/des_01.jpg",
        alt1:"이미지1",
        title:"새로워진 매장 외관",
        desc:"더욱 선명해진 매장 외관으로 자연 그대로의 신선함을 상징하는 잉글리시 그린 색을 사용하였습니다.",
        img:"img/Arrow.png",
        alt2:"화살표"
    },{
        image:"img/des_02.jpg",
        alt1:"이미지2",
        title:"갓 구운 빵 코너",
        desc:"가장 먼저 갓  구운 빵을 만나 보실 수 있는 갓 구운 빵 코너를 통해 조리과정을 보실 수 있습니다.",
        img:"img/Arrow.png",
        alt2:"화살표"
    },{
        image:"img/des_03.jpg",
        alt1:"이미지3",
        title:"디지털 메뉴보드",
        desc:"뚜레쥬르의 다양한 메뉴를 생동감있게 만나 보실 수 있는 디지털메뉴보드가 새롭게 설치되었습니다.",
        text:"더 자세히 보기",
        img:"img/Arrow.png",
        alt2:"화살표"
    }
]
function Info({image,alt1,title,text,desc,img,alt2}){
    return(
        <>
            <article className="card">
                <figure className="card__header">
                    <img src={image} alt={alt1}/>
                </figure>
                <div className="card__body">
                    <h3 className="title">{title}</h3>
                    <p className="desc">{desc}</p>
                    <a className="btn" href="/">
                        {text}
                        <img src={img} alt={alt2}/>
                    </a>
                </div>
            </article>
        </>
    )
}
function CardCont() {
  return (
    <section id="cardType" className="card__wrap section nexon">
    <h2>새로워진 뚜레쥬르</h2>
    <p>
        16년 10월 뚜레쥬르가 신선함이 가득한 베이커리로 태어났습니다. <br/>
        컨셉과 패키지 디자인은 물론 매장 인테리어까지 모두 새로워졌습니다.<br/>
        <span>지금부터 신선함이 가득한 베이커리 <em>뚜레쥬르</em>를 만나보세요.</span>
    </p>
    <div className="card__inner container">
    {cardInfor.map((txt)=>(
            <Info
                image={txt.image}
                alt1={txt.alt1}
                title={txt.title}
                desc={txt.desc}
                text={txt.text}
                img={txt.img}
                alt2={txt.alt2}
                key={txt.title}
            />
        ))}
        
    </div>
</section>
  )
}

export default CardCont