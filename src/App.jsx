import { useEffect, useState } from 'react';
import './App.css';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [text, setText] = useState("");
  const [content, setContent] = useState("");
  const [notes, setNotes] = useState([]);

  // 입력값 변경 처리
  const onChange = (e) => {
    setText(e.target.value);
  };

  // 저장 버튼 클릭 시 실행
  const onClick = () => {
    saveNote(); // 노트 저장
    setContent(text); // 텍스트 영역에 표시
    console.log(text);
  };

  // 노트 저장 함수
  const saveNote = () => {
    if (text.trim() === "") return;

    const newNote = {
      id: Date.now(),
      text: text,
    };

    const updatedNotes = [...notes, newNote];
    setNotes(updatedNotes);
    localStorage.setItem("notes", JSON.stringify(updatedNotes));
    setText(""); // 입력창 비우기
  };

  // 앱 시작 시 저장된 노트 불러오기
  useEffect(() => {
    const saved = localStorage.getItem("notes");
    if (saved) {
      setNotes(JSON.parse(saved));
    }
  }, []);

  return (
    <>
      <h1>My note</h1>
      <div>
        <input type="text" value={text} onChange={onChange} />
        <button onClick={onClick}>저장</button>
      </div>

      {/* <div>
        <textarea
          value={content}
          onChange={(e) => {
            setContent(e.target.value);
          }}
        />
      </div> */}

      <h4>📝 저장된 노트</h4>
      <ul>
        {notes.map((note) => (
          <li key={note.id}>{note.text}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
