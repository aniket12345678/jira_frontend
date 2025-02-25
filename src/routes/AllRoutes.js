import Signin from '../pages/auth/Signin'
import ProtectedRoute from '../components/ProtectedRoute'
import Home from '../pages/home/Home'
import Signup from '../pages/auth/Signup'
import Layout from '../components/Layout'
import JobPost from '../pages/jobPost/JobPost'

const AuthRoutes = [
    {
        element: <Signin />,
        path: '/'
    },
    {
        element: <Signup />,
        path: '/signup'
    },
]

const GuardedRoutes = [
    {
        element: <ProtectedRoute />,
        children: [
            {
                element: <Layout Page={Home} />,
                path: '/home'
            },
            {
                element: <Layout Page={JobPost} />,
                path: '/all-jobs'
            },

        ]
    },
]

export const AllRoutes = [...AuthRoutes, ...GuardedRoutes];