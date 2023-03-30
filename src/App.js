/* eslint-disable */

import logo from './logo.svg'
import './App.css'
import {useState} from 'react'

function App() {
  const logo = "ReactBlog";
  const [subject, setSubject] = useState(['남자코트 추천','강남 우동맛집','파이썬독학']);
  const [like, setLike] = useState([0,0,0]);
  const [modal, setModal] = useState(false);

  return (
    <div className='App'>
      <div className="header">
        <h4>{logo}</h4>
      </div>

      <div className="search">
        <button onClick={()=>{
          const copy = [...subject];
          copy[0] = "여자코트 추천";

          setSubject(copy);
        }}>글수정</button>
        <button onClick={()=>{
          const copy = [...subject];
          copy.sort();

          setSubject(copy);
        }}>가나다순 정렬</button>
      </div>

      {/* <div className="list">
        <div className="item">
          <h4>{subject[0]} <span onClick={likeUp}>👍</span> {like}</h4>
          <p>2월 17일 발행</p>
        </div>
        <div className="item">
          <h4>{subject[1]} <span>👍</span> {like[1]}</h4>
          <p>2월 17일 발행</p>
        </div>
        <div className="item">
          <h4 onClick={()=>{ setModal(!modal) }}>{subject[2]} <span>👍</span> {like[2]}</h4>
          <p>2월 17일 발행</p>
        </div>
      </div> */}

      <div className="list">
      {
        subject.map(function(a, i){
          return (
            <div key={i} className="item">
              <h4 onClick={()=>{ setModal(!modal) }}>
                {subject[i]}
                <span onClick={()=>{
                  const copy = [...like];
                  copy[i] = copy[i]+1;
              
                  setLike(copy);
                }}>👍</span> {like[i]}
              </h4>
              <p>2월 17일 발행</p>
            </div>
          )
        })
      }
      </div>

      {
        modal ? <Modal subject={subject} /> : null
      }
    </div>
  )
}

const Modal = props => {
  const {subject} = props;

  return (
    <>
      <div className="modal">
        <h4>{subject}</h4>
        <p>날짜</p>
        <p>상세내용</p>
      </div>
    </>
  )
}

export default App
