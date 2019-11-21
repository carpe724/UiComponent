import React from 'react';
import './KeywordStyle.scss';

function Keyword(props){
    return(
        <div className="Keyword">
            <form className="Keyword__form">
                <div className="Keyword__label">키워드 입력</div>
                <div className="Keyword__inputWrap">
                    <input className="Keyword__input" type="text"/>
                    <button className="Keyword__submit">추가</button>
                </div>
            </form>
            <div className="Keyword__labelBox">
                <div className="Keyword__label">키워드</div>
                <ul className="Keyword__labelList">
                    <KeywordItem  KeywordItem={'테스트'} />
                    <KeywordItem  KeywordItem={'테스트'} />
                    <KeywordItem  KeywordItem={'테스트'} />
                    <KeywordItem  KeywordItem={'테스트'} />
                    <KeywordItem  KeywordItem={'테스트'} />
                    <KeywordItem  KeywordItem={'테스트'} />
                    <KeywordItem  KeywordItem={'테스트'} />
                    <KeywordItem  KeywordItem={'테스트'} />
                    <KeywordItem  KeywordItem={'테스트'} />
                    <KeywordItem  KeywordItem={'테스트'} />
                </ul>
            </div>
            <div className="Keyword__cardBox">
                <div className="Keyword__label">키워드 목록</div>
                <ul className="Keyword__cardList">
                    <KeywordCard thumb={`https://placeimg.com/640/480/any`} title={2} desc={3}/>
                </ul>
            </div>
        </div>
    )
}

function KeywordItem(props){
    return(
        <li className="KeywordItem">{props.KeywordItem}<button className="KeywordItem__delete ir">삭제</button></li>
    )
}

function KeywordCard(props){
    return(
        <li className="KeywordCard">
            <div className="KeywordCard__thumb" thumbSrc={props.thumb}></div>
            <div className="KeywordCard__title">{props.title}</div>
            <div className="keywordCard__desc">{props.desc}</div>
        </li>
    )
}



export default Keyword;