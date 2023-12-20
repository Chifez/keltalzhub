import TestimonyCard from './testimonyCard';

const TestimonyPage = () => {
  const list = new Array(4).fill(4);
  return (
    <div className="px-12">
      <div className="text-center py-4">
        <h4 className="text-4xl font-semibold mb-2">Words on the street</h4>
        <p className="text-3xl font-medium">
          No need for explanations, here are our evidence
        </p>
      </div>
      <div className="grid grid-cols-2 gap-x-10 gap-y-4">
        {list.map((item, idx) => (
          <TestimonyCard key={idx} />
        ))}
      </div>
    </div>
  );
};
export default TestimonyPage;
