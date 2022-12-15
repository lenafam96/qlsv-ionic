import "./ListStudent.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
interface ContainerProps {
  data: any[];
  getData: () => void;
  addPageActive: boolean;
  setAddPageActive: (flag: boolean) => void;
  editPageActive: boolean;
  setEditPageActive: (flag: boolean) => void;
  setId: (id: string) => void;
}

const ExploreContainer: React.FC<ContainerProps> = ({
  data,
  getData,
  addPageActive,
  setAddPageActive,
  editPageActive,
  setEditPageActive,
  setId,
}) => {
  useEffect(() => {
    getData();
    // console.log(data);
  }, []);

  return (
    <div className="container">
      <button onClick={() => setAddPageActive(!addPageActive)}>
        Thêm sinh viên
      </button>
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
          {data.map((item: any) => (
            <tr
              key={item.id}
              onClick={() => {
                setEditPageActive(!editPageActive);
                setId(item.id);
              }}
            >
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.address}</td>
              <td id="avatar">
                <img src={item.avatar} alt="" />
              </td>
              <td>{item.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ExploreContainer;
