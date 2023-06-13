import React from "react";

export default function News() {
  const url =
    "https://api.newscatcherapi.com/v2/latest_headlines?countries=PK&topic=sport";
  fetch(url, {
    method: "GET",
    headers: {
      "x-api-key": "-h25MwvTYX02vxMlddacicQt20HJXa0cfOw2JqteIB4",
    },
  })
    .then((resp) => resp.json())
    .then(function (data) {
      console.log(data);
    })
    .catch(function (error) {
      console.log(error);
    });
  return <div>News</div>;
}
