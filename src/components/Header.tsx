import React from 'react';
interface HeaderProps {
  title: string;
}

const MyHeader: React.FC<HeaderProps> = ({ title }) => {
  
  return (
    <header className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">{title}</h1>
       
      </div>
    </header>
  );
};

export default MyHeader;