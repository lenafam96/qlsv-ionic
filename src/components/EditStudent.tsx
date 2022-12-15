import "./AddStudent.css";
import { useEffect, useState } from "react";

interface ContainerProps {
  data: any[];
  putData: (id: string, data: any) => void;
  editPageActive: boolean;
  setEditPageActive: (flag: boolean) => void;
  currentId: string;
  getDataById: (id: string) => {};
}

const EditStudent: React.FC<ContainerProps> = ({
  data,
  putData,
  editPageActive,
  setEditPageActive,
  currentId,
  getDataById,
}) => {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [avatar, setAvatar] = useState("");
  const [score, setScore] = useState("");
  const [idError, setIdError] = useState(false);
  const [student, setStudent] = useState({});

  useEffect(() => {
    setStudent(getDataById(currentId));
    console.log(getDataById(currentId));
    console.log(currentId);
  }, []);

  const handleClick = async () => {
    await putData(currentId, { id, name, address, avatar, score });
    setEditPageActive(!editPageActive);
    // window.location.reload();
  };

  const handleInputAvatar = (e: React.ChangeEvent<HTMLInputElement>) => {
    let img = e.target.files;

    if (!img) return;
    setAvatar(URL.createObjectURL(img[0]));
  };
  return (
    <div className="container">
      <table>
        <tbody>
          <tr>
            <td>Id</td>
            <td>
              <input
                type="text"
                name="id"
                id=""
                defaultValue={currentId}
                onChange={(e) => setId(e.target.value)}
              />
            </td>
          </tr>
          <tr>
            <td>Name</td>
            <td>
              <input
                type="text"
                name="name"
                id=""
                defaultValue={""}
                onChange={(e) => setName(e.target.value)}
              />
            </td>
          </tr>
          <tr>
            <td>Address</td>
            <td>
              <input
                type="text"
                name="address"
                id=""
                onChange={(e) => setAddress(e.target.value)}
              />
            </td>
          </tr>
          <tr>
            <td>Avatar</td>
            <td>
              <input
                accept="image/*"
                type="file"
                name="avatar"
                id=""
                multiple={false}
                onChange={(e) => handleInputAvatar(e)}
              />
            </td>
          </tr>
          <tr>
            <td>Score</td>
            <td>
              <input
                type="number"
                name="score"
                id=""
                onChange={(e) => setScore(e.target.value)}
              />
            </td>
          </tr>
        </tbody>
      </table>
      <button onClick={handleClick}>Cập nhật</button>
      <button onClick={() => setEditPageActive(!editPageActive)}>
        Quay lại
      </button>
    </div>
  );
};

export default EditStudent;
