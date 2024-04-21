import { useEffect, useState } from "react";
import { CryptoResponse, CurrencyInfo } from "../types/ApiResponseTypes";

interface SearchCryptoProps {
  props: CryptoResponse;
}

function useDebouncedValue(value: string) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    if (!value) {
      setDebouncedValue("");
      return;
    }
    const timeoutId = setTimeout(() => {
      setDebouncedValue(value);
    }, 500);
    return () => clearTimeout(timeoutId);
  }, [value]);

  return debouncedValue;
}

function CurrencySearch({ props }: SearchCryptoProps) {
  const [filter, setFilter] = useState("");
  const [filteredValues, setFilteredValues] = useState<CurrencyInfo[] | []>([]);
  const debouncedValue = useDebouncedValue(filter);

  useEffect(() => {
    (async () => {
      setFilteredValues([]);
      if (!debouncedValue) return;

      const regex = new RegExp(debouncedValue, "i");
      if (props.data) {
        const filteredResults = props.data.filter((element) =>
          // eslint-disable-next-line prettier/prettier
          regex.test(element.id)
        );
        setFilteredValues(filteredResults);
      }
    })();
  }, [debouncedValue, props]);

  return (
    <section className="search__section">
      <form className="search__form" onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="filter">
          Look for a coin:
          <input
            type="text"
            id="filter"
            onChange={(e) => setFilter(e.target.value)}
            value={filter}
          />
        </label>
      </form>
      <section>
        {filteredValues &&
          filteredValues.map((currency) => (
            <article key={currency?.id}>{currency?.id}</article>
          ))}
        {!debouncedValue && <p>Type to see results.</p>}
      </section>
    </section>
  );
}

export default CurrencySearch;
