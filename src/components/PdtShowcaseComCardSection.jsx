import { useEffect, useState } from "react";
import PdtShowcaseComCard from "./PdtShowcaseComCard";
import "./styles/PdtShowcaseComCardSection.css"


function PdtShowcaseComCardSection() {

    const [comments, setComments] = useState([]);

    useEffect(() => {
      fetch("http://localhost:3310/items")
        .then((response) => response.json())
        .then((data) => {
          const item = data.find((item) => item.id === 1);
          if (item) {
            setComments(item.client_commentary);
          }
        })
        .catch((error) => console.error("Error fetching data:", error));
    }, []);
    
  return (
    <>
    <div className='pdtShowcaseComCardSection__background'>
        <div className='pdtShowcaseComCardSection__container'>
          <h2 className='pdtShowcaseComCardSection__title'>Ils en parlent !</h2>
          <div className='pdtShowcaseComCardSection__list'>
            {comments.map((comment, index) => (
                <PdtShowcaseComCard
                key={index}
                client_name={comment.clientName}
                commentary={comment.commentary}
                />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default PdtShowcaseComCardSection;
