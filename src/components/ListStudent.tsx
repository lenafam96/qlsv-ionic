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
      <input
        type="text"
        placeholder="Search ..."
        name="search"
        onChange={(e) => setSearch(e.target.value)}
      />
      <button onClick={() => setAddPageActive(!addPageActive)}>
        Thêm sinh viên
      </button>
      {sort ? (
        <button onClick={sortButtonClick}>Sắp xếp ASC </button>
      ) : (
        <button onClick={sortButtonClick}>Sắp xếp DESC </button>
      )}
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
