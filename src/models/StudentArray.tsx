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
