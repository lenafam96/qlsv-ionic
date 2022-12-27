import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import axios from "axios";
import { useEffect, useState } from "react";
import ExploreContainer from "../components/ExploreContainer";
import ListStudent from "../components/ListStudent";
import AddStudent from "../components/AddStudent";
import EditStudent from "../components/EditStudent";
import "./Home.css";

const Home: React.FC = () => {
  const [data, setData] = useState([]);
  const [addPageActive, setAddPageActive] = useState(false);
  const [editPageActive, setEditPageActive] = useState(false);
  const [currentId, setCurrentId] = useState("");

  let proxy = "http://172.31.109.52:8000/".replace("",'')

  
  const getData = async (sort: string = "", search: string = "") => {
    if (search === "") {
      if (sort === "asc") {
        await axios

          .get(`${proxy}students/score_asc`)

          .then((response) => {
            setData(response.data);
          });
      } else if (sort === "desc") {
        await axios

          .get(`${proxy}students/score_desc`)

          .then((response) => {
            setData(response.data);
          });
      } else {
        await axios

          .get(`${proxy}students/`)

          .then((response) => {
            setData(response.data);
          });
      }
    } else {
      await axios
        .get(

          `${proxy}students/search?search=${search}&sort=${sort}`

        )
        .then((response) => {
          setData(response.data);
        });
    }
  };

  const postData = async (data: any) => {
    await axios

      .post(`${proxy}students/create`, data)

      .then((response) => {
        console.log(response.data);
        // setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const putData = async (id: string, data: any) => {
    await axios

      .put(`${proxy}students/` + id, data)

      .then((response) => {
        console.log(response.data);
        // setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const deleteData = async (id: string) => {
    await axios

      .delete(`${proxy}students/` + id)

      .then((response) => {
        console.log(response.data);
        // setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getData();
  }, [editPageActive]);

  const updateCurrentId = (id: string) => {
    setCurrentId(id);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Quản lý sinh viên</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large" className="title">
              Quản lý sinh viên
            </IonTitle>
          </IonToolbar>
        </IonHeader>
        {addPageActive || editPageActive ? (
          ""
        ) : (
          <ListStudent
            data={data}
            getData={getData}
            addPageActive={addPageActive}
            setAddPageActive={setAddPageActive}
            editPageActive={editPageActive}
            setEditPageActive={setEditPageActive}
            setId={updateCurrentId}
          />
        )}
        {addPageActive ? (
          <AddStudent
            postData={postData}
            addPageActive={addPageActive}
            setAddPageActive={setAddPageActive}
          />
        ) : (
          ""
        )}
        {editPageActive ? (
          <EditStudent
            putData={putData}
            deleteData={deleteData}
            editPageActive={editPageActive}
            setEditPageActive={setEditPageActive}
            currentId={currentId}
          />
        ) : (
          ""
        )}
      </IonContent>
    </IonPage>
  );
};

export default Home;
