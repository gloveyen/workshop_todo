import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DELETE, DONE, INIT } from "../store/todo/action";

function Main(props) {
  const list = useSelector((state) => state.todo.list);
  const done = useSelector((state) => state.todo.done);
  const dispatch = useDispatch();

  useEffect(() => {
    const todolist = ["洗衣服", "烘衣服", "拖地", "澆花"];

    if (!list) {
      dispatch({
        type: INIT,
        payload: todolist,
      });
    }
  }, [list, dispatch]);

  function handleDelete(index) {
    const ensure = window.confirm(`請問是否要刪除項目：「${list[index]}」`);
    if (ensure) {
      dispatch({
        type: DELETE,
        payload: index,
      });
    }
  }

  function handleDone(index) {
    dispatch({
      type: DONE,
      payload: index,
    });
  }

  return list ? (
    <div className="view-main">
      <ul>
        {list.map((item, index) => (
          <li key={item} className={done.includes(item) ? "done" : null}>
            <p>{item}</p>
            <span
              className="material-icons done"
              onClick={() => {
                handleDone(index);
              }}
            >
              done_all
            </span>
            <span
              className="material-icons delete"
              onClick={() => {
                handleDelete(index);
              }}
            >
              delete
            </span>
          </li>
        ))}
      </ul>
    </div>
  ) : null;
}

// const mapStateToProps = ({ todo }) => {
//   return {
//     list: todo.list,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     initTodo: (payload) => {
//       dispatch(initTodo(payload));
//     },
//     dispatch: dispatch,
//   };
// };

export default Main;
// export default connect(mapStateToProps, mapDispatchToProps)(Main);
