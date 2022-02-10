import { useRouter } from "next/router";

const Newsdetails = () => {
    const router = useRouter()
    const newsId = router.query.newsId;
    return (
        <div>
            <h2>THis is news details {newsId} </h2>
        </div>
    );
};

export default Newsdetails;