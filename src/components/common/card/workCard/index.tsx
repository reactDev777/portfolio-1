import { TextContainer, WorkFlex } from "./element";
import { Image } from "react-bootstrap";

const WorkCard = ({ item }) => {
  return (
    <WorkFlex key={item.id}>
      <Image fluid src={item.img} />
      <TextContainer>
        <p>{item.text}</p>
      </TextContainer>
    </WorkFlex>
  );
};

export default WorkCard;
