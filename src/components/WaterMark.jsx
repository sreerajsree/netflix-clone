import React, { useState } from "react";

const WaterMark = () => {
  const [banner, bannerClose] = useState(true);
  return (
    <div>
      {banner ? (
        <div className="py-2 text-center text-red-600 text-sm">
          <p>
            Made with{" "}
            <a className="font-bold" href="https://reactjs.org/">
              React JS
            </a>
            ,{" "}
            <a className="font-bold" href="https://tailwindcss.com/">
              Tailwind CSS
            </a>{" "}
            and{" "}
            <a
              className="font-bold"
              href="https://developers.themoviedb.org/3/getting-started/introduction"
            >
              The Movie Database (TMDB) API
            </a>{" "}
            by
            <a
              className="font-bold underline underline-offset-2"
              href="https://sreerajsree.vercel.app/"
            >
              {" "}
              Seeraj S
            </a>
          </p>
          <button onClick={() => bannerClose(false)} className="text-white text-xl absolute top-0 right-8 font-bold">x</button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default WaterMark;
