import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import SimpleApi from '../pages/SimpleApi';

// Mock the fetch function
global.fetch = jest.fn();

describe('SimpleApi Component', () => {
  beforeEach(() => {
    // Clear all mocks before each test
    jest.clearAllMocks();
  });

  it('renders the component correctly', () => {
    render(<SimpleApi />);
    
    // Check if the title is rendered
    expect(screen.getByText('Simple API Demo')).toBeInTheDocument();
    
    // Check if the input and button are rendered
    expect(screen.getByPlaceholderText('Enter post ID (1-100)')).toBeInTheDocument();
    expect(screen.getByText('Fetch Post')).toBeInTheDocument();
  });

  it('shows error when trying to fetch without entering an ID', async () => {
    render(<SimpleApi />);
    
    // Click the fetch button without entering an ID
    fireEvent.click(screen.getByText('Fetch Post'));
    
    // Check if error message is displayed
    expect(await screen.findByText('Please enter a post ID')).toBeInTheDocument();
  });

  it('fetches and displays post data successfully', async () => {
    // Mock successful API response
    const mockPost = {
      id: 1,
      title: 'Test Post',
      body: 'This is a test post body'
    };
    
    (global.fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve(mockPost)
    });

    render(<SimpleApi />);
    
    // Enter post ID and click fetch
    fireEvent.change(screen.getByPlaceholderText('Enter post ID (1-100)'), {
      target: { value: '1' }
    });
    fireEvent.click(screen.getByText('Fetch Post'));
    
    // Check loading state
    expect(screen.getByText('Loading...')).toBeInTheDocument();
    
    // Wait for the post to be displayed
    await waitFor(() => {
      expect(screen.getByText(mockPost.title)).toBeInTheDocument();
    });
    expect(screen.getByText(mockPost.body)).toBeInTheDocument();
  });

  it('handles API error correctly', async () => {
    // Mock failed API response
    (global.fetch as jest.Mock).mockResolvedValueOnce({
      ok: false,
      status: 404
    });

    render(<SimpleApi />);
    
    // Enter post ID and click fetch
    fireEvent.change(screen.getByPlaceholderText('Enter post ID (1-100)'), {
      target: { value: '999' }
    });
    fireEvent.click(screen.getByText('Fetch Post'));
    
    // Wait for error message
    await waitFor(() => {
      expect(screen.getByText('Post not found')).toBeInTheDocument();
    });
  });
}); 