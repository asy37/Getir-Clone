import { createRoot } from "react-dom/client";
import "./style.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Pages/Home";
import { Drinks } from "./components/Products/Drinks";
import { Fruit } from "./components/Products/Fruit";
import { Oven } from "./components/Products/Oven";
import { BasicFood } from "./components/Products/BasicFood";
import { Snacks } from "./components/Products/Snacks";
import { IceCream } from "./components/Products/IceCream";
import { Food } from "./components/Products/Food";
import { MilkProducts } from "./components/Products/MilkProducts";
import { Fit } from "./components/Products/Fit";
import { PersonalCare } from "./components/Products/PersonalCare";
import { HomeCare } from "./components/Products/HomeCare";
import { HomeLife } from "./components/Products/HomeLife";
import { Breakfast } from "./components/Products/Breakfast";
import { Pets } from "./components/Products/Pets";
import { Baby } from "./components/Products/Baby";
import { Sexualty } from "./components/Products/Sexualty";
import { Layout } from "./Layout/Layout";
import { CategoriesLayout } from "./Layout/CategoriesLayout";
import { BasketContextProvider } from "./Context/basketContext";
import { MyBasket } from "./components/Pages/MyBasket";

const routes = [
  {
    path: "/",
    element: <Home />,
    layout: Layout,
  },
  {
    path: "/Drinks",
    element: <Drinks />,
    layout: CategoriesLayout,
  },
  {
    path: "/Fruit",
    element: <Fruit />,
    layout: CategoriesLayout,
  },
  {
    path: "/Oven",
    element: <Oven />,
    layout: CategoriesLayout,
  },
  {
    path: "/BasicFood",
    element: <BasicFood />,
    layout: CategoriesLayout,
  },
  {
    path: "/Snacks",
    element: <Snacks />,
    layout: CategoriesLayout,
  },
  {
    path: "/IceCream",
    element: <IceCream />,
    layout: CategoriesLayout,
  },
  {
    path: "/Food",
    element: <Food />,
    layout: CategoriesLayout,
  },
  {
    path: "/MilkProducts",
    element: <MilkProducts />,
    layout: CategoriesLayout,
  },
  {
    path: "/Fit",
    element: <Fit />,
    layout: CategoriesLayout,
  },
  {
    path: "/PersonalCare",
    element: <PersonalCare />,
    layout: CategoriesLayout,
  },
  {
    path: "/HomeCare",
    element: <HomeCare />,
    layout: CategoriesLayout,
  },
  {
    path: "/HomeLife",
    element: <HomeLife />,
    layout: CategoriesLayout,
  },
  {
    path: "/Breakfast",
    element: <Breakfast />,
    layout: CategoriesLayout,
  },
  {
    path: "/Pets",
    element: <Pets />,
    layout: CategoriesLayout,
  },
  {
    path: "/Baby",
    element: <Baby />,
    layout: CategoriesLayout,
  },
  {
    path: "/Sexualty",
    element: <Sexualty />,
    layout: CategoriesLayout,
  },
  {
    path: "/MyBasket",
    element: <MyBasket />,
    layout: Layout,
  },
];

const renderedRoutes = routes.map((route) => (
  <Route key={route.path} path={route.path} element={<route.layout>{route.element}</route.layout>} />
));

const root = createRoot(document.getElementById("root"));
root.render(
  <BasketContextProvider>
    <Router>
      <Routes>{renderedRoutes}</Routes>
    </Router>
  </BasketContextProvider>,
);
