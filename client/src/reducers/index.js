export default function (state = {}, action) {
    switch (action.type) {
      case "ADD_ITEM_TO_STUDENT":
        return {
          ...state,
          student: {
            ...state.student,
            students: state.student.students.concat(action.payload),
          },
        };
      case "REMOVE_ITEM_FROM_STUDENT":
        const studentToRemove = state.student.students.findIndex(
          (studentId) => studentId === action.payload
        );
        return {
          ...state,
          student: {
            ...state.student,
            students: [
              ...state.student.students.slice(0, studentToRemove),
              ...state.student.students.slice(studentToRemove + 1),
            ],
          },
        };
  
      case "SET_USER_NAME":
        return {
          ...state,
          user: {
            ...state.user,
            username: action.payload,
          },
        };
      default:
        return state;
    }
  }
  