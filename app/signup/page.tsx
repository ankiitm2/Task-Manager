"use client";
import React, { useState } from "react";
import { useGlobalState } from "@/app/context/GlobalProvider";
import { styled } from "styled-components";
import { useRouter } from "next/navigation";

function Page() {
  const [error, setError] = useState("");
  const { theme } = useGlobalState();

  const route = useRouter();

  const handleSignUp = async (e: any) => {
    e.preventDefault();
    const name = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });
      if (res.status === 400) {
        setError("Email is already regitered");
      }
      if (res.status === 200) {
        setError("");
        route.push("/signin");
      }
    } catch (error) {
      setError("Error, Try again");
    }
  };

  return (
    <SignUpStyled theme={theme}>
      <div className="container m-5">
        <div className="heading text-center font-black">Sign Up</div>
        <form className="form" onSubmit={handleSignUp}>
          <input
            placeholder="Name"
            id="name"
            name="name"
            type="text"
            className="input"
            required
          />
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
          <input value="Sign Up" type="submit" className="login-button" />
        </form>
        <div className="social-account-container">
          <span className="title">Or Sign in with</span>
          <div className="social-accounts">
            <button className="social-button google">
              <svg
                viewBox="0 0 488 512"
                height="1em"
                xmlns="http://www.w3.org/2000/svg"
                className="svg"
              >
                <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path>
              </svg>
            </button>
            <button className="social-button apple">
              <svg
                viewBox="0 0 384 512"
                height="1em"
                xmlns="http://www.w3.org/2000/svg"
                className="svg"
              >
                <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"></path>
              </svg>
            </button>
            <button className="social-button twitter">
              <svg
                viewBox="0 0 512 512"
                height="1em"
                xmlns="http://www.w3.org/2000/svg"
                className="svg"
              >
                <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"></path>
              </svg>
            </button>
          </div>
        </div>
        <span className="agreement">
          Already have account? <a href="/signin">Sign In</a>
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

    .social-account-container {
      margin-top: 25px;

      .title {
        display: block;
        text-align: center;
        font-size: 14px;
        color: rgb(170, 170, 170);
      }

      .social-accounts {
        width: 100%;
        display: flex;
        justify-content: center;
        gap: 15px;
        margin-top: 5px;

        .social-button {
          background: linear-gradient(
            45deg,
            rgb(0, 0, 0) 0%,
            rgb(112, 112, 112) 100%
          );
          border: 0px solid ${(props) => props.theme.borderColor2};
          padding: 5px;
          border-radius: 50%;
          width: 40px;
          aspect-ratio: 1;
          display: grid;
          place-content: center;
          box-shadow: rgba(133, 189, 215, 0.8784313725) -2px 8px 15px -10px;
          transition: all 0.2s ease-in-out;

          .svg {
            fill: ${(props) => props.theme.colorTextPrimary};
            margin: auto;
          }
        }

        .social-button:hover {
          transform: scale(1.2);
        }

        .social-button:active {
          transform: scale(0.9);
        }
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
