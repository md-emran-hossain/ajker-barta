
import International from "../components/Home/International/International";
import Header from "../components/Shared/Header/Header";
import NavigationBar from "../components/Shared/NavigationBar/NavigationBar";

export default function Home() {

  return (
    <div>
      <Header></Header>
      <NavigationBar></NavigationBar>
      <div style={{ height: '1000px' }}>
        <International></International>
      </div>
    </div>
  )
}
