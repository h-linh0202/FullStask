import { HomePage } from "../page/HomePage/HomePage";
import { NotFoundPage } from "../page/NotFoundPage/NotFoundPage";
import { OrderPage } from "../page/OrderPage/OrderPage";
import { ProductDetailsPage } from "../page/ProductDetailsPage/ProductDetailsPage";
import { ProductsPage } from "../page/ProductsPage/ProductsPage";
import { SignInPage } from "../page/SignInPage/SignInPage";
import { SignUpPage } from "../page/SignUpPage/SignUpPage";
import { TypeProductPage } from "../page/TypeProductPage/TypeProductPage";

export const routes = [
    {
        path: "/",
        page: HomePage,
        isShowHeader: true

    },
    {
        path: "oderpage",
        page: OrderPage,
        isShowHeader: true

    },
    {
        path: "products",
        page: ProductsPage,
        isShowHeader: true

    },
    {
        path: "/:type",
        page: TypeProductPage,
        isShowHeader: true

    },
    {
        path: "/sign-in",
        page: SignInPage,
        isShowHeader: true

    },
    {
        path: "/sign-up",
        page: SignUpPage,
        isShowHeader: true

    },
    {
        path: "/Product-details",
        page: ProductDetailsPage,
        isShowHeader: true

    },
    {
        path: "*",
        page: NotFoundPage

    }
]