
import International from "../components/Home/International/International";
import Sports from "../components/Home/Sports/Sports";
import Header from "../components/Shared/Header/Header";
import NavigationBar from "../components/Shared/NavigationBar/NavigationBar";

export default function Home() {

  return (
    <div>
      <Header></Header>
      <NavigationBar></NavigationBar>
      <International></International>
      <Sports></Sports>
    </div>
  )
}
