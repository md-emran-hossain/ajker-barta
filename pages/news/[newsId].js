import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Newsdetails = () => {
    const [news, setNews] = useState({})
    const router = useRouter()
    const newsId = router.query.newsId;
    useEffect(() => {
        fetch('/Bangladesh.json')
        .then(res => res.json())
        .then(data => {
            setNews(data.find(item => item.id === newsId))
        })
    }, [newsId])
    return (
        <div>
           
            {console.log(news)}
           
            <h2>THis is news details {newsId} </h2>
        </div>
    );
};

export default Newsdetails;