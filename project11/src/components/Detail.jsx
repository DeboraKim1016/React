//개별 선수정보를 클릭하면 상세 정보 출력
import React from 'react'
// useParams 
import { useParams } from 'react-router-dom';

//3. Player에서 전송한 list state 받아오기
const Detail = ({list}) => {

     //4. useParams 생성하기
     let {index}=useParams()
     
  return (
    //5. list를 index로 구분하여 각 속성값 출력
    <div className='item-item'
    >
    
        {/* Spring에서 보낸 byte 문자열 형태 이미지데이터 받아오기 */}
        <img src={"data:image/;base64,"+list[index].imgSrc}/>
        <table>
            <tbody>

            <tr>
                <td>이름</td>
                <td>{list[index].name}</td>
            </tr>

            <tr>
                <td>포지션</td>
                <td>{list[index].position}</td>
            </tr>

            <tr>
                <td>나이</td>
                <td>{2023-list[index].age}</td>
            </tr>


            <tr>
                <td>신장</td>
                <td>{list[index].height}</td>
            </tr>

            <tr>
                <td>몸무게</td>
                <td>{list[index].weight}</td>
            </tr>

            <tr>
                <td>소속팀</td>
                <td>{list[index].team}</td>
            </tr>


            </tbody>
        </table>

    </div>
  )
}

export default Detail