import { Greeting } from "./greeting";
import { Search } from "./serach";

export function Main() {
    return (
        <div className="Container">
            <Search />
            <Greeting />
        </div>
    )
}