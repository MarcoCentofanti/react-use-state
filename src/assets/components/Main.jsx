import Card from "./Card";
import Card2 from "./Card2";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Main({ languages }) {
  return (
    <div className="mt-5 d-flex flex-column ">
      {languages.map((singleLanguage) => (
        <Card2 key={singleLanguage.id} language={singleLanguage} />
      ))}
    </div>
  );
}
