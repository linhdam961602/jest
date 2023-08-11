import { mockData } from "@/mocks/mockData";

type TestWithMockDataProps = {
  data: [];
};

const TestWithMockData = ({ data }: TestWithMockDataProps) => {
  return (
    <div>
      <ul>
        {(data || mockData).map((item: any) => (
          <li key={item.id}>
            {item.id}
            {item.first_name},{item.last_name},{item.email}
          </li>
        ))}
      </ul>
      <div id="checkId">check id Visible</div>
    </div>
  );
};

export default TestWithMockData;
