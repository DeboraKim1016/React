//개별선수 프로필 카드->List 컴포넌트에서 받아온 list state 값을 받아와서 선수정보 출력할 기능 구현
import axios from 'axios';
import React from 'react'
// useNavigate
import { useNavigate} from 'react-router-dom';

//1. List 컴포넌트에서 전송한 list state(item, index) 값 받아오기
const Item = ({name, position, imgSrc, index}) => {



    //3-1.  useNavigate 선언
    const nav=useNavigate();

  return (
    //2. 선수이미지(imgSrc), 선수이름(name), 포지션(position) 출력하기
    //3. 프로필 카드 클릭 시 해당선수의 상세페이지로 이동
    //[Player]->detail 컴포넌트 경로 뒤에 인덱스 부여, list state Detail 컴포넌트로 전송
    //[Item] ->useNavigate 사용하여 페이지 이동
    //[Detail] ->useParams 사용하여 개별선수마다 다른 고유번호 부여, list state값 받아와서 선수정보 출력

    //3-2. navigate에 이동할 경로 작성(이동할 컴포넌트+개별 고유번호)
    <div className='item-item'
    onClick={()=>{
        //React->Spring 데이터 전송
        console.log("detail 요청");
        //선수의 이름을 쿼리스트링 방식으로 Spring으로 보내기
        //AWS 주소
        let url='http://13.209.7.78:8090/SpringBoot2/PlayerDetail.do?name='+name;

        axios.get(url)
        .then((res)=>{

            console.log(res.data); //선택한 선수의 정보가 출력되어야 함
        });

        nav(`/detail/${index}`)}}
    >
        <img src={imgSrc}></img>
        <table >
            <tbody>

            <tr>
                <td>이름</td>
                <td>{name}</td>
            </tr>

            <tr>
                <td>포지션</td>
                <td>{position}</td>
            </tr>

            </tbody>
        </table>

    </div>
  )
}

export default Item