import React, { useEffect } from "react";

function Test() {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="w-[300px] h-[400px] bg-background text-text border border-border rounded p-5 flex flex-col gap-3">
        <h1>Hello World</h1>
        <p className="text-text-secondary">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic sit
          nihil iusto omnis adipisci iste sint impedit, magni quidem laborum
          reiciendis aliquam quia assumenda. Vel rerum quis saepe quas officiis?
        </p>
        <button className="p-3 bg-primary border border-primary hover:bg-background hover:border-primary rounded"> Hello World</button>
        <button className="p-3 bg-secondary rounded"> Hello World</button>
        <input type="checkbox" className="accent-accent" />
      </div>
    </div>
  );
}

export default Test;
