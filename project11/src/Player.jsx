//json 파일 데이터 가져오고 라우팅 설정하는 기능 구현
// useEffect, useState 
import React, { useEffect, useState } from 'react'
//axios
import axios from 'axios'
// Route, Routes
import { Route, Routes } from 'react-router-dom';

//컴포넌트
import Main from './components/Main';
import List from './components/List';
import Detail from './components/Detail';
import Item from './components/Item';

import './Player.css'

const Player = () => {
  
  /*
  (1)public 폴더 내 json 파일에서 데이터 가져오기
    ->useEffect, axios
    ->state 생성 후 가져온 데이터 세팅
  (2)컴포넌트 생성 및 라우팅 설정
    -메인페이지: Main
    -리스트 페이지: List
    -상세페이지: Detail
  
  */
  
    //1. public 폴더 내 json 파일에서 데이터 가져오기 
    //1-1. 선수목록을 담을 state 생성하기
    const [list, setList]=useState();
  

    //1-2. Spring에서 보낸 json 파일에 접근하여 데이터 state에 저장하기
    useEffect(()=>{

      console.log("Spring으로 요청")
      // let url="http://localhost:8089/SpringBoot2/PlayerList.do"
      //AWS 주소
      let url="http://13.209.7.78:8089/SpringBoot2/PlayerList.do"

    axios
    //Spring에서 보낸 Player.json파일에 접근
    .post(url, {responseType: 'blob'})
    .then((res)=>{
        console.log(res.data);
        //성공 시 선수 리스트 state에 저장
        setList(res.data)
    })
    .catch((res)=>{
        console.log('error');
    })


    }, [])

    return (
    <div>
        {/* 2. 라우팅 설정하기 */}
        <Routes>
            <Route path='/' element={<Main/>}></Route>
            {/* 3. 선수 state값을 List 컴포넌트로 전달 */}
            <Route path='/list' element={<List list={list}/>}></Route>
            <Route path='/item' element={<Item/>}></Route>
            {/* 4. 개별 선수마다 페이지 고유번호 부여(Params) */}
            {/* 5. 선수 state값을 Detail 컴포넌트로 전달 */}
            <Route path='/detail/:index' element={<Detail list={list}/>}></Route>
        </Routes>
        
    </div>
  )
}

export default Player