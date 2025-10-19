import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import BusinessPlanTool from './page';
import * as aiToolsService from '../../../services/aiToolsService';
import toast from 'react-hot-toast';

// Mock the AI service
jest.mock('../../../services/aiToolsService', () => ({
  generateBusinessPlan: jest.fn(),
}));

// Mock react-hot-toast
jest.mock('react-hot-toast', () => ({
  __esModule: true,
  default: {
    success: jest.fn(),
    error: jest.fn(),
  },
  Toaster: () => <div data-testid="toaster" />,
}));

describe('BusinessPlanTool', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should show a single error toast when generation fails', async () => {
    // Arrange
    aiToolsService.generateBusinessPlan.mockRejectedValue(new Error('API Error'));
    render(<BusinessPlanTool />);
    const generateButton = screen.getByRole('button', { name: /generate/i });

    // Act
    fireEvent.click(generateButton);

    // Assert
    await waitFor(() => {
      expect(toast.error).toHaveBeenCalledWith('Something went wrong!');
      expect(toast.error).toHaveBeenCalledTimes(1);
    });
  });
});