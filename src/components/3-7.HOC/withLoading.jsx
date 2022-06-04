import React, { useEffect, useState } from "react";
import Button from "./Button";

export default function withLoading(Component) {
  const WithLoadingComponent = (props) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      const timer = setTimeout(() => setLoading(false), 2000);

      return () => clearTimeout(timer);
    }, []);
    return loading ? <p>Loading.........</p> : <Component {...props} />;
  };

  return WithLoadingComponent;
}
