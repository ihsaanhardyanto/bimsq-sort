import explanations from "../../../data/explanations";
import SectionTitle from "./SectionTitle";
import ExplanationItem from "./ExplanationItem";

function Services() {
  return (
    <div className="py-12">
      <SectionTitle>Explanations</SectionTitle>
      <div className="flex flex-col md:flex-row gap-5">
        {explanations.map((explanation) => (
          <ExplanationItem
            key={explanation.title}
            title={explanation.title}
            description={explanation.description}
            step={explanation.step}
            complexity={explanation.complexity}
          />
        ))}
      </div>
    </div>
  );
}

export default Services;
