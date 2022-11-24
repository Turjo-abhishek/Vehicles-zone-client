import { RouterProvider } from "react-router-dom";
import "./App.css";
import Routes from "./Router/Routes/Routes";


function App() {
  return (
    <div className="w-[1440px] mx-auto">
      <RouterProvider router={Routes}></RouterProvider>
    </div>
  );
}

export default App;
