import React from 'react';

import { CardProps } from '../../interfaces';

const Card: React.FC<CardProps> = ({title, content}) => {
    return (
        <div className="max-w-sm p-4 border border-gray-300 rounded-lg shadow-md bg-white">
            <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
            <p className="mt-2 text-gray-600">{content}</p>
            </div>
    );
};

export default Card;