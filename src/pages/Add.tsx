import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import AddSinhVien from "../components/AddStudent";
import "./Add.css";

const Add: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Thêm sinh viên</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Thêm sinh viên</IonTitle>
          </IonToolbar>
        </IonHeader>
        {/* <AddSinhVien /> */}
      </IonContent>
    </IonPage>
  );
};

export default Add;
