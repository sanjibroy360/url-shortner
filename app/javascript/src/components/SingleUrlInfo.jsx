import React, { useEffect, useState } from "react";
import { AiOutlinePushpin, AiFillPushpin } from "react-icons/ai";
import urlsApi from "apis/urls";

export default function SingleUrlInfo({ url }) {
  async function handleRedirection(slug = "") {
    try {
      if (slug.trim()) {
        let response = await urlsApi.visitSiteUsingShortenedUrl(slug);
        window.open(response.data.url.original_url);
      }
    } catch (error) {
      console.log(error);
    } finally {
      window.location.href = "/";
    }
  }

  async function handlePinning(slug = "") {
    try {
      if (slug.trim()) {
        let payload = { url: { pinned: url.pinned || false } };
        let response = await urlsApi.pinUrl(slug, payload);
      }
    } catch (error) {
      console.log(error);
    } finally {
      window.location.href = "/";
    }
  }

  return (
    <tr>
      <th scope="row" class="text-center">
        <button class="btn btn-light" onClick={() => handlePinning(url.slug)}>
          {url.pinned ? <AiFillPushpin /> : <AiOutlinePushpin />}
        </button>
      </th>
      <td class="text-center">
        <a href={url.original_url} target="_blank">
          {url.original_url}
        </a>
      </td>

      <td class="text-center">
        <button
          type="button"
          class="btn btn-link"
          onClick={() => handleRedirection(url.slug)}
        >
          {window.location.origin + "/" + url.slug}
        </button>
      </td>
      <td class="text-center">{url.click_count}</td>
    </tr>
  );
}
