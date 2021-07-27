import React from "react";
import { Container } from "react-bootstrap";

const AUTH_URL =
  "https://accounts.spotify.com/authorize?client_id=ce11614c033541d1ad2eb09861c0bd10&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state";

export default function Login() {
  return (
    <Container
      className=" justify-content-center my-5"
      // style={{ minHeight: "100vh" }}
    >
      <h1>Continue withSpotify Credential</h1>
      <a className="btn btn-warning rounded-pill btn-md" href={AUTH_URL}>
        Sign In
      </a>
    </Container>
  );
}
