import axios from "axios";
import SearchNews from "../../components/SearchNews/SearchNews";

const searchNews = ({ newses }) => <SearchNews newses={newses} />;

export const getStaticProps = async () => {
	const news = await axios.get("https://ajker-barta.vercel.app/api/news");
	return {
		props: {
			newses: news.data
		},
		revalidate: 10
	};
};

export default searchNews;
