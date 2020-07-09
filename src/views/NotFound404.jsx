import React from "react";
import { Link } from "react-router-dom";

function NotFound404(props) {
  return (
    <div>
      404
      <Link to="/">back home</Link>
    </div>
  );
}

export default NotFound404;
