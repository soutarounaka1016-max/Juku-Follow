(() => {
  const form = document.querySelector('#studentForm');
  if (!form || typeof openStudent !== 'function') return;

  const actions = form.querySelector('.modal-actions');
  const deleteButton = document.createElement('button');
  deleteButton.type = 'button';
  deleteButton.className = 'btn danger';
  deleteButton.textContent = '生徒を削除';
  deleteButton.hidden = true;
  actions.prepend(deleteButton);

  const originalOpenStudent = openStudent;
  openStudent = function openStudentWithDelete(studentId = '') {
    originalOpenStudent(studentId);
    deleteButton.hidden = !studentId;
    deleteButton.dataset.studentId = studentId;
  };

  deleteButton.addEventListener('click', () => {
    const studentId = deleteButton.dataset.studentId;
    const target = student(studentId);
    if (!target) return;
    if (!confirm(`${target.name}さんと関連する授業・宿題・記録を削除しますか？`)) return;

    state.students = state.students.filter((item) => item.id !== studentId);
    state.lessons = state.lessons.filter((item) => item.studentId !== studentId);
    state.homework = state.homework.filter((item) => item.studentId !== studentId);
    state.records = state.records.filter((item) => item.studentId !== studentId);
    document.querySelector('#studentDialog').close();
    save('生徒と関連データを削除しました');
  });
})();
