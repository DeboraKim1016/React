
//메인 홈페이지->선수정보리스트로 이동하는 기능구현
import React from 'react'
//Link
import { Link } from 'react-router-dom'

const Main = () => {
  /*
    Player List 클릭 시 List 컴포넌트로 이동
    =>Link 태그 이용
  */
  
  
    return (
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    }}>
        <img src='https://www.kfa.or.kr/img_src/main_banner/168871516269107.jpg' alt='국가대표 사진'></img>
        <br/>

        {/* Player List 클릭 시 List 컴포넌트로 이동 */}
        <Link to='/list'
        style={{
            fontSize: '1.5rem',
            fontWeight: 600,
            textDecoration: 'none',
            color: 'black',
            backgroundColor: 'lightgray',
            padding: '20px 30px',
            borderRadius: '20px'
        }}
        >
            Player List
        </Link>


    </div>
  )
}

export default Main