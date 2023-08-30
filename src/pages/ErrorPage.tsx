import { useRouteError } from "react-router-dom";
function ErrorPage() {
    //type setting because error default type is unknown
    const error = useRouteError() as {statusText: string, message: string};
    console.error(error);

    return (
        <div id="error-page"
        style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
        }}>
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occured</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    );
}

export default ErrorPage;