import Header from "./components/Header/Header";
import FormInput from "./components/FormInput/FormInput";
import InvestmentList from "./components/InvestmentList/InvestmentList";
import React, { useState } from "react";

function App() {
  const [userInput, setUserInput] = useState(null);
  const calculateHandler = (userInput) => {
    setUserInput(userInput);
  };
  const yearlyData = []; // per-year results
  if (userInput) {
    

    let currentSavings = +userInput["current-savings"]; // feel free to change the shape of this input object!
    const yearlyContribution = +userInput["yearly-contribution"]; // as mentioned: feel free to change the shape...
    const expectedReturn = +userInput["expected-return"] / 100;
    const duration = +userInput["duration"];

    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }
  }

  return (
    <div>
      <Header />
      <FormInput onFormSubmit={calculateHandler} />
      {!userInput && <p style={{textAlign: 'center'}}>No Informtion is input for calculation yet</p>}
      {userInput && (
        <InvestmentList
          onReceiveData={yearlyData}
          intialInvestment={userInput["current-savings"]}
        />
      )}

      {/* Todo: Show below table conditionally (only once result data is available) */}
      {/* Show fallback text if no data is available */}
    </div>
  );
}

export default App;
