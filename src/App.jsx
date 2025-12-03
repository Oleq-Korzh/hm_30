import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { HashRouter, Routes, Route } from "react-router";
import MainPage from "./pages/MainPage";
import NotFoundPage from "./pages/NotFoundPage";
import { fetchCharactersPage } from "./store/features/characters/characterSlice";
import { ROUTES } from "./helpers/routes";
import CharactersPage from "./pages/CharactersPage";
import "./App.css";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCharactersPage({ isPreview: true }));
  }, [dispatch]);

  return (
    <>
      <HashRouter>
        <Routes>
          <Route path={ROUTES.home} element={<MainPage />}></Route>
          <Route path={ROUTES.characters} element={<CharactersPage />}></Route>
          <Route path="*" element={<NotFoundPage />}></Route>
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
