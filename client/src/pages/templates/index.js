import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import Template1 from "./Template1";
import Template2 from "./Template2";
import DefaultLayout from "../../components/DefaultLayout";
import { useParams } from "react-router-dom";
import { Button } from "antd";

function Templates() {
  const params = useParams();
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  const getTemplate = () => {
    switch (params.id) {
      case "1":
        return <Template1></Template1>;
      case "2":
        return <Template2></Template2>;
    }
  };
  return (
    <DefaultLayout>
      <div className="d-flex justify-content-end my-5 mx-5">
        <Button onClick={handlePrint}>Print</Button>
        <Button className="back-btn mx-5">Back</Button>
      </div>
      <div ref={componentRef}>{getTemplate()}</div>
    </DefaultLayout>
  );
}

export default Templates;
