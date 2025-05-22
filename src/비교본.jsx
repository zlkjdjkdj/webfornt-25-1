import { useEffect, useState } from 'react'
import './App.css'
import { Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  const [text, setText] = useState("")
  const [notes, setNotes] = useState([])

  // 입력값 변경 처리
  const onChange = (e) => {
    setText(e.target.value)
  }

  // 메모 저장
  const saveNote = () => {
    if (text.trim() === "") return // 공백은 저장 안 함

    const newNote = {
      id: Date.now(),
      text: text,
    }

    const updatedNotes = [...notes, newNote]
    setNotes(updatedNotes)
    localStorage.setItem("notes", JSON.stringify(updatedNotes))
    setText("") // 저장 후 입력창 비우기
  }

  // 앱 시작 시 저장된 노트 불러오기
  useEffect(() => {
    const saved = localStorage.getItem("notes")
    if (saved) {
      setNotes(JSON.parse(saved))
    }
  }, [])

  return (
    <div className="container mt-4">
      <h1>My note</h1>

      <div className="mb-3">
        <input
          type="text"
          value={text}
          onChange={onChange}
          className="form-control"
          placeholder="메모를 입력하세요"
        />
        <Button className="mt-2" onClick={saveNote}>저장</Button>
      </div>

      <div>
        <h4>📒 저장된 노트</h4>
        {notes.length === 0 ? (
          <p className="text-muted">아직 노트가 없습니다.</p>
        ) : (
          <ul>
            {notes.map((note) => (
              <li key={note.id}>{note.text}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}

export default App
