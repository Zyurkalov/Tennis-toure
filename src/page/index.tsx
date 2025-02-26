import InDev from "./InDev/inDev";
import Main from "./Main/Main";
import ServiceWrapper from "../components/serviceWrapper/ServiceWrapper";
//import AssessmentSet from "./AssessmentSet/AssessmentSet";

import { Routes, Route, Navigate } from "react-router";
import Page404 from "./Page404.tsx/page-404";
import Wrapper from "../components/wrapper/Wrapper";
import { Suspense, lazy } from "react";

function App () {
    const AssessmentSet = lazy(() => import('./AssessmentSet/AssessmentSet'))
    return (
        
        <Routes>
            <Route path="/" element={<Wrapper />}> 
                <Route path="/" element={<Main />} />
                <Route path="/login" element={<InDev />}></Route>
                <Route path="/registration" element={<InDev />}></Route>
                <Route path="/profile" element={<InDev />}></Route>
                <Route path="/service" element={<ServiceWrapper />}>
                    <Route index element={<Navigate to={"assessment-set"} replace />} />
                    <Route 
                        path="assessment-set" 
                        element={ <Suspense fallback={<span>Загрузка...</span>}><AssessmentSet /></Suspense> }>
                    </Route>
                </Route>
            </Route >

            <Route path="/*" element={<Page404 />}></Route>
        </Routes>  
    )
}
export default App