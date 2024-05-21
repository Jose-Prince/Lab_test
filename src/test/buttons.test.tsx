import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import { test, expect } from 'vitest';
import StandardButton from '../Components/StandardButton';
import { useState } from 'react';

const TestComponent = () => {
  const [operation, setOperation] = useState('')
  const [input, setInput] = useState('')
  const [result, setResult] = useState('')

  return (
    <div>
      <StandardButton label="4" input={input} setInput={setInput} setOperation={setOperation} operation={operation} result={result} setResult={setResult}/>
      <div data-testid="input-value">{input}</div> {/* Mostrar el valor del input */}
    </div>
  )
}

export default TestComponent;

test('changes color when clicked', async () => {
  render(<TestComponent />);
  
  const button = screen.getByText('4');
  
  // Simula un clic
  fireEvent.click(button);
  
  // Verifica que el botón tiene la clase "clicked"
  expect(button.className).toContain('clicked');
  
  // Espera 200ms para verificar que la clase se elimina
  await waitFor(() => {
    expect(button.className).not.toContain('clicked');
  }, { timeout: 250 });
});

test('insert input', async () => {
  render(<TestComponent />);

  const button = screen.getByText('4');

  // Simula tres clics
  fireEvent.click(button);
  fireEvent.click(button);
  fireEvent.click(button);

  // Verifica que el input tiene el valor correcto
  const inputValue = screen.getByTestId('input-value');
  expect(inputValue.textContent).toBe('444');
});

