
import './tailwind.css';
import Card from 'mf_card/Card';
import Icon from 'mf_icon/Icon';

const sampleCardData = {
  bonus: 100,
  deadline: '~05/29(월)',
  location: '경기 성남시',
};

const App = () => {
  return (
    <div>
      <Icon name='heart' />
      <Card {...sampleCardData} />
      <h1 className='text-blue-blue50'>Rsbuild with React</h1>
    </div>
  );
};

export default App;
