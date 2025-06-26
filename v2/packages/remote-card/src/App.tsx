import './tailwind.css';
import Card from './Card';

const App = () => {
  // 샘플 데이터
  const sampleCardData = {
    bonus: 100,
    deadline: '~05/29(월)',
    location: '경기 성남시',
  };

  return (
    <div className='p-8 min-h-screen bg-gray-50'>
      <h1 className='mb-8 text-2xl font-bold text-center'>채용 공고 카드</h1>
      <div className='flex justify-center'>
        <Card {...sampleCardData} />
      </div>
    </div>
  );
};

export default App;
