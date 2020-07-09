import { connect } from "react-redux";

export function Connect(stateToProps) {
  const mapDispatchToProps = (dispatch) => {
    return { dispatch: dispatch };
  };

  return connect(stateToProps, mapDispatchToProps);
}
