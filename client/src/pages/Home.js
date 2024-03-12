import React from "react";
import DefaultLayout from "../components/DefaultLayout";
import templateImg from "../resources/templates/template_image.png";
import template2Img from "../resources/templates/template_image2.png";
import template3Img from "../resources/templates/template_image3.png";
import template4Img from "../resources/templates/template_image4.png";
import "../resources/templates.css";
import { useNavigate } from "react-router-dom";
function Home() {
  const navigate = useNavigate();
  const templates = [
    {
      title: "Simple Resume",
      image: templateImg,
    },
    {
      title: "Highlighted Section Resume",
      image: template2Img,
    },
    {
      title: "Black and White Hipster Resume",
      image: template3Img,
    },
    {
      title: "Minimalistic Professional Resume",
      image: template4Img,
    },
  ];
  return (
    <DefaultLayout>
      <div className="row home">
        {templates.map((template, index) => {
          return (
            <div className="col-md-3">
              <div className="template">
                <img
                  src={template.image}
                  height="400"
                  style={{ width: "100%" }}
                ></img>
                <div className="template-info">
                  <p>{template.title}</p>
                  <button onClick={() => navigate(`/templates/${index + 1}`)}>
                    TRY
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </DefaultLayout>
  );
}

export default Home;
