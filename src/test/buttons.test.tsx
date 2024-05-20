import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import { test, expect } from 'vitest';
import StandardButton from '../Components/StandardButton';

test('changes color when clicked', async () => {
  render(<StandardButton label="4" />);

  const button = screen.getByText('4');

  // Simula un clic
  fireEvent.click(button);

  // Verifica que el botón tiene la clase "clicked"
  expect(button.className).toContain('clicked');

  // Espera 200ms para verificar que la clase se elimina
  await waitFor(() => {
    expect(button.className).not.toContain('clicked');
  }, { timeout: 250 });
})
