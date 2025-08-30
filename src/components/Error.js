function Error({ title = "Error", message = "Something went wrong." }) {
  return (
    <div className="error-page">
      <h2>{title}</h2>
      <p>{message}</p>
    </div>
  );
}

export default Error;
