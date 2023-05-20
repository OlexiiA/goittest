import { Link } from "react-router-dom";
import { Users } from "../../components/Users/Users";
import { BtnBack } from "./Tweets.styled";

export const Tweets = () => {
    return (
        <>
            <Link to={"/"}>
                <BtnBack>Back</BtnBack>
            </Link>
            <Users />
        </>
    )
}