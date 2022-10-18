import { User } from "firebase/auth"

export type UserState = {
    currentUser: User | {};
}