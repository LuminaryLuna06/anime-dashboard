import React from "react";
import GenresSelect from "./components/GenresSelect";
function Genre() {
  window.scrollTo(0, 0);

  return (
    <>
      <div className="h-[650px] flex flex-col justify-center">
        <GenresSelect />
      </div>
    </>
  );
}

export default Genre;
