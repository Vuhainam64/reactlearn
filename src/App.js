import { Navigate, Route, Routes } from "react-router-dom";
import { Home } from "./container";

function App() {
  return (
    <div className="w-screen h-screen bg-white">
      <Routes>
        <Route path="/home/*" element={<Home />} />

        {/* if not matching  */}
        <Route path="*" element={<Navigate to={"/home"} />} />
      </Routes>
    </div>
  );
}

export default App;
