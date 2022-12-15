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

  const getData = async () => {
    await axios
      .get(`https://639aebc9d5141501974456ff.mockapi.io/student`)
      .then((response) => {
        setData(response.data);
      });
  };

  const getDataById = async (id: string) => {
    await axios
      .get(`https://639aebc9d5141501974456ff.mockapi.io/student/` + id)
      .then((response) => {
        console.log(response.data);

        return response.data;
      });
  };

  const postData = async (data: any) => {
    await axios
      .post("https://639aebc9d5141501974456ff.mockapi.io/student", data)
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
      .post("https://639aebc9d5141501974456ff.mockapi.io/student/" + id, data)
      .then((response) => {
        console.log(response.data);
        // setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const updateCurrentId = (id: string) => {
    setCurrentId(id);
  };

  // useEffect(() => {
  //   console.log(editPageActive);
  // }, [editPageActive]);

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
            <IonTitle size="large">Blank</IonTitle>
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
            data={data}
            postData={postData}
            addPageActive={addPageActive}
            setAddPageActive={setAddPageActive}
          />
        ) : (
          ""
        )}
        {editPageActive ? (
          <EditStudent
            data={data}
            putData={putData}
            editPageActive={editPageActive}
            setEditPageActive={setEditPageActive}
            currentId={currentId}
            getDataById={getDataById}
          />
        ) : (
          ""
        )}
      </IonContent>
    </IonPage>
  );
};

export default Home;
