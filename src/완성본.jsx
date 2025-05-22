import { useEffect, useState } from 'react';
import './App.css';
import { Button, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [text, setText] = useState('');
  const [notes, setNotes] = useState([]);
  const [currentTime, setCurrentTime] = useState('');

  // 현재 시간 갱신
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const formatted = now.toLocaleString();
      setCurrentTime(formatted);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // 앱 시작 시 저장된 노트 불러오기
  useEffect(() => {
    const saved = localStorage.getItem('myDiaryNotes');
    if (saved) {
      setNotes(JSON.parse(saved));
    }
  }, []);

  // 새 노트 저장
  const handleSave = () => {
    if (text.trim() === '') return;
    const now = new Date();
    const newNote = {
      text,
      date: now.toLocaleString(),
    };
    const updatedNotes = [newNote, ...notes];
    setNotes(updatedNotes);
    localStorage.setItem('myDiaryNotes', JSON.stringify(updatedNotes));
    setText('');
  };
  

  return (
    
    <div className="container mt-4">
      {/* 현재 시간 */}
      <h2 className="text-center mb-4">🕒 {currentTime}</h2>
      
      {/* 입력 영역 */}
      <div className="mb-3">
    
        <textarea
          className="form-control"
          placeholder="필요한 내용을 입력하세요"
          value={text}
          onChange={(e) => setText(e.target.value)}
          rows={4}
        />
        <Button variant="primary" onClick={handleSave} className="mt-2">
          저장
        </Button>
     
      </div>

      {/* 저장된 노트 목록 */}
      <h4>📒 작성된 노트</h4>
      {notes.length === 0 ? (
        <p className="text-muted">작성된 노트가 없습니다.</p>
      ) : (
        notes.map((note, index) => (
          <Card key={index} className="mb-3">
            <Card.Header>{note.date}</Card.Header>
            <Card.Body>
              <Card.Text>{note.text}</Card.Text>
            </Card.Body>
          </Card>
        ))
      )}
    </div>
  );
}

export default App;
