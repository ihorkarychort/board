import React from 'react';

type BoardFormProps = {
  boardTitleInput: string;
  setBoardTitleInput: (title: string) => void;
  onSaveBoard: () => void;
  editingBoardId: string | null;
  setEditingBoardId: (id: string | null) => void;
  error?: string | null; // додано
  loading?: boolean;     // додано
};


const BoardForm: React.FC<BoardFormProps> = ({
  boardTitleInput,
  setBoardTitleInput,
  onSaveBoard,
  setEditingBoardId,
  error,
  loading,
}) => {
  return (
    <div className="board-form" style={{ marginBottom: 20 }}>
      <input
        value={boardTitleInput}
        onChange={(e) => setBoardTitleInput(e.target.value)}
        placeholder="New board title"
        onKeyDown={(e) => {
          if (e.key === 'Enter') onSaveBoard();
          if (e.key === 'Escape') {
            setEditingBoardId(null);
            setBoardTitleInput('');
          }
        }}
      />
      <button onClick={onSaveBoard} disabled={loading}>
        {loading ? 'Creating...' : 'Create Board'}
      </button>
      {error && (
        <div style={{ color: 'red', marginTop: 8 }}>
          ⚠️ {error}
        </div>
      )}
    </div>
  );
};


export default BoardForm;
