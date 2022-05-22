import Loadable from 'react-loadable'
import Loading from '../components/Common/Loading'

const Dashboard = Loadable({
    loader: () => import('../views/Dashboard'),
    loading: Loading
})

const routes = [
    { path: '/', name: 'One Word Per Day!', component: Dashboard, exact: true}
]

export default routes;