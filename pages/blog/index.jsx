import React from "react";
import { withLayout } from "../../src/layout/Layout";
import BlogList from "../../src/components/blogList/BlogList";
import BlogImageOne from "../../public/images/blog_image_1.webp";

const blogItems = [
  {
    id: 1,
    img: BlogImageOne,
    title: "Прикарпат Гарант. Історія створення організації та наша мета.",
    text: "Йшов пятий місяць війни. Я, Лікаренко Петро Васильович, реєструю свою благодійну організацію, щоб мати можливість допомогти країні.",
    date: "16.09.2023",
  }
];

const BlogPage = () => {
  return (
    <div className="blog-page">
      <h1 className="blog-page__title">Блог фонду</h1>
      <BlogList blogItems={blogItems} />
    </div>
  );
};

export default withLayout(BlogPage);
