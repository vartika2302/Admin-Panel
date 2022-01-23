import Chart from '../../components/chart/Chart';
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo';
import './home.scss';
import { userData } from '../../dummyData';


export default function Home() {
  return (
      <div className='home'>
          <FeaturedInfo/>
          <Chart data={userData} title="User Analytics" grid dataKey="Active Users"/>
      </div>
  );
}
