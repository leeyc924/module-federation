import type React from 'react';
import '../tailwind.css';

interface CardProps {
  location: string;
  deadline: string;
  bonus: number;
}

const Card: React.FC<CardProps> = ({ location, deadline, bonus }) => {
  return (
    <div className='w-[424px] rounded-2xl border-2 border-secondary bg-white p-8'>
      <div className='flex flex-col gap-2'>
        <div className='flex items-center gap-2'>
          <div className='rounded-lg border border-gray-100 bg-white p-2'>
            <KakaoIcon />
          </div>
          <div className='font-normal text-base text-gray-900'>카카오</div>
        </div>
        <div className='text-gray-900'>
          카카오 경력직 채용 사업/기획, 경영지원, 디자인, 마케팅, 인사, 법무 전
          직군 채용
        </div>
        <div className='flex gap-4'>
          <div className='font-normal text-gray-700 text-sm'>경력</div>
          <div className='font-normal text-gray-700 text-sm'>{deadline}</div>
        </div>
        <div className='mt-3 bg-gray-100 p-2'>
          <div className='font-normal text-gray-900 text-xs'>
            합격축하금 {bonus}만원
          </div>
        </div>
      </div>
    </div>
  );
};

const KakaoIcon = () => {
  return (
    <svg
      fill='none'
      height='30'
      viewBox='0 0 74 30'
      width='74'
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
    >
      <rect fill='white' height='30' width='74' />
      <rect
        fill='url(#pattern0_687_30091)'
        height='24'
        width='59.2'
        x='7.40039'
        y='3'
      />
      <defs>
        <pattern
          height='1'
          id='pattern0_687_30091'
          patternContentUnits='objectBoundingBox'
          width='1'
        >
          <use
            transform='matrix(0.00506757 0 0 0.0125 -0.00675678 0)'
            xlinkHref='#image0_687_30091'
          />
        </pattern>
        <image
          height='80'
          id='image0_687_30091'
          preserveAspectRatio='none'
          width='200'
          xlinkHref='data:image/png;base64,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'
        />
      </defs>
    </svg>
  );
};
export default Card;
