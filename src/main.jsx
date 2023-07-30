import SmallInfo from "./SmallInfo";
import { Greeting } from "./greeting";
import { Search } from "./serach";
import './App.css';
import Bottom from "./Bottom";

export function Main() {
    return (
        <div className="Container">
            <Search />
            <Greeting />
            <SmallInfo />
            <Bottom />
        </div>
    )
}