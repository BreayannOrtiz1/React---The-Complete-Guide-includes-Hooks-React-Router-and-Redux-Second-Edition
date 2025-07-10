import { useState } from "react";
import { CORE_CONCEPTS } from "./data";
import Header from "./components/Header/Header.jsx";
import CoreConcept from "./components/CoreConcept.jsx";
import TabButton from "./components/TabButton.jsx";
import { EXAMPLES } from "./data.js";

function App() {
  const [selectedTopic, setSelectedTopic] = useState();
  let tabContent = <p>Please select a topic.</p>;

  if (selectedTopic) {
    console.log("Selected topic:", selectedTopic);
    tabContent = (
      <div id='tab-content'>
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
  }
  function handleOnSelect(selectedButton) {
    // selectedButton is "Components"? or "JSX" or "Props" or "State"
    setSelectedTopic(selectedButton);
  }
  return (
    <div>
      <Header />
      <main>
        <section id='core-concepts'>
          <h2>CORE CONCEPTS</h2>
          <ul>
            {CORE_CONCEPTS.map((item) => {
              return <CoreConcept key={item.title} {...item} />;
            })}
          </ul>
        </section>

        <section id='examples'>
          <h2>Examples</h2>
          <menu>
            <TabButton
              isSelected={selectedTopic === "components"}
              onSelect={() => handleOnSelect("components")}
            >
              Components
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "jsx"}
              onSelect={() => handleOnSelect("jsx")}
            >
              JSX
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "props"}
              onSelect={() => handleOnSelect("props")}
            >
              Props
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "state"}
              onSelect={() => handleOnSelect("state")}
            >
              State
            </TabButton>
          </menu>
          {tabContent}
        </section>
      </main>
    </div>
  );
}

export default App;
