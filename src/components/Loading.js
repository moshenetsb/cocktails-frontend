function Loading({ message = "Loading cocktails..." }) {
  return (
    <div className="loading-screen">
      <div className="spinner">
        <div className="liquid"></div>
      </div>
      <p>{message}</p>
    </div>
  );
}

export default Loading;
