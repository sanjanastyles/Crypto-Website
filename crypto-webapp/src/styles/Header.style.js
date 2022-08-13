import styled from "styled-components";

export const HeaderContainer = styled.header`
  .container {
    display: grid;
    gap: 1px;
    grid-template-areas: " main main main right right right";
    width: 100%;
    padding: 0 7% 3%;
    background-color: #041c32;
  }
  .background_img {
    display: grid;
    align-items: right;
    margin-top: 5%;
    grid-area: right;
    object-fit: cover;
    width: 100%;
    max-height: 100%;
  }
  .content {
    grid-area: main;
    margin-top: 12%;
    color: #fff;
  }
  .content h1 {
    font-size: 6rem;
  }
  .content h1 span {
    background: -webkit-linear-gradient(120deg, #cafbfc, #62c9b8);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .content p {
    margin-top: 20px;
    font-size: 1.2rem;
  }
  .content .btn {
    background: -webkit-linear-gradient(120deg, #cafbfc, #62c9b8);
    border: none;
    border-radius: 30px;
    color: #041c32;
    font-weight: bold;
    padding: 15px 30px;
    margin-top: 20px;
    text-decoration: none;
    display: inline-block;
    font-size: 1.5rem;
  }
  .coinList {
    display: table-column;
    columns: 3;
    align-items: right;
  }

  @media only screen and (max-width: 1350px) {
    .container {
      grid-template-areas: "main main right right";
      grid-template-columns: minmax(0, 1fr) minmax(0, 1fr) minmax(0, 1fr);
    }
    .background_img {
      width: 350px;
    }
    .content h1 {
      font-size: 4rem;
    }
    .content p {
      font-size: 1rem;
    }
    .content .btn {
      font-size: 1rem;
    }
  }
  @media only screen and (max-width: 975px) {
    .container {
      grid-template-areas:
        "main main main "
        "right right right ";
      grid-template-columns: minmax(0, 1fr) minmax(0, 1fr) minmax(0, 1fr);
    }
    .background_img {
      grid-area: right;
      width: 80%;
      margin-top: 5%;
    }
    .content h1 {
      font-size: 4rem;
    }
    .content p {
      font-size: 1rem;
    }
    .content .btn {
      font-size: 1rem;
    }
  }
`;
