import { Student } from "./Student";

const StudentArray: Student[] = [];
export { StudentArray };

export function checkIdExists(id: string): boolean {
  for (let i = 0; i < StudentArray.length; i++) {
    if (StudentArray[i].getId() === id) {
      return true;
    }
  }
  return false;
}

export function checkIdExistsToUpdate(oldID: string, newId: string): boolean {
  const tempArray = StudentArray.filter((item) => {
    return oldID !== item.getId();
  });
  for (let i = 0; i < tempArray.length; i++) {
    if (tempArray[i].getId() === newId) {
      return true;
    }
  }
  return false;
}
