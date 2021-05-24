import dotenv from "dotenv";
import App from "./index";

dotenv.config({
  path: process.env.NODE_ENV === "dev" ? ".env.dev" : null,
});

const app = new App();
app.init();
