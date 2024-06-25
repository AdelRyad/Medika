import React from "react";

const Description = ({ description }: { description: string }) => {
  return (
    <div>
      <h1 className="text-lg font-semibold">Description</h1>
      <p className="text-sm mt-3">{description}</p>
    </div>
  );
};

export default Description;
