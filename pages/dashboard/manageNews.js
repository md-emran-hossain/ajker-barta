import DashboardHome from "../../components/Dashboard/DashboardHome/DashboardHome";
import ManageNews from "../../components/Dashboard/ManageNews/ManageNews";
import axios from "axios";

export default function ManageNewsRoute({ englishNews, bengaliNews }) {
	return (
		<div>
			<DashboardHome>
				<ManageNews englishNews={englishNews} bengaliNews={bengaliNews} />
			</DashboardHome>
		</div>
	);
}

export const getStaticProps = async () => {
	const enNews = await axios.get("https://ajker-barta.vercel.app/api/news");
	const bnNews = await axios.get("https://ajker-barta.vercel.app/api/bnnews");
	return {
		props: {
			englishNews: enNews.data,
			bengaliNews: bnNews.data
		},
		revalidate: 10
	};
};
