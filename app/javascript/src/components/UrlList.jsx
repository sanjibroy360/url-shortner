import React from "react";
import SingleUrlInfo from "./SingleUrlInfo";

export default function UrlList({ urls }) {
  return (
    <div class="table-responsive">
      <table class="table table-hover my-5">
        <caption>List of users</caption>
        <thead>
          <tr>
            <th scope="col" class="text-center font-weight-bold">
              Pin
            </th>
            <th scope="col" class="text-center font-weight-bold">
              Original Url
            </th>
            <th scope="col" class="text-center font-weight-bold">
              Shortened Url
            </th>
            <th scope="col" class="text-center font-weight-bold">
              Clicks
            </th>
          </tr>
        </thead>
        <tbody>
          {urls?.map((url) => {
            return <SingleUrlInfo url={url} />;
          })}
        </tbody>
      </table>
    </div>
  );
}
