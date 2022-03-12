import CashFlow from './components/CashFlow';
import Companies from './components/Companies';
import Dashboard from './components/Dashboard';
import Description from './components/Description';
import Header from './components/Header';
import Payments from './components/Payments';
import Products from './components/Products';
import Service from './components/Service';

const Home = ()=> {
    return (
        <div className="">
            <Header />
            <Description />
            <Companies />
            <Products />
            <Dashboard />
            <CashFlow />
            <Payments />
            <Service />
        </div>
    )
};

export default Home;