import React from "react";

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectedCurrency = "usd",
}) {
  return (
    <>
      <div className="bg-white rounded-lg flex  text-sm text-black p-3">
        <div>
          <label htmlFor="">{label}</label>
          <input
            className="w-full bg-transparent outline-none py-1.5"
            type="number"
            placeholder="Amount"
            onChange={(e) =>
              onAmountChange && onAmountChange(Number(e.target.value))
            }
            value={amount}
          />
        </div>
        <div className="text-right w-1/2 flex flex-wrap justify-end">
          <p className="mb-2 w-full">Currency Type</p>

          <select
            className="rounded-lg p-1 bg-gray-100 cursor-pointer outline-none"
            value={selectedCurrency}
            onChange={(e) =>
              onCurrencyChange && onCurrencyChange(e.target.value)
            }
          >
            {currencyOptions.map((currency) => (
              <option key={currency} value={currency}>
                {currency}
              </option>
            ))}
          </select>
        </div>
      </div>
    </>
  );
}

export default InputBox;
