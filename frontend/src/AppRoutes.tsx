import Layout from "./layouts/layout"
import { Navigate ,Route ,Routes } from "react-router-dom"

const AppRoutes = () => {
    return(
        <Routes>
            <Route path="/" element={<Layout>Home Page</Layout>} />
            <Route path="/user-profile" element={<span>USER PROFLE PAGE</span>} />
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    )
}

export default AppRoutes