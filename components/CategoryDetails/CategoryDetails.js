import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import styles from "../../styles/CategoryDetails.module.css";

const CategoryDetails = ({ newses }) => {
  const [category, setCategory] = useState("");
  const subCategories = newses.map((news) => news.subCategory);
  const unique = [...new Set(subCategories)];
  useEffect(() => {
    setCategory(newses[0]?.category);
  }, []);
  const router = useRouter();
  return (
    <div>
      <div className={styles.smallContainer}>
        <h1 className="text-3xl font-bold">{category}</h1>
        <div className="flex flex-wrap gap-3 my-2">
          {unique.map((sub, i) => (
            <span
              onClick={() => router.push(`${category}/${sub}`)}
              className="cursor-pointer"
              key={i}
            >
              {sub}{" "}
            </span>
          ))}
        </div>
        <div className={styles.categoryGrid}>
          {newses?.slice(0, 5).map((news) => (
            <div className={styles.itemBox} key={news.id}>
              <img src={news?.images?.img1} alt="" />
              <h1>{news?.heading}</h1>
              <p>{news?.description?.[0]}</p>
              <p>{news?.publishedDate}</p>
            </div>
          ))}
        </div>
        <div>
          {newses?.slice(5).map((news) => (
            <div className={styles.singleNews} key={news.id}>
              <img src={news?.images?.img1} alt="" />
              <div>
                <h1 className="text-xl font-medium hover:text-red-600 transition-colors duration-300 cursor-pointer">
                  {news?.heading}
                </h1>
                <p className="text-sm my-2">{news.description?.[0]}</p>
                <p className="text-blue-600 text-md">{news?.publishedDate}</p>
              </div>
            </div>
          ))}
        </div>
        <button className="w-32 block py-2 mx-auto mb-5 px-3 rounded-full bg-red-500 text-white hover:bg-red-600 transition-bg duration-300">
          Load More
        </button>
      </div>
    </div>
  );
};

export default CategoryDetails;
