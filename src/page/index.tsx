import InDev from "./InDev/inDev";
import Main from "./Main/Main";
import { Routes, Route } from "react-router";
import Page404 from "./Page404.tsx/page-404";

function App () {
    return (
        <Routes>
            <Route index element={<Main />}/>
            <Route path="/" element={<Main />} />
            <Route path="/login" element={<InDev />}></Route>
            <Route path="/registration" element={<InDev />}></Route>
            <Route path="/profile" element={<InDev />}></Route>
            <Route path="/*" element={<Page404 />}></Route>
        </Routes>
        
    )
}
export default App