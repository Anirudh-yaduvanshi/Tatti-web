
import Card from "react-bootstrap/Card";

function BasicExample({
    title,
    description,
    image
  
}) {
  return (
    <Card style={{ width: "16rem" }}>
      <Card.Img className="pt-5 item-center" variant="top" src={image} />
      <Card.Body>
        <Card.Title className="text-yellow-300 m-7 text-2xl text-center font-normal ">
          {title}
        </Card.Title>
        <Card.Text className="text-yellow-300 text-center">
          {description}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default BasicExample;
