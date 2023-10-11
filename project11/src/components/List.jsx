//선수 프로필 카드 목록 출력->map, props 기능 활용하여 Item 컴포넌트로 list state 값 전송하는 기능 구현


//1. [Player.jsx]에서 전송한 list state 받아오기
import React, { useState } from 'react'
import Item from './Item'

const List = ({list}) => {
    console.log(list);

    /*
    <추가적인 작업>
    (1) 포지션이 MF인 선수만 나오는 배열을 생성
    - 기존의 배열에서 조건을 단 새로운 배열을 만들고 싶으면 사용 : filter
    (2) 만들어진 배열을 map함수로 뿌려주기
    */
    const mfList = list.filter(item=>item.position=="MF")
    console.log(mfList);
  


  {/* 2. map 함수를 사용하여 list값 [Item] 컴포넌트로 전송 */}
  {/* 3. 개별 선수들을 구별하는 index 값 [Item] 컴포넌트로 전송 */}
  return (
    <div className='list-container'>
        <h1>KOREA REPUBLIC</h1>
        <div className='item-container'>
            {list.map((item, index)=><Item 
            key={index}
            name={item.name} 
            position={item.position} 
            
            //Spring에서 보낸 이미지 데이터 받아오기: 이미지->byte 문자열(base64)
            imgSrc={"data:image/;base64,"+item.imgSrc}
            index={index}
            />)}
        </div>  
        <h1>MF</h1>

        <div className='item-container'>
        {list
        .filter((item)=>item.position=='MF')
        .map((item, index)=>
        <Item key={index}
        name={item.name} 
        position={item.position} 
        
        //Spring에서 보낸 이미지 데이터 받아오기: 이미지->byte 문자열(base64)
        imgSrc={"data:image/;base64,"+item.imgSrc}
        index={index}></Item>
        )}
      </div>

    </div>
  )
}

export default List

