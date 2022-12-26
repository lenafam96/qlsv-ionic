import "./ListStudent.css";
import { useEffect, useState } from "react";
interface ContainerProps {
  data: any[];
  getData: (sort: string, search: string) => void;
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
  const [sort, setSort] = useState(false);
  const [search, setSearch] = useState("");
  useEffect(() => {
    getData("", search);
  }, [search]);

  const sortButtonClick = () => {
    getData(sort ? "asc" : "desc", search);
    setSort(!sort);
  };

  return (
    <div className="container">
      <div className="wrapper">
        <input className="input-search"
          type="text"
          placeholder="Search ..."
          name="search"
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className="wrapper-button">
          <div>
            <button className="btn btn-add" onClick={() => setAddPageActive(!addPageActive)}>
              Thêm sinh viên
            </button>
          </div>
          <div>
          {sort ? (
            <button className="btn btn-sort" onClick={sortButtonClick}>Sắp xếp ASC </button>
          ) : (
            <button className="btn btn-sort" onClick={sortButtonClick}>Sắp xếp DESC </button>
          )}
          </div>
          
        </div>
        
      </div>
      <div className="container-table">
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
                <td id="avatar" className="preAva">
                  <img src={item.avatar} alt="" />
                </td>
                <td>{item.score}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
    </div>
  );
};

export default ExploreContainer;
