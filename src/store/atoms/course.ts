import {atom} from "recoil";

export interface Course {
    _id: string;
    title: string;
    description: string;
    imageLink: string;
    price: string;
}

export const courseState = atom<{isLoading: boolean, course: null | Course}>({
  key: 'courseState',
  default: {
    isLoading: true,
    course: null
  },
});