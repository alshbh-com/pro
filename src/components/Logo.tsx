
import React from 'react';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <Link to="/" className="flex items-center gap-2">
      <img 
        src="/lovable-uploads/9e000b94-f8ea-4167-8780-1e416406f07f.png" 
        alt="بروستاكي"
        className="h-14 w-auto" 
      />
      <div className="text-2xl font-bold text-primary">بروستاكي</div>
    </Link>
  );
};

export default Logo;
