import { InputBox } from "./components";
import "./App.css";
import { useState } from "react";
import useCurrencyInfo from "./hooks/useCurrencyInfo";

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
    // console.log(currencyInfo);
  };

  const swap = () => {
    setFrom(to)
    setTo(from)
    setAmount(convertedAmount)
    setConvertedAmount(amount)
  }

  return (
    <div className="body w-screen h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url(https://images.pexels.com/photos/6770610/pexels-photo-6770610.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)`
      }}
    >
      <div className="w-full max-w-md border-gray-50 rounded-lg p-8 backdrop-blur-sm bg-white/30">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            convert();
          }}
        >
          <div className="mb-2.5">
            <InputBox
              label={"From"}
              amount={amount}
              currencyOptions={options}
              selectedCurrency={from}
              onAmountChange={(amount) => {
                setAmount(amount);
              }}
              onCurrencyChange={(currency) => setFrom(currency)}
            />
          </div>
          <div className="relative">
            <button className="bg-blue-700 text-white px-2 py-1 rounded-lg absolute left-1/2  -translate-x-1/2 -translate-y-1/2" onClick={swap}>
              swap
            </button>
          </div>
          <div className="mb-4">
            <InputBox
              label={"To"}
              amount={convertedAmount}
              currencyOptions={options}
              selectedCurrency={to}
              onAmountChange={(amount) => {
                setAmount(amount);
              }}
              onCurrencyChange={(currency) => setTo(currency)}
            />
          </div>
          <button className="bg-blue-700 w-full text-xl text-white rounded-lg p-2" onClick={convert}>CONVERT {from.toUpperCase()} To {to.toUpperCase()}</button>
        </form>
      </div>
    </div>
  );
}

export default App;
