import Card from "./Card";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Main({ languages }) {
  return (
    <div className="mt-5 d-flex flex-column ">
      {languages.map((singleLanguage) => (
        <Card key={singleLanguage.id} language={singleLanguage} />
      ))}
    </div>
  );
}
