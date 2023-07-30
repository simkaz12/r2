import SmallInfo from "./SmallInfo";
import { Greeting } from "./greeting";
import { Search } from "./serach";
import './App.css';

export function Main() {
    return (
        <div className="Container">
            <Search />
            <Greeting />
            <SmallInfo />
        </div>
    )
}