const ErrorFallback = ({ error, resetErrorBoundary }: any) => {
  return (
    <div className="">
      <p>Something went wrong:</p>
      <pre style={{ color: "red" }}>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
};
export default ErrorFallback;
