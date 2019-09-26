import React, { createRef } from "react";
import "./App.css";

// Components
import Header from "./component/Header";
import Banner from "./component/Banner";
import Footer from "./component/Footer";
import MyInfo from "./component/MyInfo";
import Container from "./component/Shared/container";
import AllGames from "./component/AllGame";

// Dummy Data
import banners from "./dummy/banners";

// Context
import { AppProvider } from "./context";

function App() {
  return (
    <div>
      <Header />
      <Banner banners={banners} />

      <AppProvider>
        <Container>
          <MyInfo />
          <AllGames />
        </Container>
        <Footer />
      </AppProvider>
    </div>
  );
}

export default App;
