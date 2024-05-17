"use client";
import React from "react";
import { useGlobalState } from "@/app/context/GlobalProvider";
import { styled } from "styled-components";

function Page() {
  const { theme } = useGlobalState();

  return (
    <SignUpStyled theme={theme}>
      <div className="container">
        <div className="heading text-center font-black">Sign In</div>
        <form className="form" action="">
          <input
            placeholder="E-mail"
            id="email"
            name="email"
            type="email"
            className="input"
            required
          />
          <input
            placeholder="Password"
            id="password"
            name="password"
            type="password"
            className="input"
            required
          />
          <span className="forgot-password">
            <a href="#">Forgot Password ?</a>
          </span>
          <input value="Sign In" type="submit" className="login-button" />
        </form>
        <span className="agreement">
          Don't have account? <a href="/signup">Register</a>
        </span>
      </div>
    </SignUpStyled>
  );
}

const SignUpStyled = styled.div`
  .container {
    max-width: 26.875rem;
    background-color: ${(props) => props.theme.colorBg2};
    border: 2px solid ${(props) => props.theme.borderColor2};
    border-radius: 2.5rem;
    padding: 25px 35px;

    .heading {
      font-size: 30px;
      color: rgb(16, 137, 211);
    }

    .form {
      margin-top: 20px;

      .input {
        background-color: ${(props) => props.theme.colorBg2};
        border: 2px solid ${(props) => props.theme.borderColor2};
        width: 100%;
        padding: 15px 20px;
        border-radius: 20px;
        margin-top: 15px;
        box-shadow: #cff0ff 0px 9px 7px -10px;
        color: ${(props) => props.theme.colorTextPrimary};
      }

      .input::-moz-placeholder {
        color: rgb(170, 170, 170);
      }

      .input::placeholder {
        color: rgb(170, 170, 170);
      }

      .input:focus {
        outline: none;
        border-inline: 2px solid #12b1d1;
      }

      .forgot-password {
        display: block;
        margin-top: 10px;
        margin-left: 10px;

        a {
          font-size: 11px;
          color: #0099ff;
          text-decoration: none;
        }
      }

      .login-button {
        display: block;
        width: 100%;
        font-weight: bold;
        background: linear-gradient(
          45deg,
          rgb(16, 137, 211) 0%,
          rgb(18, 177, 209) 100%
        );
        color: white;
        padding-block: 15px;
        margin: 20px auto;
        border-radius: 20px;
        box-shadow: #cff0ff 0px 9px 7px -10px;
        border: none;
        transition: all 0.2s ease-in-out;
      }

      .login-button:hover {
        transform: scale(1.03);
        box-shadow: rgba(133, 189, 215, 0.8784313725) 0px 23px 10px -20px;
      }

      .login-button:active {
        transform: scale(0.95);
        box-shadow: rgba(133, 189, 215, 0.8784313725) 0px 15px 10px -10px;
      }
    }

    .agreement {
      display: block;
      text-align: center;
      margin-top: 15px;
      color: ${(props) => props.theme.colorTextPrimary};

      a {
        text-decoration: none;
        color: #0099ff;
        font-size: 15px;
      }
    }
  }
`;

export default Page;
