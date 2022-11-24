import { RouterProvider } from "react-router-dom";
import "./App.css";
import Routes from "./Router/Routes/Routes";


function App() {
  return (
    <div className="max-w-6xl mx-auto">
      <RouterProvider router={Routes}></RouterProvider>
    </div>
  );
}

export default App;
