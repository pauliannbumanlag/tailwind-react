import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';

function Hello() {
  return (
    <div>
      <h1>Hello Tailwind</h1>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hello />} />
      </Routes>
    </Router>
  );
}
