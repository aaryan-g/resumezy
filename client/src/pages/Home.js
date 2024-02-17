import React from "react";
import DefaultLayout from "../components/DefaultLayout";
import templateImg from "../resources/templates/template_image.png";
import "../resources/templates.css";
import { useNavigate } from "react-router-dom";
function Home() {
  const navigate = useNavigate();
  const templates = [
    {
      title: "Simple Resume",
      image: templateImg,
    },
  ];
  return (
    <DefaultLayout>
      <div className="row home">
        {templates.map((template, index) => {
          return (
            <div className="col-md-4">
              <div className="template">
                <img src={template.image} height="400"></img>
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
