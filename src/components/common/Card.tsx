import Image from 'next/image';
import React from 'react';

const cards = [
  { title: "프로젝트", subtitle: "웹사이트 리뉴얼", category: "UI/UX", image: "/images/project_1.png" },
  { title: "3D 아트", subtitle: "Blender", category: "3D", image: "/images/project_2.jpg" },
  { title: "TM 리브랜딩", subtitle: "브랜드 마케팅", category: "브랜드", image: "/images/project_3.png" },
  { title: "포스터 디자인", subtitle: "그래픽 디자인", category: "브랜드", image: "/images/project_4.png" },
];

function Card({ title, subtitle, category, image } : any) {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <Image className="w-full" src={image} alt={title} width={100} height={100} priority/>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">
          {subtitle}
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{category}</span>
      </div>
    </div>
  );
}

function CardsList() {
  return (
    <div className="p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {cards.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
    </div>
  );
}

export default CardsList;
