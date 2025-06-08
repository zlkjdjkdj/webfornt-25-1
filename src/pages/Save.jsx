function Save() {
  const saved = localStorage.getItem('myDiaryNotes');
  const notes = saved ? JSON.parse(saved) : [];

  return (
    <div className="container mt-4">
      <h2>📂 지난 일기 보관함</h2>
      {notes.length === 0 ? (
        <p className="text-muted">저장된 일기가 없습니다.</p>
      ) : (
        notes.map((note, idx) => (
          <div key={idx} className="border rounded p-3 mb-3">
            <strong>{note.date}</strong>
            <p>{note.text}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default Save

