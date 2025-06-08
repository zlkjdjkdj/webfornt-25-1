import { useState, useEffect } from 'react';
import { Button, Card } from 'react-bootstrap';

function Home() {
  const [text, setText] = useState('');
  const [notes, setNotes] = useState([]);
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      setCurrentTime(now.toLocaleString());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const saved = localStorage.getItem('myDiaryNotes');
    if (saved) setNotes(JSON.parse(saved));
  }, []);

  const handleSave = () => {
    if (text.trim() === '') return;
    const now = new Date();
    const newNote = { text, date: now.toLocaleString() };
    const updated = [newNote, ...notes];
    setNotes(updated);
    localStorage.setItem('myDiaryNotes', JSON.stringify(updated));
    setText('');
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">{currentTime}</h2>
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

      <h4 className="mt-4">📒 작성된 노트</h4>
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

export default Home;
