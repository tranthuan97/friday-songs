import LandingPage from '../pages/LandingPage'

const publicRoutes = [
    {
        path: "/",
        name: "trang chính",
        component: LandingPage,
        layout: "/common",
        exact: true,
    },
]

export default publicRoutes