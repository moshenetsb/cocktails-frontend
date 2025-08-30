import Error from "./Error";

function NotFound() {
  return (
    <Error
      title="404 - Page Not Found"
      message="Sorry, the page you are looking for does not exist."
    />
  );
}

export default NotFound;
