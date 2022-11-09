import React, { useState, useEffect } from "react";
import axios from "axios";

import Error from "../components/layout/Error";

const Characters = () => {
  const hash = "d90867f9c05c9ba732a2c85ee9e22ac1";
  const publicKey = "a6a49d6dede014c0ce382698879344a3";

  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // useEffect(() => {
  //   const fetch = async () => {
  //     const result = await axios.get(
  //       `http://gateway.marvel.com/v1/public/characters?ts=1&apikey=${publicKey}&hash=${hash}`
  //     );

  //     setItems(result.data.data.results);
  //   };
  //   fetch();
  // }, []);

  console.log("items", items);

  return items.length !== 0 ? (
    <div>
      {items.map((item) => {
        return <div key={item.id}>{item.name}</div>;
      })}
    </div>
  ) : (
    <Error />
  );
};

export default Characters;
