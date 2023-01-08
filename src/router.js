import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import App from "./App"
import { appLoader } from "./loaders";

const router = createBrowserRouter(createRoutesFromElements(
    <Route path="*" element={<App/>} loader={appLoader} />
))

export default router