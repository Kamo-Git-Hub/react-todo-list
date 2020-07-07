const initialState = {
    name: "Todo List",
    list: [
        {
            id: 0,
            title: "",
            userName: "",
            time: "",
            // done: false,
        }
    ]
}




//dynamic id generation
// each new title will increment count by 1,
// the resulting number will serve as an id for the title
let count = 0


const ADD_TASK = "ADD_TASK"
const DELETE = "DELETE"





export const todoReducer = (state = initialState, action) => {
    switch (action.type) {
       
        case ADD_TASK: {
            const pushed = {
                title: action.addTask,
                userName: action.userName,
                time: action.time,
                id: ++count
            }
            return {
                ...state,
                list: [...state.list, pushed]

            }
        }
        case DELETE:
            return {
                ...state,
                list: state.list.filter(title => title.id !== action.taskId)


            }
        default:
            return state
    }
}



export const addTaskAC = (addTask, userName, time) => ({ type: ADD_TASK, addTask, userName, time })
export const deleteTaskAC = (taskId) => ({ type: DELETE, taskId })


