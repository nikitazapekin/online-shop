const FallbackComponent = ({ error }) => {
    return (
      <div style={{position: "absolute", zIndex: "112222"}}>
        Произошла ошибка: {error.message}. Пожалуйста, обновите страницу или попробуйте позже.
      </div>
    );
  };
  export default FallbackComponent