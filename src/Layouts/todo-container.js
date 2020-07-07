import React from "react"
import Tasks from "./tasks"
import { connect } from "react-redux"
import {  deleteTaskAC, addTaskAC } from '../redux/todo-reducer'
import CreateTodo from "./create-todo"


//application components, separation

class TodoContainer extends React.Component {

    render() {


        return (
            <div>
                <div>
                    <CreateTodo user={this.props.user}
                        addTaskAC={this.props.addTaskAC}
                        name={this.props.name} />


                </div>

                <div>


                    {this.props.list.map((l) => <Tasks title={l.title}
                        userName={l.userName}
                        id={l.id}

                        time={l.time}
                        name={this.props.name}

                        deleteTaskAC={this.props.deleteTaskAC}

                    />)}

                </div>
            </div>
        )
    }
}



const mapStateToProps = (state) => {
    return ({
        name: state.todo.name,
        list: state.todo.list,
        //output from the array, so that the main component does not rotate
        user: state.todo.list.map(l => l.userName)

    })
}



export default connect(mapStateToProps, {
     deleteTaskAC, addTaskAC
})(TodoContainer)