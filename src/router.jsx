import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layouts/layout";
import IndexPage from "./pages/IndexPage";
import { Suspense } from "react";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import AlgoPage from "./pages/AlgoPage";
import { ProtectedLayout } from "./layouts/protectedLayout";

export default function AppRouter() {
  return (
    <MantineProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<IndexPage />} index />
            <Route
              path="/login"
              element={
                <Suspense fallback="Cargando...">
                  <LoginPage />
                </Suspense>
              }
            />
            <Route
              path="/register"
              element={
                <Suspense fallback="Cargando...">
                  <RegisterPage />
                </Suspense>
              }
            />
          </Route>
          <Route element={<ProtectedLayout />}>
            <Route path="/algo" element={<AlgoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </MantineProvider>
  );
}
