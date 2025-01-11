import React from 'react';
import Card from '@/components/common/Card';

const Home: React.FC = () => {
    return (

        <div className="p-8 bg-gray-100 min-h-screen">
            <h1 className="text-2xl text-blue-600 font-bold mb-6">Home page with a card</h1>
            <Card title="1st Card" content="This is the first card"/>
            <br></br>
            <Card title="2nd Card" content="This is the second card" />
            <br></br>
            <Card title="3rd Card" content="This is the third card" />
            <br></br>
            <Card title="4th Card" content="This is the fourth card" />
        </div>
    );
};

export default Home;