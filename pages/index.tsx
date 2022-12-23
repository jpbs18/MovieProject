import {useContext} from "react";
import {MyLogo, MyTitle, MyPage, MyProgress, MyAd, MyDisclaimers, MyMoviesContainer} from "../components";
import {AppContext} from "./_app";

export default function Home() {

  const {isItOver} = useContext(AppContext);

  return (
      <>
        <MyPage>
          <MyLogo/>
          {!isItOver ?
              <>
                <MyProgress/>
                <MyTitle/>
                <MyMoviesContainer/>
              </> : <MyAd/>}
        </MyPage>
        <MyDisclaimers/>
      </>
  )
};
