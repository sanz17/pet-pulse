import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Row, Col } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import { setCredentials } from "../slices/authSlice";
import UpdateProfile from "../components/UpdateProfile";

const Profile = () => {
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(setCredentials(userInfo));
  }, [userInfo, dispatch]);

  return (
    <Row>
      <Col md={3}>
      </Col>
      <Col md={9}>
        <Routes>
          <Route
            path="/"
            element={<UpdateProfile userInfo={userInfo} dispatch={dispatch} />}
          />
          <Route
            path="update"
            element={<UpdateProfile userInfo={userInfo} dispatch={dispatch} />}
          />
        </Routes>
      </Col>
    </Row>
  );
};

export default Profile;
