import React from "react";
import BlogPage from "./blogpage";
import HeadCus from "./head";

export const metadata = {
  title: "Blogs | Harsh",
  description: "Harsh",
};

export default function Donate() {
  return (
    <>
      <HeadCus params={"Blogs | Harsh"} />
      <BlogPage />
    </>
  );
}
