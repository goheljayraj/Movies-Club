import Home from "./pages/home/home";
import {useState} from "react";
import Contacts from "./pages/contacts/contacts";
import Navbar from "./components/Navbar/Navbar";
import TVShows from "./pages/TV Shows/TVShows";
import Spotlight from "./pages/Spotlight/Spotlight";

function App() {
    const [route, setRoute] = useState('home');
    const [id, setId] = useState(-1);
    let res;
    if (route === 'home') {
        res = <Home changeRoute={setRoute} setId={setId}/>;
    } else if (route === 'contacts') {
        res = <Contacts/>;
    } else if (route === 'tvshows') {
        res = <TVShows changeRoute={setRoute}/>;
    } else if (route === 'spotlight') {
        res = <Spotlight id={id}/>
    }
    return <div>
        <Navbar jayraj={setRoute}/>
        {res}
    </div>
}

export default App;
