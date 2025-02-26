import { useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import { FormInput } from "./types/FormInput";

function App() {
  const [formData, setFormData] = useState<FormInput | null>(null);

  const handleFormSubmit = (data: FormInput) => {
    setFormData(data);
  };

  return (
    <>
      <Main onSubmit={handleFormSubmit} />
      <Header data={formData} />
    </>
  );
}

export default App;
