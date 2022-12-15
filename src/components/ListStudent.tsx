import "./ListStudent.css";
import { StudentArray } from "../models/StudentArray";
import { Student } from "../models/Student";
import { useEffect, useState } from "react";
import AddStudent from "./AddStudent";
import EditStudent from "./EditStudent";
interface ContainerProps {}

const ListStudent: React.FC<ContainerProps> = () => {
  // console.log(StudentArray.length);
  // console.log(StudentArray);

  const [arr, setArr] = useState(StudentArray);
  const [popupAdd, setPopupAdd] = useState(false);
  const [popupEdit, setPopupEdit] = useState(false);
  const [student, setStudent] = useState(new Student());

  useEffect(() => {
    // console.log(arr);
    // setClick(click + 1);
    // setArr(StudentArray);
  }, [popupAdd, popupEdit]);
  const updatePopupAdd = (pop: boolean) => {
    setPopupAdd(pop);
  };

  const updatePopupEdit = (pop: boolean) => {
    setPopupEdit(pop);
  };
  const handleClick = () => {
    setPopupAdd(!popupAdd);
  };

  const showPopupEdit = (st: Student) => {
    setPopupEdit(!popupEdit);
    setStudent(st);
  };

  return (
    <div className="container">
      {popupAdd && <AddStudent popup={popupAdd} updatePopup={updatePopupAdd} />}
      {popupEdit && (
        <EditStudent
          popup={popupEdit}
          updatePopup={updatePopupEdit}
          student={student}
        />
      )}
      {popupAdd ? " " : <button onClick={handleClick}>Thêm sinh viên</button>}
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Address</th>
              <th>Avatar</th>
              <th>Score</th>
            </tr>
          </thead>
          <tbody>
            {arr.map((item) => (
              <tr
                key={item.getId()}
                onClick={() => {
                  showPopupEdit(item);
                }}
              >
                <td>{item.getId()}</td>
                <td>{item.getName()}</td>
                <td>{item.getAddress()}</td>
                <td id="avatar">
                  <img src={item.getAvatar()} alt="" />
                </td>
                <td>{item.getScore()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListStudent;
