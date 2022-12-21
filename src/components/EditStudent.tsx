import "./AddStudent.css";
import { useEffect, useState } from "react";
import axios from "axios";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import app from "../firebase";

interface ContainerProps {
  data: any[];
  putData: (id: string, data: any) => void;
  deleteData: (id: string) => void;
  editPageActive: boolean;
  setEditPageActive: (flag: boolean) => void;
  currentId: string;
}

const EditStudent: React.FC<ContainerProps> = ({
  data,
  putData,
  deleteData,
  editPageActive,
  setEditPageActive,
  currentId,
}) => {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [avatar, setAvatar] = useState("");
  const [score, setScore] = useState("");
  const [progre, setProgre] = useState(false);
  const [student, setStudent] = useState<any>({});

  useEffect(() => {
    const getDataById = async (id: string) => {
      await axios
        .get(`students/searchById?id=` + id)
        .then((response) => {
          console.log(response.data);

          setStudent(response.data[0]);

          setId(response.data[0].id);
          setName(response.data[0].name);
          setAddress(response.data[0].address);
          setAvatar(response.data[0].avatar);
          setScore(response.data[0].score);
        });
    };
    getDataById(currentId);
  }, []);

  const handleClick = async () => {
    console.log({ id, name, address, avatar, score });
    console.log(progre);

    if (progre) {
      await putData(currentId, { id, name, address, avatar, score });
      setEditPageActive(!editPageActive);
    }

    // window.location.reload();
  };

  const handleClickDelete = () => {
    deleteData(currentId);
    setEditPageActive(!editPageActive);
  };

  const handleInputAvatar = (e: React.ChangeEvent<HTMLInputElement>) => {
    let img = e.target.files;

    if (!img) return;
    const fileName = new Date().getTime() + img[0].name;
    const storage = getStorage(app);
    const storageRef = ref(storage, fileName);

    const uploadTask = uploadBytesResumable(storageRef, img[0]);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        setProgre(progress === 100);
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
          default:
        }
      },
      (error) => {
        // Handle unsuccessful uploads
      },
      () => {
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setAvatar(downloadURL);
        });
      }
    );
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
                defaultValue={student.name}
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
                defaultValue={student.address}
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
                defaultValue={student.score}
                onChange={(e) => setScore(e.target.value)}
              />
            </td>
          </tr>
        </tbody>
      </table>
      <button onClick={handleClick}>Cập nhật</button>
      <button onClick={() => handleClickDelete()}>Xoá</button>
      <button onClick={() => setEditPageActive(!editPageActive)}>
        Quay lại
      </button>
    </div>
  );
};

export default EditStudent;
